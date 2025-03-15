import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <section className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">
        <Link href="/">
          <Image src="/images/okoye-logo.jpg" alt="Okoyé" width={100} height={100} />
        </Link>
      </div>
      <div>
        <Image src="/images/okoye-titre.png" alt="Okoyé" width={250} height={100} />
      </div>
      <div className="flex gap-4">
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </section>
  )
}
