console.log("connection build");

// url = https://api.unsplash.com/search/photos?query=cat&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k



let loadFunc = () => {
    const myImageDiv = document.getElementById("imageDiv");
    
    fetch("https://api.unsplash.com/search/photos?query=dog&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k").then((data) => {
        return data.json()
    }).then((data) => {
        console.log("Data from unplash api ", data.results);
        let len = data.results.length ;
        for (i = 0; i < len; i++) {
            let imageElement = document.createElement('img');
            // <image src />
            imageElement.src = data.results[i].urls.small;
            myImageDiv.appendChild(imageElement);
        }

    }).catch((e) => {
        console.log("Error while fething data", e)
    })

}

window.addEventListener("load", loadFunc);