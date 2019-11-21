function ColorBox (props, idx, _allBoxes) {
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
    <div key={idx} style={style}>
      <button onClick={props.toggleLock}>{btnText}</button>
      <h1>{props.color}</h1>
    </div>
  )
}

class App extends React.Component {
  state = {
    boxes: [
      this._newBox(),
      this._newBox(),
      this._newBox()
    ]
  }

  _randomColor() {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }

  _newBox() {
    return {
      color: this._randomColor(),
      isLocked: false
    }
  }

  randomize() {
    const currentBoxes = [...this.state.boxes]
    const newBoxes = currentBoxes.map((box) => {
      if (!box.isLocked) {
        box.color = this._randomColor();
      }
      return box;
    })
    this.setState({boxes: newBoxes})
  }

  toggleLock(idx) {
    // TODO: check here that idx is a valid array index
    const newBoxes = [...this.state.boxes]
    newBoxes[idx].isLocked = !newBoxes[idx].isLocked
    this.setState({boxes: newBoxes})
  }

  addBox() {
    const newBoxes = [...this.state.boxes, this._newBox()]
    this.setState({boxes: newBoxes})
  }

  removeBox() {
    const newBoxes = [...this.state.boxes]
    newBoxes.pop()
    this.setState({boxes: newBoxes})
  }

  render() {
    // add the .toggleLock function to each box
    const boxesWithClickFn = this.state.boxes.map((box, idx) => {
      box.toggleLock = () => this.toggleLock(idx)
      return box
    })

    return (
      <div className="container">
          <div className="text-center">
              <button onClick={() => this.randomize()}>Randomize!</button>
              <button onClick={() => this.addBox()}>Add Box</button>
              <button onClick={() => this.removeBox()}>Remove Box</button>
              <div className="d-flex justify-content-center">
                {boxesWithClickFn.map(ColorBox)}
              </div>
          </div>
      </div>
    )
  }
}
