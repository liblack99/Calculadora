let operadorA
let operadorB
let operacion
const boton1 = document.getElementById("boton-1")
boton1.addEventListener("click", escribir1)
const boton2 = document.getElementById("boton-2")
boton2.addEventListener("click", escribir2)
const boton3 = document.getElementById("boton-3")
boton3.addEventListener("click", escribir3)
const boton4 = document.getElementById("boton-4")
boton4.addEventListener("click", escribir4)
const boton5 = document.getElementById("boton-5")
boton5.addEventListener("click", escribir5)
const boton6 = document.getElementById("boton-6")
boton6.addEventListener("click", escribir6)
const boton7 = document.getElementById("boton-7")
boton7.addEventListener("click", escribir7)
const boton8 = document.getElementById("boton-8")
boton8.addEventListener("click", escribir8)
const boton9 = document.getElementById("boton-9")
boton9.addEventListener("click", escribir9)
const boton0 = document.getElementById("boton-0")
boton0.addEventListener("click", escribir0)
const numero = document.getElementById("numero")
const suma = document.getElementById("suma")
suma.addEventListener("click", sumar)
const resta = document.getElementById("resta")
resta.addEventListener("click", restar)
const multiplicacion = document.getElementById("multiplicacion")
multiplicacion.addEventListener("click", multiplicar)
const division = document.getElementById("division")
division.addEventListener("click", dividir )
const igual = document.getElementById("resultado")
igual.addEventListener("click", resultadoOperacion)
const borrar = document.getElementById("borrar")
borrar.addEventListener("click" ,borrartodo )

 
function escribir1(){
  numero.textContent = numero.textContent + "1"
  numero.innerHTML = numero.textContent
}
function escribir2(){
    numero.textContent = numero.textContent + "2"
    numero.innerHTML = numero.textContent
}
function escribir3(){
    numero.textContent = numero.textContent + "3"
    numero.innerHTML = numero.textContent
}
function escribir4(){
    numero.textContent = numero.textContent + "4"
    numero.innerHTML = numero.textContent
}
function escribir5(){
    numero.textContent = numero.textContent + "5"
    numero.innerHTML = numero.textContent
}
function escribir6(){
    numero.textContent = numero.textContent + "6"
    numero.innerHTML = numero.textContent
}
function escribir7(){
    numero.textContent = numero.textContent + "7"
    numero.innerHTML = numero.textContent
}
function escribir8(){
    numero.textContent = numero.textContent + "8"
    numero.innerHTML = numero.textContent
}
function escribir9(){
    numero.textContent = numero.textContent + "9"
    numero.innerHTML = numero.textContent
}
function escribir0(){
    numero.textContent = numero.textContent + "0"
    numero.innerHTML = numero.textContent   
}
function sumar(){
    operadorA = numero.textContent
    operacion = "+"
    limpiar()
}
function restar(){
    operadorA= numero.textContent
    operacion = "-"
    limpiar()
}
function multiplicar(){
    operadorA = numero.textContent
    operacion = "*"
    limpiar()
}
function dividir(){
    operadorA = numero.textContent
    operacion = "/"
    limpiar()
}
function resultadoOperacion() {
    operadorB = numero.textContent
    resolver()
}
function limpiar(){
    numero.textContent = ""  
}
function borrartodo(){
    numero.textContent = ""  
    operadorA = 0
    operadorB = 0
    operacion = ""
}
function resolver(){
    let resultado = 0
    switch (operacion) {
        case "+":
            resultado = parseFloat(operadorA) + parseFloat(operadorB)
        break;
        case "-":
            resultado = parseFloat(operadorA) - parseFloat(operadorB)
        break;
        case "*":
            resultado = parseFloat(operadorA) * parseFloat(operadorB)
        break;
        case "/":
            resultado = parseFloat(operadorA) / parseFloat(operadorB)
        break;
    
        default:
            break;
    }
    borrartodo()
    numero.textContent = resultado
}