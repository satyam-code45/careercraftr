import HeroSection from "@/components/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="">
        <HeroSection />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Innovative Tools to Fuel Your Career Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-4 shadow-lg border-2 hover:border-primary transition-colors duration-300 "
                >
                  <CardContent className="flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="text-lg font-semibold mt-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
              <div className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-4xl font-bold">60+</h3>
                <p className="text-muted-foreground">Industires Covered</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-4xl font-bold">550+</h3>
                <p className="text-muted-foreground">Interviews Questions</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-4xl font-bold">95%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-4xl font-bold">24/7</h3>
                <p className="text-muted-foreground">AI Support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Four Easy Steps to Fast-Track Your Career Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => (
                <Card
                  key={index}
                  className="p-4 shadow-lg border-2 hover:border-primary transition-colors duration-300 "
                >
                  <CardContent className="flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Hear From Our Happy Users
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonial.map((testimonial, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex  items-center space-x-4">
                        <div className="relative h-12 w-12 flex-shrink-0">
                          <Image
                            width={40}
                            height={40}
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="rounded-full object-cover border-2 border-primary/20 "
                          />
                        </div>
                        <div className="mx-auto">
                          <h3 className="font-semibold tracking-tighter">
                            {testimonial.author}
                          </h3>
                          <p className="text-muted-foreground text-sm tracking-tighter">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-primary">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <blockquote>
                        <p className="text-muted-foreground italic relative">
                          <span className="text-3xl text-primary absolute -top-4 -left-2">
                            &quot;
                          </span>
                          {testimonial.quote}
                          <span className="text-3xl text-primary absolute -bottom-4">
                            &quot;
                          </span>
                        </p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center mb-14">
              Find Answers to the Most Frequently Asked Questions on Our
              Platform
            </p>
            <div className="max-w-6xl mx-auto container ">
              {faqs.map((faq, index) => (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="mx-auto py-24 gradient rounded-lg">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="font-bold tracking-tighter text-primary-foreground text-3xl md:text-4xl">
                Supercharge Your Career Growth Today!
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                Join countless professionals leveling up their careers with
                AI-driven guidance.
              </p>
              <Link href={"/dashboard"} passHref>
              <Button 
               size={"lg"}
               variant={"secondary"}
               className="h-11 mt-5 animate-bounce"
              >
              Begin your career transformation today!
              <ArrowRight className="ml-2 h-4 w-4"/>
              </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
