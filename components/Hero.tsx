"use client"

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {

  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    const imageElement = imageRef.current;
    if (!imageElement) return;
    const handleScroll = ()=>{
      const scrollPositon = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPositon>scrollThreshold) {
        imageElement.classList.add("scrolled")
      }
      else{
        imageElement.classList.remove("scrolled")
      }
    };
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll)

  },[])
  return (
    <section className="w-full pt-36 md:pt-48 pb-10 relative">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl gradient-title animate-gradient">
          AI-Powered Career Growth
            <br />
            Resumes, Interviews & Insights
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          Get AI-powered resume optimization, mock interviews, and career insights to stand out and land your dream job.
          </p>
        </div>
        <div className="flex justify-center space-x-4 " >
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/homebanner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
