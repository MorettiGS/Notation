import React, {Component} from "react";
import './Tela_Principal.css'
import NotesLogoPlaceholder from '../fontes/NotesLogoPlaceholder.png'

class Tela_Principal extends Component{
    
    render() {
        return (
                <div className="Tela">
                    <img className='Logo' src={NotesLogoPlaceholder} alt="Logo"/>

                    <h1 className='Title'>Notation</h1>

                    <h2>Notes for your everyday life.</h2>

                    <button className="Butoes">Login</button>

                    <button className="Butoes">Sign up</button>
                </div>
        )
    }

}

export default Tela_Principal