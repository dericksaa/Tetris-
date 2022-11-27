/*creamos las variables que hacen referencia a la etiqueta o elementos html 
a los cuales queremos dar funcionalidad mediante js. Creamos un contexto para acceder a los metodos y dibujar sobre 
el canvas el cual sera en 2d. con scale, logramos escalar las unidades del lienzo*/

let canvas = document.getElementById("game-canvas") 
let scoreboard = document.getElementById("scoreboard") 
let ctx = canvas.getContext("2d") 
ctx.scale(ARISTA, ARISTA) 
let model = new GameModel(ctx)

/*variables para llamar a los botones */

let izquierda = document.querySelector('#izquierda')
let rotacion = document.querySelector('#rotacion')
let derecha = document.querySelector('#derecha')
let abajo = document.querySelector('#abajo')


let score = 0 

setInterval(() => {
    newGameState()
}, GAME_CLOCK); 


let newGameState = () => {
    fullSend() 
    if (model.fallingPiece === null) {
        const rand = Math.round(Math.random() * 6) + 1
        const newPiece = new Piece(SHAPES[rand], ctx) 
        model.fallingPiece = newPiece 
        model.moveDown()
    } else {
        model.moveDown()
    }
}

const fullSend = () => {
    const allFilled = (row) => {
        for (let x of row) {
            if (x === 0) {
                return false
            }
        }
        return true
    }

    for (let i = 0; i < model.grid.length; i++) {
        if (allFilled(model.grid[i])) {
            score += SCORE_WORTH 
            model.grid.splice(i, 1) 
            model.grid.unshift([0,0,0,0,0,0,0,0,0,0])
        }
    }

    scoreboard.innerHTML = "Score: " + String(score)
}


//Se crea un evento de escucha con keydown el cual se da al presionar cualquier tecla, tanto las que producen
//un carácter como las que no lo producen. el addeventlistener recibe dos parámetros, el keydown y la función que
//se ejecuta cuando presionamos una tecla. con la declaración switch evaluamos una expresión, en este caso
//el valor de key al cual se hace referencia cuando presionamos una tecla, cuando la expresión coincide con un case
//dentro de switch, se ejecuta la declaración asociada a ese case y las declaraciones que le siguen. Break se coloca
// para que solo se ejecute la declaración del case correspondiente y no siga con las demás.


document.addEventListener("keydown", (e) => {
    e.preventDefault() 
    switch(e.key) {
        case "ArrowUp":
            model.rotate() 
            break 
        case "ArrowRight":
            model.move(true) 
            break 
        case "ArrowDown": 
            model.moveDown() 
            break 
        case "ArrowLeft":
            model.move(false) 
            break
    }
})

//* MODIFICACION DE CODIGO*/
/*Se crea un evento de escucha para el click en los botones 
el cual llama a las funciones ubicadas en el archivo gamemodel
las cuales hacen posible el movimiento de las fichas*/
rotacion.addEventListener('click', rotar)
function rotar (){
    model.rotate()
}
izquierda.addEventListener('click', moveLeft)
function moveLeft (){
    model.move(false)
}
derecha.addEventListener('click', moveRight)
function moveRight (){
    model.move(true)
}
abajo.addEventListener('click', moveAbajo)
function moveAbajo (){
    model.moveDown() 
}

//*EVENTOS DE TOUCH PARA MOVIL */


rotacion.addEventListener('touchenter', rotar)
function rotar (){
    model.rotate()
}
izquierda.addEventListener('touchenter', moveLeft)
function moveLeft (){
    model.move(false)
}
derecha.addEventListener('touchenter', moveRight)
function moveRight (){
    model.move(true)
}
abajo.addEventListener('touchenter', moveAbajo)
function moveAbajo (){
    model.moveDown() 
}