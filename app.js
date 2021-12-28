var cont = 0
var nivel = 1;
var puntos;
var resp_desord = [0, 1, 2, 3]
var respuestas_reordenadas = [];
let resp0 = document.getElementsByName('r0');
let resp1 = document.getElementsByName('r1');
let resp2 = document.getElementsByName('r2');
let resp3 = document.getElementsByName('r3');
let correcta=[];
function responder(x) {


}
function desordenar_lista(array) {

    let i_resp = Math.floor(Math.random() * array.length)
    if (i_resp == 0) {
        document.getElementById('resp0').innerText = `${array[3].text}`
        document.getElementById('resp0').value = `${array[3].text}`
        document.getElementById('resp1').innerText = `${array[0].text}`
        document.getElementById('resp1').value = `${array[0].text}`
        document.getElementById('resp2').innerText = `${array[1].text}`
        document.getElementById('resp2').value = `${array[1].text}`
        document.getElementById('resp3').innerText = `${array[2].text}`
        document.getElementById('resp3').value = `${array[2].text}`
    }
    if (i_resp == 1) {
        document.getElementById('resp0').innerText = `${array[2].text}`
        document.getElementById('resp0').value = `${array[2].text}`
        document.getElementById('resp1').innerText = `${array[3].text}`
        document.getElementById('resp1').value = `${array[3].text}`
        document.getElementById('resp2').innerText = `${array[0].text}`
        document.getElementById('resp2').value = `${array[0].text}`
        document.getElementById('resp3').innerText = `${array[1].text}`
        document.getElementById('resp3').value = `${array[1].text}`
    }
    if (i_resp == 2) {
        document.getElementById('resp0').innerText = `${array[1].text}`
        document.getElementById('resp0').value = `${array[1].text}`
        document.getElementById('resp1').innerText = `${array[2].text}`
        document.getElementById('resp1').value = `${array[2].text}`
        document.getElementById('resp2').innerText = `${array[3].text}`
        document.getElementById('resp2').value = `${array[3].text}`
        document.getElementById('resp3').innerText = `${array[0].text}`
        document.getElementById('resp3').value = `${array[0].text}`
    }
    if (i_resp == 3) {
        document.getElementById('resp0').innerText = `${array[0].text}`
        document.getElementById('resp0').value = `${array[0].text}`
        document.getElementById('resp1').innerText = `${array[1].text}`
        document.getElementById('resp1').value = `${array[1].text}`
        document.getElementById('resp2').innerText = `${array[2].text}`
        document.getElementById('resp2').value = `${array[2].text}`
        document.getElementById('resp3').innerText = `${array[3].text}`
        document.getElementById('resp3').value = `${array[3].text}`
    }
}


function mostrarDatos(array) {
    let i_aleatorio = Math.floor(Math.random() * array.length)
    // indice aleatorio para seleccionar pregunta
    let respuestas = array[i_aleatorio].resp;
    // seleccion de respuestas segun indice aleatorio   
    document.getElementById('pregunta').innerText = array[i_aleatorio].question;
    // imprimo pregunta
    console.log(respuestas[0].text)
    correcta = respuestas[0].text;
    // agrego la respuesta correcta para verificar despues
    // imprimo 4 de las 5 respuestas      
    // llamo funcion de orden para las respuestas. 
    desordenar_lista(respuestas);
    

}
// FUNCION PARA VERIFICAR NIVEL SEGUN PUNTAJE DE RESPUESTAS 
function niveles() {
    if (puntos >= 0 && puntos <= 200) {
        return nivel = 1;
    }
    if (puntos >= 201 && puntos <= 400) {
        return nivel = 2;
    }
    if (puntos >= 401 && puntos <= 600) {
        return nivel = 3;
    }
    if (puntos >= 601 && puntos <= 800) {
        return nivel = 4;
    }
    if (puntos >= 801 && puntos <= 1500) {
        return nivel = 5;
    }
}
function verificarResp(x) {
    console.log(x)
    console.log(correcta)
    if (x == correcta) {
        alert('RESPUESTA CORRECTA')
        if (nivel != 5) {
            puntos += 100;
        }
    }
    else {
        return alert('RESPUESTA INCORRECTA, intenta denuevo')
    }
}
// funcion para reiniciar el juego a 0
function reiniciar() {
    alert('Seguro deseas comenzar desde 0?')
    puntos = 0;
    nivel = 1;
};
console.log(
    document.getElementById('resp0').value)

// EVENTOS DOM 
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(NIVELES + nivel + '.json').then(function (resultado) {
        if (resultado.status === 'ok') {
            let result = resultado.data;
            niveles();
            mostrarDatos(result);
            console.log(result)
        }
    })
    document.getElementById('resp0').addEventListener('click', function(e){
        let value0=document.getElementById('resp0').value;
        verificarResp(value0);
        console.log('value0')
    })
    document.getElementById('resp1').addEventListener('click', function(e){
        let value1=document.getElementById('resp1').value;
        verificarResp(value1);
        console.log('value1')
    })
    document.getElementById('resp2').addEventListener('click', function(e){
        let value2=document.getElementById('resp2').value;
        verificarResp(value2);
        console.log('value2')
    })
    document.getElementById('resp3').addEventListener('click', function(e){
        let value3=document.getElementById('resp3').value;
        verificarResp(value3);
        console.log('value3')
    })
})