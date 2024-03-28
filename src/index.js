let btnConsultar = document.getElementById("btnConsulta");
let infoContainer = document.getElementById("info");

btnConsultar.addEventListener('click', consultarSeries);

async function consultarSeries(){
    try{
        const response = await fetch('http://localhost:3030/series/');
        if(!response.ok){
            console.log("Fallo la respuesta");
        }
        const data = await response.json();
        data.forEach(series =>{
            const seriesElement = document.createElement('p');
            seriesElement.textContent = series.id+ " // titulo: " + series.titulo + " // genero: " + series.genero + " // estreno: " + series.estreno + " // calificacion: " + series.calificacion + " // sinopsis: " + series.sinopsis + " // reparto: " + series.reparto;
            infoContainer.appendChild(seriesElement);
        })
    }catch(error){
        console.log('error: ',error);
    }
}