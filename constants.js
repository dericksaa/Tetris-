/*creamos las variables que dan las dimensiones a nuestro juego
en el archivo tetris.js habiamos agregado la transformacion de escala, scale 
. A ARISTA que es el tamaño de cada cuadrito, le decimos que va a ocupar 
30 veces la unidad del lienzo, es decir el lado de cada cuadrito sera 
de 30px. adicional de damos el reloj del juego, el numero de columnas,
el numero de filas y el puntaje que se suma al desaparecer una fila,
cada unidad de puntaje se corresponde a un bloque */

/*We create the variables that give the dimensions to our game
in the tetris.js file we had added the scale transformation, scale

ARISTA, which is the size of each square, we tell it that it will occupy
30 times the unit of the canvas, that is, the side of each square will be
of 30px. Additional we give the game clock, the number of columns,
the number of rows and the score that is added when a row disappears,
each scoring unit corresponds to a block*/


const GAME_CLOCK = 1000 
const ARISTA = 30 
const ROWS = 20 
const COLS = 10 
const SCORE_WORTH = 10 


/*tambien creamos las fichas a partir de un array compuesto de mas arrays, 
es decir una array multidimecional, en este caso tenemos un array bidimencional 
ya que es un array dentro de otro.
y creamos otro array de colores para cada una de las fichas  */


/*We also create the tokens from an array composed of more arrays,
that is, a multidimensional array, in this case we have a bidimensional array
since it is an array inside another, and we create another array of colors for each of the tiles */


const SHAPES = [
    [],
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ], 

    [
        [2,0,0],
        [2,2,2],
        [0,0,0],
    ],

    [
        [0,0,3],
        [3,3,3],
        [0,0,0],
    ],

    [
        [4,4],
        [4,4],
    ],

    [
        [0,5,5],
        [5,5,0],
        [0,0,0],
    ],

    [
        [0,6,0],
        [6,6,6],
        [0,0,0],
    ],

    [
        [7,7,0],
        [0,7,7],
        [0,0,0],
    ],

]

const COLORS = [
    '#D9D9D9',
    '#5DADE2',
    '#45B39D',
    '#E59866',
    '#F4D03F',
    '#CD6155',
    '#A569BD',
    '#AEB6BF'
]