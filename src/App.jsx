import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import Card1 from "./Card.jsx"
import notes from "./Content.jsx"


var change = true ;

function createNotes(x){
    return <Note key ={x.key} title={x.title} content={x.content} />;}

function App() {
    
    let [state, cstate] = useState(true)
    
    var newTime =234;
    
    function updateMotivation(){
        if (state){
            state = false;
            
            console.log(state)
            
        }else { state = true ;
            
            console.log(state)}
        
        
        cstate(state);
    }
    let [color, ccolor] = useState("white")
    function handleMouseover(){
        console.log("hihi")
        color = "black";
        ccolor(color);
    }
    function handleMouseout(){
        color = "red";
        ccolor(color);
    }
    return (
    <div>
    <div className= "keeper">
        <Header />
        

       {notes.map(createNotes)}

        
        
   
        
        <button style={{backgroundColor:color}}onClick={updateMotivation}onMouseOut={handleMouseout} onMouseOver={handleMouseover}>SWITCH MOTIVATION</button>
    </div>
    

    {state ? <div className = "motivation">
        <Card1 name =""  url = "https://picsum.photos/id/235/400/300" />
        <Card1 name = ""  url = "https://picsum.photos/id/230/400/300" />
        <Card1 name = ""  url = "https://picsum.photos/id/266/400/300" />
    </div> : null}
    </div>
    
    );
};


export default App;