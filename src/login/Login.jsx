
import { Link } from "react-router-dom";

import { Form, FormLabel, FormControl, FormField } from "@/components/ui/form";
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const formSchema = z.object({
    // prenom: z.string().min(1, {
    //     message: "Le prénom doit avoir 1 cartactère minimum"
    // }).max(50),
    nom: z.string().min(1, {
        message: "Le nom doit avoir au moins 1 caractère"
    }).max(50),
    dateArrivee: z.date({
        required_error: "Une date est nécessaire"
    })
})

export const Login = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          nom: ""
        },
      })
    console.log(form)
    return <>
        <h1>Rentrez vos informations</h1>

        <div className="formulaire">
        
        <Form {...form}>

            <Label htmlFor="nom">Rentrez votre nom:</Label>
            <Input id="nom" placeholder="Dupond"></Input>

            <Label htmlFor="prenom">Rentrez votre prénom:</Label>
            <Input id="prenom" placeholder="Michel"></Input>

            <Label htmlFor="email">Rentrez votre email:</Label>
            <Input id="email" placeholder="michel.dupond@56k.ing"></Input>

            <Label htmlFor="dateArrivee">Date d'arrivée:</Label>
            <FormField
            control={form.control}
            name="dateArrivee"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                    <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                        )}
                        >
                        {field.value ? (
                            format(field.value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                    />
                    </PopoverContent>
                </Popover>
                <FormDescription>
                    Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

        </Form>

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

    </>

}