import React from "react";
import "./Acceuil.css"

import acceuil_image_1 from "../assets/image_19.png"
import acceuil_image_2 from "../assets/image_4.png"

import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'

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

    const firstName = localStorage.getItem("firstName") == null ? "Demo" : localStorage.getItem("firstName")
    const lastName = localStorage.getItem("lastName") == null ? "Michel" : localStorage.getItem("lastName")

    return <>
        <div className="acceuil_page">
            <div className="acceuil_header">
                <img src="" alt="" />

                <h1 className="hero">Bienvenue {firstName} {lastName}.</h1>

                <h2>Dans votre hôtel:</h2>
            </div>

            {/* Prier pour que le carroussel marche */}
            <div className="acceuil_carousel">
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
            </div>
            <div className="acceuil_images">
                    <img src={acceuil_image_1} alt="hotel_image_1" className="acceuil_image_1"></img>
                    <img src={acceuil_image_2} alt="hotel_image_2" className="acceuil_image_2"></img>
                    <Link to="/services">
                        <FontAwesomeIcon icon={faCircleRight} className="acceuil_circle_button"/>
                    </Link>
            </div>
            <div className="acceuil_activites">
                <h2>Activités proches</h2>
                <p>- Plage Bleue (2km)</p>
                <p>- Sortie en quad (5km)</p>
                <p>- Aquarium (8km)</p>
                <Link to="/activites">
                <button className="acceuil_activites_button">Voir plus</button>
                </Link>
            </div>
            

        </div>
    </>
}