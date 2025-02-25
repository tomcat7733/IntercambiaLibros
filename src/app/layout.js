import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "/public/assets/bootstrap/css/bootstrap.min.css";
import Nav from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IntercambiaLibros",
  description: "Intercambio de libros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav  />
        {children}
        <Footer />
        <Script 
          src="/assets/bootstrap/js/bootstrap.bundle.min.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
