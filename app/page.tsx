import HeroSection from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div >
      <div className="grid-background">
          <HeroSection/>

          <section className="flex items-center justify-center">
            <div>
              <h2>Innovative Tools to Fuel Your Career Growth</h2>
              <Link href={"/"}>
                <Button >Hii</Button>
              </Link>
            </div>
          </section>
      </div>
   </div>
  );
}
