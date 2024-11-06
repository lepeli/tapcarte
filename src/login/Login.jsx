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
    const [date, setDate] = React.useState({
        from: new Date(),
      })

    return <div className="login_page">
        <p className="rentrez_infos">Rentrez vos informations</p>

        <div className="formulaire">

        <Label htmlFor="nom">Rentrez votre nom:</Label>
        <Input id="nom" placeholder="Dupond"></Input>

        <Label htmlFor="prenom">Rentrez votre prénom:</Label>
        <Input id="prenom" placeholder="Michel"></Input>

        <Label htmlFor="email">Rentrez votre email:</Label>
        <Input id="email" placeholder="michel.dupond@56k.ing"></Input>

        <div className={cn("grid gap-2")}>
            <Popover>
                <PopoverTrigger asChild>
                <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                    "w-[300px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {date?.from ? (
                    date.to ? (
                        <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                        </>
                    ) : (
                        format(date.from, "LLL dd, y")
                    )
                    ) : (
                    <span>Pick a date</span>
                    )}
                </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                />
                </PopoverContent>
            </Popover>
            </div>
        </div>

        {/* <Form {...form}>

            <FormField
                control={form.control}
                name="nom"
                >
                <FormLabel>Nom</FormLabel>
                <FormControl>
                    <Input placeholder="Dupont"></Input>
                </FormControl>
            </FormField>

            <Button type="submit">Confirmer</Button>
        </Form> */}

    </div>

}