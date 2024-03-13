const Player = (() => {
  const createPlayer = (playerName, playerIdentity) => {
    let name = playerName
    const identity = playerIdentity
    let map
    let searchQueue = []

    function getName() {
      return name
    }

    function getMap() {
      return map
    }

    function getIdentity() {
      return identity
    }

    // SETTERS

    function setName(newName) {
      name = newName
    }

    // CHECKERS

    function isEmptyField(coordinate) {
      const [x, y] = coordinate
      return (
        getMap().getBoard()[x][y] !== 'miss' &&
        getMap().getBoard()[x][y] !== 'hit'
      )
    }

    function isLoser() {
      return getMap()
        .getFleet()
        .every((battleship) => battleship.getSunk() === true)
    }

  }
})()