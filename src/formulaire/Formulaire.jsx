import "./Formulaire.css"
import { Link } from "react-router-dom"
import { Slider } from "@/components/ui/slider"
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export const Formulaire = () => {

    const firstName = localStorage.getItem("firstName") == null ? "Demo" : localStorage.getItem("firstName")
    const lastName = localStorage.getItem("lastName") == null ? "Michel" : localStorage.getItem("lastName")

    return <div className="formulaire_page">
        <div className="titre">
            <h1 className="text-center hero">Bienvenue {firstName} {lastName},afin d'améliorer votre experience, nous vous invitons à répondre à quelques questions.</h1>
        </div>
        <div className="questions">
            
            <Select name="age">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Votre âge" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">&lt;18 Ans</SelectItem>
                    <SelectItem value="2">18-25 Ans</SelectItem>
                    <SelectItem value="3">25-40 Ans</SelectItem>
                    <SelectItem value="4">40-60 Ans</SelectItem>
                    <SelectItem value="5">&gt;60 Ans</SelectItem>
                </SelectContent>
            </Select>
            <p>Quel est votre genre ?</p>
            <Select name="gender">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Votre genre" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Homme</SelectItem>
                    <SelectItem value="2">Femme</SelectItem>
                    <SelectItem value="3">Autre</SelectItem>
                </SelectContent>
            </Select>
            <p>Avec qui êtes vous accompagné ?</p>
            <Select name="family">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Accompagnement" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Je suis seul</SelectItem>
                    <SelectItem value="2">Je suis en couple</SelectItem>
                    <SelectItem value="3">Je suis avec ma famille</SelectItem>
                </SelectContent>
            </Select>
            <p>Quel est votre budget ? $0-$500</p>
            <Slider defaultValue={[33]} max={500} step={1} className="budget_slider"/>
            <p>Quel genre de sortie vous intéresse le plus ?</p>
            <Select name="intrests">
                <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Activité" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Musée</SelectItem>
                    <SelectItem value="2">Monuments Historiques</SelectItem>
                    <SelectItem value="3">Shopping</SelectItem>
                    <SelectItem value="4">Balades</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <div className="flex w-full">
            <div className="flex-grow"><Button variant="outline">Passer</Button></div>
            <div className="flex-grow"><Button variant="">Suivant</Button></div>
        </div>

        <div className="form_links">
             <div className="form_suivant">
                 <Link to={"/home"}>Suivant →</Link>
             </div>
             <div>
                 <Link to={"/home"}>Passer</Link>
             </div>
        </div>
        <div className="trademark">
            <p>TAP' Carte - Tous droits réservés 2024</p>
        </div>
        
    </div>
}
