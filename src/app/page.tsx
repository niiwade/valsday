"use client";
import React,{ useEffect, useState } from "react";
import { HeroParallax } from "./components/ui/hero-parallax";
import { Boxes, BoxesCore } from "./components/ui/background-boxes";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./components/ui/text-reveal-card";
import { cn } from "./utils/cn";

export default function Home() {

  return(



    <>
    <div className="flex items-center justify-center bg-pink-500 h-[35rem]  w-full">
     <TextRevealCard
       text="I want to tell you something"
       revealText="Will you be my Valentine? "
     >
       <TextRevealCardTitle>
         Hi Baby
       </TextRevealCardTitle>
       <TextRevealCardDescription>
        Please use this website with a laptop & Hover over the card with a mouse to reveal the hidden
         message
       </TextRevealCardDescription>
     </TextRevealCard>
   </div>
   

   <HeroParallax products={products} />


   <div className="h-[40rem] flex flex-col antialiased bg-pink-400 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>

   </>

  )

    
  

}


 const products = [
  {
   
    link: "https://gomoonbeam.com",
    thumbnail:
      "/queen.jpg",
  },
  {
    
    link: "https://cursor.so",
    thumbnail:
    "/queen1.png",
  },
  {
    
    link: "https://userogue.com",
    thumbnail:
    "/queen2.jpg",
  },
 
  {
    
    link: "https://editorially.org",
    thumbnail:
    "/queen3.jpg",
  },
  {
    
    link: "https://editrix.ai",
    thumbnail:
    "/queen4.jpg",
  },
  {
   
    link: "https://app.pixelperfect.quest",
    thumbnail:
    "/love1.svg"
  },
 
  {
    
    link: "https://algochurn.com",
    thumbnail:
    "/love2.svg"
  },
  {
    
    link: "https://ui.aceternity.com",
    thumbnail:
    "/love3.svg"
  },
  {
  
    link: "https://tailwindmasterkit.com",
    thumbnail:
    "/love9.svg"
  },
  {
    
    link: "https://smartbridgetech.com",
    thumbnail:
    "/love10.svg"
  },
  {
 
    link: "https://renderwork.studio",
    thumbnail:
    "/love3.svg"
  },
 
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
    "/love2.svg"
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
    "/love6.svg"
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
    "/love8.svg"
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
    "/love4.svg"
  },
];

const testimonials = [
  {
    quote:
      "This image reminds me of how i used to seriously crush on you ",
    image:'/queen.jpg'
  },
  {
    quote:
      "I always grateful to God for you my love",
    image:'/queen1.png'
  },
  {
    quote: "You are a queen and More",
    
    
    image:'/queen2.jpg'
  },
  {
    quote:
      "You are my dream Baby.",
    
    image:'/queen3.jpg'
  },
  {
    quote:
      " I acknowledge you My Queen, God bless you ",
   
    image:'/queen4.jpg'
  },
];