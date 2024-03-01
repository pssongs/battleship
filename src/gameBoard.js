const Ship = require('../src/ship')

const GameBoard = (() => {
  const createBoard = () => {
    const board = new Array(10).fill('x').map(() => new Array(10).fill('x'))
    const fleet = []
    let axis = 'X'
    //getters

    function getBoard() {
      return board
    }

    function getFleet(){
      return fleet
    }

    //setters

    function changeAxis(){
      axis == 'X' ? axis = 'Y' : axis = 'X'
    }

    function addToFleet(battleship){
      fleet.push(battleship)
    }

    function place(battleship,start){
      const [x,y] = start
      
    }

    function isOutOfBounds(shipLength, boardLength, field){
      return shipLength > boardLength - field
    }
  }
})

