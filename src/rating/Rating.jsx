import { Slider } from "@/components/ui/slider"
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { useState } from "react"

import "./Rating.css"

export const Rating = () => {

    const [satisfactionNote, setSatisfactionNote] = useState(10);

    return <>


        <h1 className="hero text-center">Merci pour votre séjour au Swiss Inn !</h1>
        <p className="text-center">Nous vous invitons à remplir ce questionnaire de satisfaction</p>
        <div className="rating_questionnaire">
        <div className="questionnaire p-8 mt-8">

            <Label htmlFor="">Comment avez-vous connu notre établissement ?</Label>
            <Select id="mean" defaultValue="1">
                    <SelectTrigger className="w-full">
                        <SelectValue defaultValue={1}/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Notre site internet</SelectItem>
                        <SelectItem value="2">Bouche à oreille</SelectItem>
                        <SelectItem value="3">Réseaux sociaux</SelectItem>
                        <SelectItem value="4">Site de réservation</SelectItem>
                        <SelectItem value="5">Autre</SelectItem>
                    </SelectContent>
            </Select>
            <Label htmlFor="alreadyStayed">Avez-vous déjà séjourné dans notre établissement ?</Label>
            <Select id="alreadyStayed" defaultValue="1">
                    <SelectTrigger className="w-full">
                        <SelectValue defaultValue={1}/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Oui</SelectItem>
                        <SelectItem value="2">Non</SelectItem>
                    </SelectContent>
            </Select>

            <Label htmlFor="">Sur 10, à quel point êtes-vous satisfait de votre séjour ?</Label>
            <Slider id="budgetSlider" onValueChange={setSatisfactionNote} defaultValue={[10]} max={10} step={1} className="pt-2"/>
            <p className="mb-2 text-xs">Votre note: {satisfactionNote} / 10</p>

            <Label htmlFor="welcoming">Comment évaluez-vous l'accueil qui vous a été réservé en arrivant ?</Label>
            <Select id="welcoming" defaultValue="1">
                    <SelectTrigger className="w-full">
                        <SelectValue defaultValue={1}/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Chalereux</SelectItem>
                        <SelectItem value="2">Satisfaisant</SelectItem>
                        <SelectItem value="3">À revoir</SelectItem>
                    </SelectContent>
            </Select>

            <div className="flex flex-row-reverse pt-2">
                <Button type="submit">Envoyer</Button>
            </div>

        </div>
        </div>
    </>

}