console.log("Scripte is added")
const latitude = 21.8129
const longitude = 80.1838
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`

window.addEventListener("load", fetchWeather);

let mainTemp = ''
function fetchWeather() {
    const tempratureElement = document.getElementById("temp-section");

    fetch(url).then((data) => {
        return data.json();
    }).then((data) => {
        console.log("Temprature data", data);
        mainTemp = data
        let temp = data.current.temperature_2m;
        let wind = data.current.wind_speed_10m;
        tempratureElement.innerHTML = `<h3> Temprature ${temp} C </h3> 
        <h4> Wind Speed ${wind} </h4>
        `

    }).catch((e) => {
        console.log("error while fething temp", e.message)
    })

}

// view button funtionality

const viewBtn = document.getElementById("view-btn");
console.log("view", viewBtn)

viewBtn.addEventListener("click", viewDetailClick)

function viewDetailClick() {
    const tablebody = document.getElementById("t-body-sec")
    let len = mainTemp.hourly.time.length;

    for (i = 0; i < len; i++) {
        let tableRow = document.createElement("tr");
        // <tr>
        // <td> </td>
        // <td> </td>
        // <td> </td>
        // <td> </td>
        //</tr>
        let tableContent = document.createElement("td")
        let tableContent2 = document.createElement("td")
        let tableContent3 = document.createElement("td")
        let tableContent4 = document.createElement("td")
        tableContent.innerHTML = mainTemp.hourly.time[i]
        tableContent2.innerHTML = mainTemp.hourly.temperature_2m[i]
        tableContent3.innerHTML = mainTemp.hourly.relative_humidity_2m[i]
        tableContent4.innerHTML = mainTemp.hourly.wind_speed_10m[i]

        tableRow.append(tableContent)
        tableRow.append(tableContent2)
        tableRow.append(tableContent3)
        tableRow.append(tableContent4)

        tablebody.append(tableRow)
    }

    mainTemp.hourly.time.map((time) => {

    })


}