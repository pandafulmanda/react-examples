

class MyNameFormWithState extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    people: []
  }
  handleInputChange = (changeEvent) => {
    console.log(changeEvent.target.value, changeEvent.target.name)
    this.setState({
      [changeEvent.target.name]: changeEvent.target.value
    })
  }
  handleFormSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const newPeople = [...this.state.people]
    newPeople.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })

    this.setState({
      people: newPeople,
      firstName: "",
      lastName: ""
    })
  }
  render() {
    console.log(this.state.people, 'people?')
    return (<div className="container">
      <ul>{this.state.people.map((person, index) => {
        return (<li key={index}>
          {person.firstName} {person.lastName}
        </li>)
      })}</ul>

      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName"
            onChange={this.handleInputChange}
            value={this.state.firstName}/>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Save!</button>
      </form>
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