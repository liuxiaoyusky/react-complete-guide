import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

//capitalize app can also solve the problem
const app = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [personsState,setPersonsState] = useState({
    persons:[
      {name: 'Max', age: 28},
      {name: 'Menu', age: 29},
      {name: 'Stephanie', age: 26},
    ],
        otherStates: "some other value"
  });

  //function inside function
  const switchNameHandler = (newName) => {
  // console.log("was clicked");
    setPersonsState({
      persons: [
        {name:newName,age:38},
        {name:'Menu',age:29},
        {name:'Stephanie',age:27},
      ]
    })
  };

  const styleStyle = {
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
  };

  const nameChangeHandler = (event) => {
      setPersonsState({
          persons: [
              {name:'Max',age:38},
              {name:event.target.value,age:29},
              {name:'Stephanie',age:27},
          ]
      })
  }


    return (
        <div className="App">
            <h1>Hi, I'm a Re0act App.</h1>
            <p>This is really working!</p>
            <button
                onClick={switchNameHandler.bind(this,"Maximilian")}
                style={styleStyle}
            >Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}>My Habbies: Racing</Person>
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                click={() => switchNameHandler("Max!!")}
                changedd={nameChangeHandler}
            />
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}/>
        </div>
    );
}
export default app;
