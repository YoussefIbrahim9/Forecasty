var photosDisplay = document.getElementById("displayPhotos")

var photos;

var currentCity = sessionStorage.getItem("targeted-City")

async function getPhotosData(currentCity){
    try{
        var photosReponse = await fetch(`https://api.unsplash.com/search/photos?query=${currentCity}&client_id=h5p6PcBwfM7YMaHA8D-X4ZPI02n_OjaojRi7YfNTqrc`)
        var finalPhotos = await photosReponse.json();
     
        
        photos = finalPhotos;
        dispalyPhotosInRow();
    }
    catch(error){
        console.log("Can't fetch files")
    }

}

function dispalyPhotosInRow(){
    var cartoona = "";
    for(var i = 0;i<9;i++){
        cartoona += `

        <div class="col-12 mt-4 col-sm-6 col-lg-4">
            <div>
                <img src="${photos.results[i].urls.regular}" class="card-img-top rounded-3" style="height: 250px; object-fit: cover; ">
            </div>
        </div>
        `
    }
    photosDisplay.innerHTML = cartoona;

}


getPhotosData(currentCity)

