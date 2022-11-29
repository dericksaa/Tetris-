/*creamos las variables que hacen referencia a la etiqueta o elementos html 
a los cuales queremos dar funcionalidad mediante js. Creamos un contexto para acceder a los metodos y dibujar sobre 
el canvas el cual sera en 2d. con scale, logramos escalar las unidades del lienzo*/

/* we create the variables that refer to the tag or html elements
to which we want to give functionality through js. We create a context to access the methods and draw on
the canvas which will be in 2d. with scale, we can scale the units of the canvas */



/*Agregamos lines para realizar con este un proceso similar a 
scoreboard con el din de llevar a cabo el conteo de lineas 
eliminadas */

/*We add lines to carry out with this a process similar to
scoreboard with the purpose of carrying out the line count
deleted*/


let canvas = document.getElementById("game-canvas") 
let scoreboard = document.getElementById("scoreboard")
let lines = document.querySelector('#lines')
let ctx = canvas.getContext("2d") 
ctx.scale(ARISTA, ARISTA) 
let model = new GameModel(ctx)

/*variables para llamar a los botones */

/*variables to call the buttons */

let izquierda = document.querySelector('#izquierda')
let rotacion = document.querySelector('#rotacion')
let derecha = document.querySelector('#derecha')
let abajo = document.querySelector('#abajo')

/*agregamos la variable lineas */

/*we add the variable lines*/

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

    /*Agregamos a la sentencia if otra operacion para 
    poder imprimir lines divvidiendo a scoreworth entre 10 */


    /*We add to the if statement another operation to
     be able to print lines by dividing scoreworth by 10 */

    for (let i = 0; i < model.grid.length; i++) {
        if (allFilled(model.grid[i])) {
            score += SCORE_WORTH
            // lines1 += SCORE_WORTH/10
            model.grid.splice(i, 1) 
            model.grid.unshift([0,0,0,0,0,0,0,0,0,0])
        }
    }

    /*Se imprime lines para mostrar en el display */

    /*Lines are printed to show on the display*/



    scoreboard.innerHTML = "Score: " + String(score)
    lines.innerHTML = "Lines: " + String(score/10)
}


/*Se crea un evento de escucha con keydown el cual se da al presionar cualquier tecla, tanto las que producen
un carácter como las que no lo producen. el addeventlistener recibe dos parámetros, el keydown y la función que
se ejecuta cuando presionamos una tecla. con la declaración switch evaluamos una expresión, en este caso
el valor de key al cual se hace referencia cuando presionamos una tecla, cuando la expresión coincide con un case
dentro de switch, se ejecuta la declaración asociada a ese case y las declaraciones que le siguen. Break se coloca
para que solo se ejecute la declaración del case correspondiente y no siga con las demás.*/

/*A listener event is created with keydown which occurs when any key is pressed, both those that produce
a character like those that do not produce it. the addeventlistener receives two parameters, the keydown and the function that
It is executed when we press a key. with the switch statement we evaluate an expression, in this case
the value of key that is referenced when we press a key, when the expression matches a case
inside switch, the statement associated with that case and the statements that follow it are executed. Break is placed
so that only the corresponding case statement is executed and does not continue with the others*/




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

// MODIFICACION DE CODIGO
//CODE MODIFICATION

/*Se crea un evento de escucha para el click en los botones 
el cual llama a las funciones ubicadas en el archivo gamemodel
las cuales hacen posible el movimiento de las fichas*/

/*A listener event is created for the button click
which calls the functions located in the gamemodel file
which make possible the movement of the chips*/

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

//EVENTOS DE TOUCH PARA MOVIL
//MOBILE TOUCH EVENTS


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