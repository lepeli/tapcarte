import "./Formulaire.css"
import { Link } from "react-router-dom"
import { Slider } from "@/components/ui/slider"

export const Formulaire = () => {

    return <div className="formulaire_page">
        <div className="titre">
            <h1 className="text-center hero">Bienvenue Michel Dupont afin d'améliorer votre experience client
            , nous vous invitons à répondre à quelques questions.</h1>
        </div>
        <div className="questions">
            <p>Quel est votre âge ?</p>
            <select name="age">
                <option>&lt;18 Ans</option>
                <option>18-25 Ans</option>
                <option>25-40 Ans</option>
                <option>40-60 Ans</option>
                <option>&gt;60 Ans</option>
            </select>
            <p>Quel est votre genre ?</p>
            <select name="gender">
                <option>Homme</option>
                <option>Femme</option>
                <option>Autre</option>
            </select>     
            <p>Avec qui êtes vous accompagné</p>
            <select name="family">
                <option>Je suis seul</option>
                <option>Je suis en couple</option>
                <option>Je suis avec ma famille</option>
            </select>
            <p>Quel est votre budget ? $0-$500</p>
            <Slider defaultValue={[33]} max={500} step={1} className="budget_slider"/>
            <p>Quel genre de sortie vous intéresse le plus ?</p>
            <select name="intrests">
                <option>Musée</option>
                <option>Monuments Historiques</option>
                <option>Shopping</option>
                <option>Balades</option>
            </select>
        </div>
        <div classname="form_links">
             <div classname="form_suivant">
                 <Link to={"/home"}>Suivant →</Link>
             </div>
             <div>
                 <Link to={"/home"}>Passer</Link>
             </div>
        </div>
        <div classname="trademark">
            <p>TAP' Carte - Tous droits réservés 2024</p>
        </div>
        
    </div>
}
