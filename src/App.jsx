import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
<<<<<<< HEAD
import { BoardContext } from './context/BoardContext';


=======
import Preloader from '../src/components/Preloder'; // Import the Preloader component
import { BoardContext } from '../src/context/BoardContext';
>>>>>>> c817b2aa792bf8fc495590a2828ad84ed71c22cb

function App() {
  const boardData = {
    active:0,
    boards:[
      {
        name:'My Trello Board',
        bgcolor:'#069',
        list:[
          {id:"1",title:"To do",items:[{id:"cdrFt",title:"Project Description 1"}]},
          {id:"2",title:"In Progress",items:[{id:"cdrFv",title:"Project Description 2"}]},
          {id:"3",title:"Done",items:[{id:"cdrFb",title:"Project Description 3"}]}
        ]
      }
    ]
  }
<<<<<<< HEAD
  const [allboard,setAllBoard] = useState(boardData); 
  
  return (
    <>
    <Header></Header>
    <BoardContext.Provider value={{allboard,setAllBoard}}>
      <div className='content flex'>
        <Sidebar></Sidebar>
        <Main></Main>
=======
  const [allboard, setAllBoard] = useState(boardData);
  
  return (
    <>
    <Preloader /> {/* Add the Preloader component */}
    <Header />
    <BoardContext.Provider value={{ allboard, setAllBoard }}>
      <div className='content flex'>
        <Sidebar />
        <Main />
>>>>>>> c817b2aa792bf8fc495590a2828ad84ed71c22cb
      </div>
    </BoardContext.Provider>
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> c817b2aa792bf8fc495590a2828ad84ed71c22cb
