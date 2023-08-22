//split array by any requested size
for (let i = str.length; i > 0; i -= groupSize) {
    let newStr = str.slice(0, i) 
    result.unshift(newStr.slice(-groupSize).split(""));
    
  }


const RemoveDuplicate = (arr) => {
  const array = [], set = new Set();
  arr.map(item => {set.has(item) ? array.push(item) : set.add(item)})
  return array
}

function bookHashing(bookTitle, hashTableSize) {
  // Remove any spaces from book title.
  var strippedBookTitle = bookTitle.replace(/\s/g, '')

// Divide the length of the title by the hash table size.
  // Return the remainder.
  return strippedBookTitle.length % hashTableSize;
}


const hashTable = (data, hashTableSize) => {
  const hashTable = [];
  data.forEach(datum => {
    let hash = bookHashing(datum,12)

    let store = hash % hashTableSize;
    if(hashTable[store]){
      hashTable[store].push(datum,hash)
    }else {
      hashTable[store] = [datum,hash]
    }
  })
  return hashTable
}

const input = [
  "Comments","are","lines",
  "of","code", "that", "JavaScript",
   "will","intentionally", "ignore",
  'does',"The Sound and the Fury",
  "The Grapes of Wrath"
]

//-----Weird hashTable-------
function hashTables(data,hashTableSize) {
  //const table = [];
  data.forEach(datum => {
    let store = datum % hashTableSize;
    if(hashTables[store]){
      hashTables[store].push(datum)
    }else {
      hashTables[store] = [datum]
    }
  })
  return hashTables
}


const hashTable = (data, hashTableSize) => {
  const hashTable = [];
  data.forEach(datum => {
    let store = datum % hashTableSize;
    if(hashTable[store]){
      hashTable[store].push(datum)
    }else {
      hashTable[store] = [datum]
    }
  })
  console.log(hashTable)
  return hashTable.reduce((prev,curr) => {
    return prev.concat(curr)
  })
}


const sessions = {
  mobile: [1, 2, 3],
  tablet: [3, 4, 5],
  desktop: [6, 7, 8],
} 

const printData = (id, name, sessions) => {
  var div = document.createElement('div')
  div.id = id
  div.textContent = `${name} : ${sessions}`
  document.querySelector('body').appendChild(div)
}

const devices = Object.keys(sessions)

const data = devices.map((device) => {
  return {
    id: `${device}-container`,
    name: device,
    sessions: sessions[device],
  }
})

data.forEach((device) => {
  printData(device.id, device.name, device.sessions)
})

//loop through array
list.forEach(number => console.log(number))

// if var1 is empty display string 
console.log( var1 || "VARIABLE NOT FOUND!" )



let distances = [
  { from: 'New York', to: 'Dhaka', distance: 12654},
  { from: 'Sydney', to: 'chittagong', distance: 8858},
  { from: 'Kolkata', to: 'Sylhet', distance: 670}
]

let total = distances.filter(item => item.distance < 10000)
                    .map(item => item.distance * 0.621371)
                    .reduce((prev, distance) => prev + distance, 0)
console.log(total)

// localStorage Emulator
const localStorageMock = (function() {
  let store = {};
  
  return {
    getItem(key) {
      return store[key];
    },
 
    setItem(key, value) {
      store[key] = value;
    },
  
    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },
     
    getAll() {
      console.log(store);
    }
  };
})();

// retrieve all data from API
const getScores = async () => {
     const resp = await fetch(url).then((response) => response.json())
     .then((data) => displayData(data.result));
     //console.log("line53", resp)
     return resp;
};

//sort array of objects by object property
fetchData.result.sort((a, b) => b.score - a.score);


//singly linked lists
class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }
  
  add(number) {
    let node = new Node(number)
    let currentNode;
    if(this.head === null){
      this.head = node;
    } else {
      currentNode = this.head;
    
      while(currentNode.pointer) {
        currentNode = currentNode.pointer
      }
      currentNode.pointer = node;
    }
    this.size++
  }

 //  get(index) {
 //     // your code here
 //    let counter = 1;
 //    let reader = this.head;
 //    console.log(reader)
 //    while(reader){
 //      if(counter === index) {
 //        return reader.value
 //      }
 //      counter++
 //      reader = reader.pointer
 //   }
 }

  get(index) {
     // your code here
    let counter = 1;
    let reader = this.head;
    console.log(reader)
    while(counter < index){
      reader = reader.pointer
      counter++
   }
      console.log(reader.value)
 }
}

