import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import Card from "./Card.jsx"



var change = true ;

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
        color = "black";
        ccolor(color);
    }
    return (
    <div>
    <div className= "keeper">
        <Header />
        
        <Note />
        
        
        <button style={{backgroundColor:color}}onClick={updateMotivation}onMouseOut={handleMouseout} onMouseOver={handleMouseover}>SWITCH MOTIVATION</button>
    </div>
    

    {state ? <div className = "motivation">
        <Card name =""  url = "https://picsum.photos/id/235/400/300" />
        <Card name = ""  url = "https://picsum.photos/id/230/400/300" />
        <Card name = ""  url = "https://picsum.photos/id/266/400/300" />
    </div> : null}
    </div>
    
    );
};


export default App;