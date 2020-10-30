const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const tempRealValue = document.getElementById("tempRealValue")
const temp_status = document.getElementById("temp_status")
const datahide=document.querySelector(".middle_layer")

const getInfo = async (event) => {
    event.preventDefault();
    let cityValue = cityname.value;


    if (cityValue === "") {
        city_name.innerText = "Please Enter Your City Name"
        datahide.classList.add("data_hide")
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=79dcf37befabb3b642f55ffb3c85a603`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
            tempRealValue.innerText = arrData[0].main.temp;

            const tempMode = arrData[0].weather[0].main;
            // condition cheak sunny to cloudy
            if (tempMode == "Clear") {
                temp_status.innerHTML = `<i class="fas fa-sun" style = "color:#eccc68"></i>`
            } else if (tempMode == "clouds") {
                temp_status.innerHTML = `<i class="fas fa-cloud" style = "color:#f1f2f6"></i>`
            }
            else if (tempMode == "Rain") {
                temp_status.innerHTML = `<i class="fas fa-cloud-rain" style = "color:#0097e6"></i>`
            }
            else {
                temp_status.innerHTML = `<i class="fas fa-cloud" style = "color:#f1f2f6"></i>`
            }
        datahide.classList.remove("data_hide")

        } catch {
            city_name.innerText = "Please Enter Your Currect City Name";
        datahide.classList.add("data_hide")

        }

    }
}

submitbtn.addEventListener("click", getInfo);