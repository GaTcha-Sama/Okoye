import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const categories = [
    {
      title: "Épices",
      description: "Découvrez nos épices authentiques",
      image: "/images/spices.jpg"
    },
    {
      title: "Fruits Exotiques",
      description: "Savourez nos fruits tropicaux",
      image: "/images/fruits.jpg"
    },
    {
      title: "Artisanat",
      description: "Explorez notre artisanat traditionnel",
      image: "/images/crafts.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-orange-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image 
          src="/images/okoye-illustration.png"
          alt="okoye" 
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
        <div className="relative z-20 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Bienvenue sur Okoyé
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Votre épicerie en ligne de produits authentiques d&apos;Afrique et des Antilles
          </p>
          <Link 
            href="/products" 
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200"
          >
            Découvrir nos produits
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Pourquoi choisir Okoyé ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Produits Authentiques",
                description: "Sélectionnés directement auprès de producteurs locaux"
              },
              {
                icon: "🚚",
                title: "Livraison Rapide",
                description: "Livraison en 24/48h partout en France métropolitaine"
              },
              {
                icon: "💫",
                title: "Qualité Garantie",
                description: "Des produits frais et contrôlés régulièrement"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{feature.title}</h3>
                <p className="text-amber-800">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Nos Catégories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Restez informé
          </h2>
          <p className="text-amber-800 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 p-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200"
            >
              S&apos;inscrire
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
