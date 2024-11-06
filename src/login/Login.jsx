import React from "react";
import "./Login.css"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import { addDays, format } from "date-fns"
// import { DateRange } from "react-day-picker"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"


// const formSchema = z.object({
//     // prenom: z.string().min(1, {
//     //     message: "Le prénom doit avoir 1 cartactère minimum"
//     // }).max(50),
//     nom: z.string().min(1, {
//         message: "Le nom doit avoir au moins 1 caractère"
//     }).max(50),
//     dateArrivee: z.date({
//         required_error: "Une date est nécessaire"
//     })
// })

export const Login = () => {
    const [dateArrivee, setDateArrivee] = React.useState();
    const [dateDepart, setDateDepart] = React.useState();
    return <div className="login_page">
        <p className="text-center hero">Rentrez vos informations</p>

        <div className="formulaire">

            <Label htmlFor="nom">Rentrez votre nom:</Label>
            <Input id="nom" placeholder="Dupond"></Input>

            <Label htmlFor="prenom">Rentrez votre prénom:</Label>
            <Input id="prenom" placeholder="Michel"></Input>

            <Label htmlFor="email">Rentrez votre email:</Label>
            <Input id="email" placeholder="michel.dupond@56k.ing"></Input>
            
            <Label htmlFor="dateArrivee">Date d'arrivée:</Label>

            <Popover id="dateArrivee">
                <PopoverTrigger asChild>
                    <Button
                    variant={"outline"}
                    className={cn(
                        "w-[240px] justify-start text-left font-normal size-full",
                        !dateArrivee && "text-muted-foreground"
                    )}
                    >
                    <CalendarIcon />
                    {dateArrivee ? format(dateArrivee, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                    mode="single"
                    selected={dateArrivee}
                    onSelect={setDateArrivee}
                    initialFocus
                    />
                </PopoverContent>
            </Popover>
            <br />
            <Label htmlFor="dateDepart">Date de départ:</Label>

            <Popover id="dateDepart" style="display: block;">
                <PopoverTrigger asChild>
                    <Button
                    variant={"outline"}
                    className={cn(
                        "w-[240px] justify-start text-left font-normal size-full",
                        !dateDepart && "text-muted-foreground"
                    )}
                    >
                    <CalendarIcon />
                    {dateDepart ? format(dateDepart, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                    mode="single"
                    selected={dateDepart}
                    onSelect={setDateDepart}
                    initialFocus
                    />
                </PopoverContent>
            </Popover>


            <br />
            <br />
            <Button type="submit" className="submit size-full">Valider</Button>

        </div>

    </div>


}