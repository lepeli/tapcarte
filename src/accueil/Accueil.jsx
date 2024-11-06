import React from "react";
import "./Acceuil.css"

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export const Accueil = () => {
    const images = [
        {path: "/src/assets/caroussel/balcon.jpg", desc: "Vue depuis le balcon"},
        {path: "/src/assets/caroussel/mer.jpg", desc: "Vue sur la mer"},
        {path: "/src/assets/caroussel/piscine.jpg", desc: "Vue sur la piscine"}
    ]
    return <>
        <div>

            <img src="" alt="" />

            <h1 className="hero">Bienvenue Michel Dupont.</h1>

            <h2>Dans votre hôtel:</h2>

            {/* Prier pour que le carroussel marche */}

            <Carousel className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[80%]">
                <CarouselContent>
                    {images.map((image, index) => (
                    <CarouselItem
                        key={index}
                        className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                    >
                        <Card className="h-full">
                        <div className="relative h-[300px]">
                            <img
                            src={image.path}
                            alt={image.desc}
                            className="h-full w-full object-cover"
                            />
                            {/* <CardContent className="absolute bottom-0 left-0 right-0 bg-white/70 p-4">
                             <CardTitle>{image.desc}</CardTitle>
                            {/* </CardContent> */}
                        </div>
                        </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
            </Carousel>
            <h2>Activités proches</h2>
            <div className="activities">
                {/* Normalement je suis censé ajouter une liste d'activités ici */}

            </div>

        </div>
    </>
}