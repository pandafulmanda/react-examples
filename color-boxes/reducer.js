

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

const initialState = {
  boxes: [
    makeNewBox(),
    makeNewBox(),
    makeNewBox()
  ]
}

const reducer = (state = initialState, action) => {
  const newState = makeDeepCopy(state)
  console.log(newState)

  if (action.type === 'ADD_BOX') {
    return {
      boxes: [
        ...newState.boxes,
        makeNewBox()
      ]
    }
  } else if (action.type === 'REMOVE_BOX') {
    const newBoxes = [...newState.boxes]
    newBoxes.pop()

    return {
      boxes: newBoxes
    }

  } else if (action.type === 'TOGGLE_BOX') {
    const newBoxes = [...newState.boxes]
    newBoxes[action.boxIndex].isLocked = !newBoxes[action.boxIndex].isLocked
    return {
      boxes: newBoxes
    }
  } else if (action.type === 'RANDOMIZE') {
    const currentBoxes = [...newState.boxes]
    const newBoxes = currentBoxes.map((box) => {
      if (!box.isLocked) {
        box.color = makeRandomColor();
      }
      return box;
    })
    return {
      boxes: newBoxes
    }
  }

  return newState
}