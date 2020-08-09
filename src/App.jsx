import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import Card from "./Card.jsx"
import Hook from "./Hook.jsx"


var change = true ;


function App() {
    const [time, ntime] = useState(123)
    var state = 123;
    function update(){
        if (state = 123){
            var newTime = 234;
            console.log(state)
            state = 234;
        }else { newTime = 345;
        console.log("chane to 345")}
        
        
        ntime(newTime);
    }

    
    return (
    <div>
    <div className= "keeper">
        <Header />
        {time}
        <button onClick={update}>Get time</button>
        <Note />
        <Hook />
    </div>
    

    {change ? <div className = "motivation">
        <Card name =""  url = "https://picsum.photos/id/235/500/300" />
        <Card name = ""  url = "https://picsum.photos/id/230/500/300" />
        <Card name = ""  url = "https://picsum.photos/id/266/500/300" />
    </div> : null}
    </div>
    
    );
};


export default App;