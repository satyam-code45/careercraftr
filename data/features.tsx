import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Briefcase, LineChart, ScrollText } from "lucide-react";
import { ReactElement } from "react";


type Feature = {
  icon: ReactElement;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Driven Career Roadmap",
    description:
      "Discover the best career path tailored to your skills, goals, and industry trends with AI-powered insights.",
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Mock Interviews & Coaching",
    description:
      "Sharpen your interview skills with AI-led mock sessions, personalized feedback, and expert guidance.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Real-Time Job Market Trends",
    description:
      "Access up-to-date salary insights, hiring patterns, and industry shifts to stay ahead in your career.",
  },
  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Powered Resume Builder",
    description:
      "Create a professional, ATS-friendly resume with AI-driven recommendations and formatting.",
  },
];
