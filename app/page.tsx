import HeroSection from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div >
      <div className="">
          <HeroSection/>

          <section className="flex items-center justify-center">
            <div>
              <h2 className="ti">Innovative Tools to Fuel Your Career Growth</h2>
              
            </div>
          </section>
      </div>
   </div>
  );
}
