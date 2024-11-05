
import { Link } from "react-router-dom"

export const Formulaire = () => {

    return <>
        <div className="titre">
            <h1>Bienvenue Michel Dupont afin d'améliorer votre experience client
            , nous vous invitons à répondre à quelques questions.</h1>
        </div>
        <div className="questions">
            <p>Quel est votre âge ?</p>
            <select name="Choisisez votre âge">
                <option value="">&lt;18 Ans</option>
                <option value="">18-25 Ans</option>
                <option value="">25-40 Ans</option>
                <option value="">40-60 Ans</option>
                <option value="">&gt;60 Ans</option>
            </select>

            <p>Quel est votre genre ?</p>
            <select name="Choisisez votre genre">
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Autre">Autre</option>
            </select>     
            <p>Avec qui êtes vous accompagné</p>
            <select name="Choisisez votre situiation">
                <option>Je suis seul</option>
                <option>Je suis en couple</option>
                <option>Je suis avec ma famille</option>
            </select>
        </div>
        <Link to={"/home"}>Accueil</Link>
        
        
    </>
}
