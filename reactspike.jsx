var React = require("react");
var people = ["Anderson Turner", "Joey Badass", "Edward lol"]

var Card = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <button onClick={this.props.onClick}>Delete Me</button>
      </div>
      )
  }
})

var App = React.createClass({
  deletePerson: function(person) {
    this.state.people.splice(this.state.people.indexOf(person), 1);
    this.setState({people: this.state.people});
  },
  getInitialState: function() {
    return {
      people: people
    }
  },
  render: function() {
    return (
      <div>
      {this.state.people.map(function (person) {
        return (
          <Card onClick={that.deletePerson.bind(null, person)} name={person.name}> </Card>
          )
      })}
      </div>
      )
  }

})
React.render(<App></App>, document.body);