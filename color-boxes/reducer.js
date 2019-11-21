const initialState = {
  boxes: []
}

const makeRandomColor = () => {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

const makeNewBox = () => {
  return {
    color: makeRandomColor(),
    isLocked: false
  }
}

const makeDeepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

const reducer = (state = initialState, action) => {
  const newState = makeDeepCopy(state)

  if (action.type === 'ADD_BOX') {
    return {
      boxes: [
        ...newState.boxes,
        makeNewBox()
      ]
    }
  } else if (action.type === 'REMOVE_BOX') {

  } else if (action.type === 'LOCK_BOX') {

  } else if (action.type === 'RANDOMIZE') {
    
  }
}