import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900">
              À Propos de Nous
            </h1>
            <p className="text-lg text-amber-800">
              Bienvenue dans notre univers où les traditions africaines et antillaises se rencontrent. 
              Nous célébrons la richesse de nos cultures à travers chaque aspect de notre travail.
            </p>
            <div className="space-y-4">
              <div className="bg-white/80 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-amber-900 mb-3">Notre Mission</h2>
                <p className="text-amber-800">
                  Partager et préserver nos traditions tout en innovant pour l&apos;avenir. 
                  Nous créons des ponts entre l&apos;héritage et la modernité.
                </p>
              </div>
              <div className="bg-white/80 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-amber-900 mb-3">Nos Valeurs</h2>
                <ul className="list-disc list-inside text-amber-800 space-y-2">
                  <li>Respect des traditions</li>
                  <li>Innovation créative</li>
                  <li>Partage culturel</li>
                  <li>Excellence artisanale</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20" />
            <Image
              src="/images/cultural-pattern.jpg"
              alt="Motif culturel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Artisanat",
              description: "Découvrez notre collection d'objets artisanaux authentiques."
            },
            {
              title: "Culture",
              description: "Explorez la richesse de nos traditions et de notre histoire."
            },
            {
              title: "Communauté",
              description: "Rejoignez notre communauté dynamique et engagée."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/80 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.title}</h3>
              <p className="text-amber-800">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default about
