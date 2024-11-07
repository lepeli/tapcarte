import "./Formulaire.css"
import { Link, useNavigate } from "react-router-dom"
import { Slider } from "@/components/ui/slider"
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export const Formulaire = () => {

    const firstName = localStorage.getItem("firstName") == null ? "Demo" : localStorage.getItem("firstName")
    const lastName = localStorage.getItem("lastName") == null ? "Michel" : localStorage.getItem("lastName")

    const [budget, setBudget] = useState(33);


    const updateBudget = event => {
        console.log("Zeb")
        setBudget(event.target.value);
    }

    const navigate = useNavigate();

    const next = event => {
        navigate("/home")
    }

    return <div className="formulaire_page">
        <div className="titre">
            <h1 className="text-center hero">Bienvenue {firstName} {lastName},afin d'améliorer votre experience, nous vous invitons à répondre à quelques questions.</h1>
        </div>
        <div className="questions">
            <Label htmlFor="age">Quel est votre âge ?</Label>
            <Select id="age">
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
            <Label htmlFor="gender">Quel est votre genre ?</Label>
            <Select id="gender">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Votre genre" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Homme</SelectItem>
                    <SelectItem value="2">Femme</SelectItem>
                    <SelectItem value="3">Autre</SelectItem>
                </SelectContent>
            </Select>
            <Label htmlFor="family">Avec qui êtes vous accompagné ?</Label>
            <Select id="family">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Accompagnement" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Je suis seul</SelectItem>
                    <SelectItem value="2">Je suis en couple</SelectItem>
                    <SelectItem value="3">Je suis avec ma famille</SelectItem>
                </SelectContent>
            </Select>
            <Label htmlFor="budgetSlider">Quel est votre budget ? $0-$500</Label>
            <Slider id="budgetSlider" onValueChange={setBudget} defaultValue={[33]} max={500} step={1} className="budget_slider"/>
            <p>Votre budget est de: ${budget}</p>
            <Label htmlFor="interests">Quel genre de sortie vous intéresse le plus ?</Label>
            <Select id="interests">
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
            <div className="flex-grow"><Button onClick={next} variant="outline">Passer</Button></div>
            <div className="flex-grow"><Button onClick={next} variant="">Suivant</Button></div>
        </div>

        <div className="trademark">
            <p>TAP' Carte - Tous droits réservés 2024</p>
        </div>
        
    </div>
}
