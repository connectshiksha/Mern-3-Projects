console.log("connection build");

// url = https://api.unsplash.com/search/photos?query=cat&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k

// funtionality on load 
let loadFunc = () => {
    const myImageDiv = document.getElementById("imageDiv");

    fetch("https://api.unsplash.com/search/photos?query=india&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k").then((data) => {
        return data.json()
    }).then((data) => {
        console.log("Data from unplash api ", data);
        let len = data.results.length;
        for (i = 0; i < len; i++) {
            let imageElement = document.createElement('img');
            // <image src="" />
            imageElement.src = data.results[i].urls.small;
            myImageDiv.appendChild(imageElement);
        }

    }).catch((e) => {
        console.log("Error while fething data", e)
    })

}

window.addEventListener("load", loadFunc);


// funtionality on search button click 

let searchBtn = document.getElementById("searchbtn");

searchBtn.addEventListener("click", onSeach);

function onSeach() {
    // console.log("search is clicked") ;
    const searchValue = document.getElementById("search-field").value;

    const myImageDiv = document.getElementById("imageDiv");

    if (!searchValue) {
        alert("Please provide value in input field");
    } else {

        myImageDiv.innerHTML = "";
        let url = `https://api.unsplash.com/search/photos?query=${searchValue}&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`;

        fetch(url).then((data) => {
            return data.json();
        }).then((data) => {
            console.log("data after search click", data)
            let len = data.results.length;
            if (len === 0) {
                let errorMessage = document.createElement("h1")
                errorMessage.innerHTML = "Photos Not Found !!"
                myImageDiv.appendChild(errorMessage);
            }

            for (let i = 0; i < len; i++) {
                let imageElement = document.createElement("img");
                imageElement.src = data.results[i].urls.small;
                myImageDiv.appendChild(imageElement);
            }
        }).catch((e) => {
            console.log("error while fetching data after search click", e.message)
            alert("Server Error !!");
        })
    }

}