remove(index){
  let reader = this.head;
  let counter = 0;
  if(index === 0){
    this.head = reader.pointer;
    this.size--
    return 
  }else {
    while(reader){
      reader = reader.pointer
      if(counter === this.size - 1){
        reader.pointer = null;
        counter++
      }
              
    }
  }
}

//                             -------- REACT ------------


//create and render react (class) component extended from a parent class
class MyComponent extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id='challenge-node'>
      <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent/>,
  document.getElementById('challenge-node'))




// using props with class components 
// Here a stateless function component is being called/used as a child of another class component
  const CurrentDate = (props) => {
    return (
      <div>
    
        <p>The current date is: {props.date} </p>
  
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date={Date()}/>
        </div>
      );
    }
  };
  
  
  
  // passing array props(properties) with class components 
  const List = (props) => {

    return <p>{props.tasks.join(', ')}</p>
  
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
  
          <List tasks={['code','clean']}/>
          <h2>Tomorrow</h2>
          <List tasks={['Eat','fix car','shopping']}/>
  
        </div>
      );
    }
  };

  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // type checking component props to make sure components are expecting, using or processing the right type of data
  // normally written outside the components
  Items.propTypes = {
    quantity: PropTypes.number.isRequired
  }
  
  // providing default props to components
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };

// using only class components
  class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              <Welcome name = {'chime'}/>
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <p>Hello, <strong>{this.props.name}</strong>!</p>
          </div>
      );
    }
  };

  // class component with state
  class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: 'chime'}
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };


//class component state update in response to event
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({name: 'React Rocks!'})
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };

  // programmatically modify/update component state
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    
      toggleVisibility() {  
        this.setState(state => {
          if(state.visibility === true){
            return {visibility:false} 
          }  
          return {visibility: true}
       })
  
    }
  
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }

/*
          ----REACT lifecycles----
  Each of these processes occur one after the other          

  1. Mounting (putting elements in the DOM):

      constructor().
      getDerivedStateFromProps().
      render() (mandatory).
      componentDidMount().

  2. Updating (props or state changes):
  
      getDerivedStateFromProps().
      shouldComponentUpdate().
      render() (mandatory).
      getSnapshotBeforeUpdate().
      componentDidUpdate().
  
  3. Unmounting (element is removed from the DOM):
  
      componentWillUnmount()

*/


// implementing class based component life cycle
import React, { Component } from 'react';
 
class Todo extends Component {
  // mounting 
  //constructor initializes first when component is mounted to the DOM
  constructor(props) {
    super(props);
 
    this.state = {
      todo: null,
    };
  }
 //then componentDidMount runs after constructor is initialized
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(todo => this.setState({ todo }))
  }
 
}

export default Todo;




//complete description of react components and jsx in action

  // get current date for use in user's comment 
  function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  //construct comment for a user
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
               src={props.author.avatarUrl}
               alt={props.author.name} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  // user comment data comes from here
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
  
  //user comment is displayed 
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} />
  );



  //                         ------------REDUX-----------

const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

//REDUCER FUNCTION FOR UPDATING STATE  BASED ON ACTIONS
const counterReducer = (state = 0, action) => {
    switch(action.type){
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state
    }
};

// ACTIONS THAT INDICATES WHAT HAS CHANGED IN THE APP
const incAction = () => {
  return {type: INCREMENT}
};

// ACTIONS THAT INDICATES WHAT HAS CHANGED IN THE APP
const decAction = () => {
  return {type: DECREMENT}
};

//CENTRAL STORAGE LOCATION OF THE WHOLE STATE OF THE APP
const store = Redux.createStore(counterReducer); 

//STORE METHOD FOR CHECKING CURRENT STATE
store.getState()

//STORE METHOD FOR TAKING ACTIONS TO THEIR RESPECTIVE REDUCER FUNCTIONS
//FOR HANDLING THE SPECIFIC ACTION
console.log(store.dispatch(incAction()))


const immutableReducers = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      //remove state data without mutating state
      return state.slice(0,action.index).concat(state.slice(action.index+1,state.length))
      // or [...state.slice(0,action.index), ...state.slice(action.index+1,state.length)]
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // use Object.assign to make copy of state and change only one state property
      return Object.assign({}, state, {status: 'online'})
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};


  
//automated webpack initializer
/*
npm init -y
npx webpack-cli init
npx webpack-cli new
npx webpack

npm run build

initialize gitignore file from CLI
###Gitignore
npm i -g gitignore
npx gitignore node

## vercel ssl
npm i -g vercel
npx vercel login
npx vercel

##Install Bootstrap for webpack use
npm install bootstrap jquery popper.js --save
import 'bootstrap'; and import './index.scss'; //index.js
@import "~bootstrap/scss/bootstrap"; // index.scss

*/
//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








