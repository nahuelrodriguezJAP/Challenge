var cont = 0
var nivel = 2;
var puntos;
var resp_desord = [0, 1, 2, 3]
var respuestas_reordenadas = [];
function responder(x) {


}
function desordenar_lista(array) {


}

function ordenResp(x) {
    
    let i_resp = Math.floor(Math.random() * resp_desord.length)
    for (const i in x) {
        respuestas_reordenadas[i]= x[resp_desord[i_resp]]
        resp_desord.splice(i_resp,1);
    }
    return respuestas_reordenadas;
}

function mostrarDatos(array) {
    let i_aleatorio = Math.floor(Math.random() * array.length)
    // indice aleatorio para seleccionar pregunta
    let respuestas = array[i_aleatorio].resp;
    // seleccion de respuestas segun indice aleatorio   
    document.getElementById('pregunta').innerText = array[i_aleatorio].question;
    // imprimo pregunta
    console.log(ordenResp(respuestas))
    // imprimo 4 de las 5 respuestas    
    document.getElementById("respuestas").innerHTML = `<div class="row">
            <div class="col-6" id="opc">
                <strong><button type="button" id="resp" onchange="responder()" class="btn btn-outline-warning">${respuestas[0].text}</button></strong>
            </div>
            <div class="col-6" id="opc">
                <strong><button type="button" id="resp" class="btn btn-outline-warning">${respuestas[1].text}</button></strong>
            </div>
        </div>
        <div class="row">
            <div class="col-6" id="opc">
                <strong><button type="button" id="resp" class="btn btn-outline-warning">${respuestas[2].text}</button></strong>
            </div>
            <div class="col-6" id="opc">
                <strong><button type="button" id="resp" class="btn btn-outline-warning"> ${respuestas[3].text}</button></strong>
            </div>
        </div>`

    let resp_correcta;
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






document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(NIVELES + nivel + '.json').then(function (resultado) {
        if (resultado.status === 'ok') {
            let result = resultado.data;
            niveles();
            mostrarDatos(result);
            console.log(result)
        }
    })
})