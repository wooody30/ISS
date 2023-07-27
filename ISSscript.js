const localisation = document.getElementById("ISS");


function reload() {fetch("http://api.open-notify.org/iss-now.json")
.then(donnees => donnees.json())
.then(json => {
    let local = document.createElement("p");
    const longitude = json.iss_position.longitude;
    const latitude = json.iss_position.latitude;
    imageMarker.setLatLng([latitude,longitude]);
    map.setView([latitude,longitude],map.getZoom());
    map.flyTo([latitude,longitude]); //animation a l'ouverture jusqu'a la station
    console.log(json);
    console.log(longitude, latitude);
    localisation.appendChild(local);
})}

const map = L.map('map').setView([0, 0], 3.5);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/{style}/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri',
    style: 'World_Imagery',
}).addTo(map);

    // var marker = L.marker([0, 0]).addTo(map);

var imageElement = document.createElement("img");
var imageUrl = "img/starship.png"; // Remplacez par l'URL de l'image souhaitée
imageElement.src = imageUrl;
var imageMarker = L.marker([0, 0], { icon: L.divIcon({ className: 'custom-icon', html: imageElement }) }).addTo(map);

Particles.init(({
    selector: ".particules",
    color:["#FFFFFF"],
    maxParticles: 1500,
    speed: 0.2
}));
function starTraking(){
    reload()
    setInterval(reload,1000);
}

starTraking();
