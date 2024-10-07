import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Tela_Inicial.css'
import NotesLogoPlaceholder from '../fontes/NotesLogoPlaceholder.png'

class Tela_Inicial extends Component{
    
    render() {
        return (
                <div className="Tela">
                    <img className='Logo' src={NotesLogoPlaceholder} alt="Logo"/>

                    <h1 className='Title'>Notation</h1>

                    <h2>Notes for your everyday life.</h2>

                    <Link to="/Error"><button className="Butoes">Login</button></Link>

                    <Link to="/Error"><button className="Butoes">Sign up</button></Link>
                </div>
        )
    }

}

export default Tela_Inicial