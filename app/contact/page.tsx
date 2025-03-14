import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900">
              Contactez-Nous
            </h1>
            <p className="text-lg text-amber-800">
              Nous sommes là pour vous aider et répondre à toutes vos questions. N&apos;hésitez pas à nous contacter.
            </p>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-amber-900 font-medium">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-amber-900 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-amber-900 font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Votre message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors duration-200"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Informations de Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-amber-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>06.07.08.09.10</span>
                </div>
                <div className="flex items-center space-x-3 text-amber-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact.okoye@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-amber-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>8 lotissement de la gare, 29590 Rosnoën</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">Horaires d&apos;ouverture</h2>
              <div className="space-y-2 text-amber-800">
                <p>Lundi - Vendredi: 9h00 - 19h00</p>
                <p>Samedi - Dimanche: Fermé</p>
              </div>
            </div>

            <div className="relative h-[200px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20" />
              <Image
                src="/images/store-front.jpg"
                alt="Notre boutique"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 