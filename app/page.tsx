import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center">
        <Image 
          src="/images/okoye-illustration.png"
          alt="okoye" 
          width={500} 
          height={500}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <p className="text-center text-black font-bold text-2xl">
        Bienvenue sur Okoyé
      </p>
      <p className="text-center text-black font-bold text-2xl">
        Okoyé est une épicerie en ligne de produits de qualité en provenance d&apos;Afrique et des Antilles.
      </p>
      <Footer />
    </div>
  );
}
