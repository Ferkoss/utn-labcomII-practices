const opcCiudad = document.getElementById('selector-ciudad');
const txCard = document.getElementById('card');
const txCard2 = document.getElementById('card2');

const api_id = '28aabcc16cb9cd75304a7cbeba35362a';

async function cambiarClima(){

    let ciudad = opcCiudad.value;
    if(ciudad !='-'){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_id}&units=metric&lang=es`;
        //console.log(url);
        try{

            const response = await fetch(url);
            
            if (response.ok){
                const data = await response.json();
                console.log(data)
                //console.log(data);
                //OPC1
txCard.innerHTML =`
                    <h1>${data.name}</h1>
                    <p>${data.weather[0].description}</p>
                    <p>Temperatura: ${data.main.temp}</p>
                `;
                //OPC2
                txCard2.innerHTML = armarCard(data);
            }else{
                txCard.innerText = ' Hubo un error en la consulta a la API';
            }
        }catch(error){
            txCard.innerText = ' Hubo un error: ' + error;
        }
    }else{
        alert('Por favor seleccione la ciudad');
        ciudad.focus();
    }
}
function armarCard(data){

    const {name, wind:{speed}, main:{temp, humidity,feels_like}, weather:[arWeather]} = data;

    let html = `
        <h1>${name}</h1>
        <p>viento: ${speed}</p>
        <p>${arWeather.description}</p>
        <img src="http://openweathermap.org/img/wn/${arWeather.icon}@2x.png">
    `;
    return html;

}