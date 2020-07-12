import React, {useState} from 'react';
import './App.css';
import Container from './Conponents/Container'
import Modal from 'react-modal';

Modal.setAppElement('#root')


function App() {
  
  const [modalIsOpen,setmodalIsOpen] = useState(false)
  const [filmData, setFilmData] =  useState({name:'',rating:''})

  const addFilms = ({name, rating}) =>{
    const newFilms = [{name, rating}];
    setFilmData(newFilms);
    };

    const handleSubmit = e => {
      e.preventDefault();
      addFilms({name:e.target.value, rating:e.target.value});
  };
  
  return (
    
   <div className="App">
    <Container/>
    <Modal isOpen={modalIsOpen} onRequestClose={()=>{setmodalIsOpen(!modalIsOpen)}} style={{
         overlay:{
           backgroundColor: 'grey'
         }
       }}>
       <h1>Add Film :</h1>
       <label>Film Name</label>
       <input type="text" onChange={(e)=>{setFilmData({...filmData,name:e.target.value})}} />
       <br/>
       <label>Film rating</label>
       <input type="text" onChange={(e)=>{setFilmData({...filmData,rating:e.target.value})}} />
       <button onClick={()=>{setmodalIsOpen(!modalIsOpen)}}>Close</button>
       <br/>
       <button className="add" onClick={handleSubmit}>Add Movie</button>
    </Modal>
       <button onClick={()=>{setmodalIsOpen(!modalIsOpen)}}>Add film</button>

   </div>
    
  );
}

export default App;
