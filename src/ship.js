const Ship = (() => {
  const createShip = (shipLength,shipName) =>  {
    let length = shipLength
    let sunk = false
    let hits = 0
    let name = shipName
  
    //getter

    function getName() {
      return name
    }

    function getSunk() {
      return sunk
    }

    function getLength() {
      return length
    }

    function getHits() {
      return hits
    }

    //setter

    function sunken() {
      sunk = true
    }
  
    function hit() {
      hits++
      if (hits > length) {
        throw new Error('ship already sunk')
        return
      }
      if (hits == length) {
        sunken()
        console.log(`${getName()} has sunk`)
      } 
    }
    
    return {
      getName,
      getLength,
      getSunk,
      getHits,
      sunken,
      hit
    }
  }
  return {createShip}
})()

module.exports = Ship