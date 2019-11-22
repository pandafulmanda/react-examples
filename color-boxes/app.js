function ColorBox (props) {
  const style = {
    border: "2px solid black",
    backgroundColor: props.color,
    width: "100px",
    height: "200px"
  }

  let btnText = 'Unlocked'
  if (props.isLocked) {
    btnText = 'Locked'
  }

  return (
    <div style={style}>
      <button onClick={props.toggleLock}>{btnText}</button>
      <h1>{props.color}</h1>
    </div>
  )
}

const App = (props) => {
  return (<div className="container">
      <div className="text-center">
        <button onClick={() => myStore.dispatch({type: 'RANDOMIZE'})}>Randomize!</button>
        <button onClick={() => myStore.dispatch({type: 'ADD_BOX'})}>Add Box</button>
        <button onClick={() => myStore.dispatch({type: 'REMOVE_BOX'})}>Remove Box</button>
        <div className="d-flex justify-content-center">
          {props.boxes.map((box, idx) => (
            <ColorBox {...box} key={idx} toggleLock={() => myStore.dispatch({
              type: 'TOGGLE_BOX',
              boxIndex: idx
            })}/>
          ))}
        </div>
      </div>
    </div>
  )
}
