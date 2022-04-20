const submitBtn= document.getElementById('submit-btn');
const cityName= document.getElementById('cityName');
const errormsg=document.getElementById("weather_res");
const temperature=document.getElementById("temperature");
const tempStatus=document.getElementById("temp_status");
const data_hide=document.querySelector('.data_hide');

const getInfo= async(event)=>{
    event.preventDefault()
    let cityTemp= cityName.value;
    if(cityTemp=== ""){
            errormsg.innerText= "Please enter a city name";
            data_hide.classList.add("data_hide");
    }else{
       try{ let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityTemp}&units=metric&appid=87dc77e21042b4013b3cc0cbd1fa36db`;
        const response= await fetch(url);
        const data= await response.json();
        // console.log(data);
        const arrData= [data];

        errormsg.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
        temperature.innerText= arrData[0].main.temp;
            // tempStatus.innerText= arrData[0].weather[0].description;

            const tempMood= arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                tempStatus.innerHTML=
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if (tempMood == "Clouds"){
                tempStatus.innerHTML=
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain"){
                tempStatus.innerHTML=
                "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
            } else{
                tempStatus.innerHTML=
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            data_hide.classList.remove("data_hide")
    } catch{
        errormsg.innerText="Please enter a proper city name"
        data_hide.classList.add("data_hide")
    }
}

}

submitBtn.addEventListener("click",getInfo);
