import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person';

//capitalize app can also solve the problem
class App extends Component {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  state = {
    persons:[
      {name: 'Max', age: 28},
      {name: 'Menu', age: 29},
      {name: 'Stephanie', age: 26},
    ],
      otherStates: "some other value",
      showPersons: false
  };

  //function inside function
  switchNameHandler = (newName) => {
  // console.log("was clicked");
    this.setState({
      persons: [
        {name:newName,age:38},
        {name:'Menu',age:29},
        {name:'Stephanie',age:27},
      ]
    })
  };

   nameChangeHandler = (event) => {
       this.setState({
           persons: [
               {name: 'Max', age: 38},
               {name: event.target.value, age: 29},
               {name: 'Stephanie', age: 27},
           ]
       })
   }

  togglePersonsHandler = () => {
       const doesShow = this.state.showPersons;
       this.setState({showPersons:!doesShow});
  }

    render() {
        const styleStyle = {
            backgroundColor:'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

       return (
        <div className="App">
            <h1>Hi, I'm a Re0act App.</h1>
            <p>This is really working!</p>
            <button
                onClick={this.togglePersonsHandler}
                style={styleStyle}>Switch Name</button>
            {this.state.showPersons ?
                <div>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}>My Habbies: Racing</Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this,"Max!!")}
                    changedd={this.nameChangeHandler}
                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div> : null
            }
        </div>
    );
    }


}
export default App;
