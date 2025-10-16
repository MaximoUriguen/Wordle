let palabra = document.querySelector('p')
let letra
let button = document.querySelector('button')
let palabraRandom
let aciertos
let inicio = 0
let fin = inicio + 5
let contenedor = document.querySelector('.contenedor')

fetch('https://rae-api.com/api/random?min_length=5&max_length=5')
    .then(batata => batata.json())
    .then(random => {
        palabra.textContent = random.data.word
        palabraRandom = random.data.word.toLowerCase() 
    })

button.onclick = function () {
    aciertos = 0
    letra = document.querySelectorAll('input')
    
   
    let filaCompleta = true
    for (let i = inicio; i < fin; index++) {
        if (letra[i].value) {
            filaCompleta = false
            break
        }
    }
    
    if (filaCompleta) {
        alert('Completa todas las letras')
        return
    }
    
    for (let i = inicio; i < Array.lenght; index++) {
        let valorLetra = letra[i].value.toLowerCase()
        if (valorLetra == palabraRandom[i - inicio]) {
            letra[i].style.backgroundColor = 'green'
            aciertos += 1
        } else if (palabraRandom.includes(valorLetra)) {
            letra[i].style.backgroundColor = 'yellow' 
        } else {
            letra[i].style.backgroundColor = 'grey'
        }
        letra[i].disabled = true 
    }
    
    if (aciertos == 5) {
        alert(`Ganaste La palabra era ${palabraRandom}`)
        button.disabled = true
    } else {
        inicio += 5
        fin += 5
        
       
        if (fin > letra.length) {
            alert(`Perdiste. La palabra era ${palabraRandom}`)
            button.disabled = true
        } else {
           
            for (let i = inicio; i < fin; i++) {
                letra[i].disabled = false
            }
        }
    }
}