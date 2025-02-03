import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "CareerCraftr - AI-Powered Career Coach",
  description: "CareerCraftr helps you generate ATS-compliant resumes, practice mock interviews, and evaluate job performance with AI insights.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header/>
            <main className="min-h-screen">{children}</main>
            {/* footer */}
            <footer className="bg-muted/50 py-12" >
              <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made by Satyam!</p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
  );
}
