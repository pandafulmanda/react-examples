

class FruitsFormWithState extends React.Component {
  state = {
    fruits: []
  }
  render() {

    return (<div className="container">
      <h2>Fruits Inventory</h2>
      <ul>{
        this.state.fruits.map((fruit, index) => {
          return (<li key={index}>
            <p>{fruit.name} is {fruit.isGood? 'good': 'not good'}</p>
          </li>)
        })
      }</ul>
      <h2>Fruits Form</h2>
      <form>
        <div className="form-group">
          <label>Fruit Name</label>
          <input type="text" name="fruit-name"/>
        </div>
        <div className="form-group">
          <label>Do we like it?</label>
          <input type="checkbox" name="is-good"/>
        </div>
        <button type="submit">Add!</button>
      </form>
    </div>)
  }
}

class MyNameFormWithState extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  }
  handleFirstName = (changeEvent) => {
    console.log(changeEvent.target.value)
    this.setState({
      firstName: changeEvent.target.value
    })
  }
  render() {
    return (<div className="container">
      <div className="form-group">
        <label>First Name</label>
        <input type="text" name="first-name"
          onChange={this.handleFirstName}
          value={this.state.firstName}/>
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" name="last-name"/>
      </div>
      <h1>This is the state</h1>
      <pre><code>{JSON.stringify(this.state)}</code></pre>
    </div>)
  }
}

const App = function() {
  return <div>
    <h1>Hello!</h1>
    <MyNameFormWithState/>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))