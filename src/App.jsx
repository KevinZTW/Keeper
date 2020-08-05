import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import Card from "./Card.jsx"


function App() {
    return (
    <div>
    <div className= "keeper">
        <Header />
        <Note />
    </div>

    <div className = "motivation">
        <Card name =""  url = "https://picsum.photos/id/235/500/300" />
        <Card name = ""  url = "https://picsum.photos/id/230/500/300" />
        <Card name = ""  url = "https://picsum.photos/id/266/500/300" />
    </div> 
    </div>    
    
    );
};


export default App;