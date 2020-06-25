import React, {Component, useState} from 'react';
import Person from './Person/Person';
import './App.css';



//capitalize app can also solve the problem
class App extends Component {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  state = {
    persons:[
      { id: 'uniqueId1', name: 'Max', age: 28},
      { id: 'uniqueid2', name: 'Menu', age: 29},
      { id: 'uniqueID3', name: 'Stephanie', age: 26},
    ],
      otherStates: "some other value",
      showPersons: false
  };

  deletePersonHandler  = (personIndex) => {
      const newPersons = [...this.state.persons];
      newPersons.splice(personIndex,1);
      this.setState({persons: newPersons});
  }

   nameChangeHandler = (event,id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });

      const person = {...this.state.persons[personIndex]};
      // const person = .assign({},this.state.persons[personIndex]);

       person.name = event.target.value;

       const newPersons = [...this.state.persons];
       newPersons[personIndex] = person;
       this.setState({persons: newPersons})
   }

  togglePersonsHandler = () => {
       const doesShow = this.state.showPersons;
       this.setState({showPersons:!doesShow});
  }

    render() {
        const styleStyle = {
            backgroundColor:'green',
            color:'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover':{
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;
        // now we are in js rather than jsx, so we can use if() here
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person,index) => {
                        return <Person name={person.name} age={person.age} key={person.id}
                                       changedd={(event) => this.nameChangeHandler(event,person.id)}
                                       click={() => this.deletePersonHandler(index)}/>
                    })}
                </div>
            ) ;

            styleStyle.backgroundColor = 'red';
            styleStyle[':hover'] = {
                backgroundColor: 'salmon',
                    color: 'black'
            }
            console.log('In js');
        }

        const classes = [];
        if(this.state.persons.length <= 2) {
            classes.push('red'); // classes = ['red']
        }
        if(this.state.persons.length <= 1) {
            classes.push('bold'); // classes = ['red',bold]
        }


        //things in return is jsx, so cannot use if
       return (
           <div className="App">
               <h1>Hi, I'm a Re0act App.</h1>
               <p className={classes.join(' ')}>This is really working!</p>
               <button
                   onClick={this.togglePersonsHandler}
                   style={styleStyle}>Toggle Persons</button>
               {persons}
           </div>
       );
    }


}
export default App;
