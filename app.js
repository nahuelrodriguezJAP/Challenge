var cont = 0
var nivel = 1;
var puntos = 0;
let resp0 = document.getElementsByName('r0');
let resp1 = document.getElementsByName('r1');
let resp2 = document.getElementsByName('r2');
let resp3 = document.getElementsByName('r3');
let correcta = [];
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

// FUNCION MUESTRA LAS RESPUESTAS Y LAS REORDENA
function mostrarDatos(array) {
    let i_aleatorio = Math.floor(Math.random() * array.length)
    // indice aleatorio para seleccionar pregunta
    let respuestas = array[i_aleatorio].resp;
    // seleccion de respuestas segun indice aleatorio   
    document.getElementById('pregunta').innerText = array[i_aleatorio].question;
    // imprimo pregunta
    correcta = respuestas[0].text;
    // agrego la respuesta correcta para verificar despues
    // imprimo 4 de las 5 respuestas      
    // llamo funcion de orden para las respuestas. 
    desordenar_lista(respuestas);
    niveles()
}
// FUNCION PARA VERIFICAR NIVEL SEGUN PUNTAJE ALCANZADO COMIENZA EN 1
function niveles() {
    if (puntos >= 0 && puntos <= 199) {
        nivel = 1;
    }
    if (puntos >= 200 && puntos <= 399) {
        nivel = 2;
    }
    if (puntos >= 400 && puntos <= 599) {
        nivel = 3;
    }
    if (puntos >= 600 && puntos <= 799) {
        nivel = 4;
    }
    if (puntos >= 800 && puntos <= 1500) {
        nivel = 5;
    }
    document.getElementById('nivel').innerHTML = `<p>${nivel}</p>`
}
function infoDanger() {
    document.getElementById('info-modal').innerHTML = `<div><br><img src="./img/incorrecto.png" alt=""><br><hr><h5> Quedaste en el nivel ${nivel} con esta respuesta incorrecta</h5><br><p>Responde 2 preguntas correctas por nivel</h5></div>`
}
function infoSuccess() {
    document.getElementById('info-modal').innerHTML = `<div><br><img src="./img/correcto.png" alt=""><br><hr><h5> Quedaste en el Nivel:${nivel} con esta respuesta correcta</h5><br><p>Continúa así hasta llegar al nivel 5</h5><br><p></p></div>`
}
// verifica al clickear si la respuesta clickeada es correcta
function verificarResp(x) {
    if (x.value == correcta) {
        document.getElementById(x.id).className = "but btn btn-success"

        if (nivel != 5) {
            // en caso de serlo y estar en niveles diferentes a 5 suma +100 puntos por pregunta resuelta
            puntos += 100;
        }
        else {
            // en caso de estar en lvl5 con 2 preguntas ya completas los 1500 puntos necesarios para ganar. 
            puntos += 350;
        }
        niveles()
        showPoint()
        infoSuccess();
    }
    else {
        infoDanger(x)
        document.getElementById(x.id).className = "but btn btn-danger"
        // en caso contrario solo te avisa que no es la correcta y se vuelve a cargar la page sin modificar el puntaje.
    }
}

function ganar(){
    if(puntos == 1500){
    alert('FELICIDADES, GANASTE LA TRIVIA!');
    localStorage.removeItem('Trivia');
    puntos=0;
    nivel=1;
    }
    
}
function reordenar() {
    let res = document.getElementsByClassName('but');
    for (let i = 0; i < res.length; i++) {
        let x = res[i];
        document.getElementById(x.id).className = 'but btn btn-outline-info';

    }
}
// funcion para reiniciar el juego a 0
function reiniciar() {
    alert('Seguro deseas comenzar desde 0?')
    puntos = 0;
    nivel = 1;
};
// funcion para mostrar el nivel y los puntajes
function showPoint() {
    document.getElementById('punto').innerHTML = `<p>${puntos}</p>`
}
// funcion para finalizar juego
function fin() {
    localStorage.setItem('Trivia', [puntos, nivel]);
}

// EVENTOS DOM 
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(NIVELES + nivel + '.json').then(function (resultado) {
        if (resultado.status === 'ok') {
            var result = resultado.data;
            mostrarDatos(result);
            niveles()
            showPoint()
        }
    })
    document.getElementById('resp0').addEventListener('click', function (e) {
        let value0 = document.getElementById('resp0');
        verificarResp(value0);
    })
    document.getElementById('resp1').addEventListener('click', function (e) {
        let value1 = document.getElementById('resp1');
        verificarResp(value1);
    })
    document.getElementById('resp2').addEventListener('click', function (e) {
        let value2 = document.getElementById('resp2');
        verificarResp(value2);
    })
    document.getElementById('resp3').addEventListener('click', function (e) {
        let value3 = document.getElementById('resp3');
        setTimeout(verificarResp(value3), 2000);
    })
    document.getElementById('continuar').addEventListener('click', function (e) {
        niveles();
        showPoint()
        reordenar()
        getJSONData(NIVELES + nivel + '.json').then(function (resultado) {
            if (resultado.status === 'ok') {
                var result = resultado.data;
                mostrarDatos(result);
            }
        })
        ganar()
    })
    document.getElementById('recargar').addEventListener('click', function (e) {
        reordenar();
        getJSONData(NIVELES + nivel + '.json').then(function (resultado) {
            if (resultado.status === 'ok') {
                var result = resultado.data;
                mostrarDatos(result);
            }
        })
                ganar()

    })
    document.getElementById('comenzar').addEventListener('click', function (e) {
        reiniciar()
        reordenar()
        getJSONData(NIVELES + nivel + '.json').then(function (resultado) {
            if (resultado.status === 'ok') {
                var result = resultado.data;
                mostrarDatos(result);
            }
        })
    })
    document.getElementById('fin').addEventListener('click', function (e) {
        fin()
    })


})