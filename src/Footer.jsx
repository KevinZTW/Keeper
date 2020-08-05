import React from "react";
import ReactDom from "react-dom";

var d = new Date();
var n = d.getFullYear();

function Footer () {
    return(
        <footer>
            <p>@copyright {n}</p>


        </footer>
    )
}

export default Footer;