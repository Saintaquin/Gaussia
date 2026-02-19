import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site gaussia.fr — Informations sur l'éditeur et les conditions d'utilisation du site GAUSSIA, agence digitale à Paris.",
  alternates: {
    canonical: "https://gaussia.fr/mentions-legales",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mentions Légales — GAUSSIA",
    url: "https://gaussia.fr/mentions-legales",
    publisher: { "@id": "https://gaussia.fr/#organization" },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-12">
            Mentions légales
          </h1>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            {/* Éditeur */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Éditeur du site
              </h2>
              <p className="mb-2">
                Le site <strong>gaussia.fr</strong> est édité par :
              </p>
              <ul className="list-none space-y-1 ml-4">
                <li>
                  <strong>Raison sociale :</strong> GAUSSIA
                </li>
                <li>
                  <strong>Siège social :</strong> Paris, France
                </li>
                <li>
                  <strong>Email :</strong>{" "}
                  <a
                    href="mailto:contact@gaussia.fr"
                    className="text-blue-600 hover:underline"
                  >
                    contact@gaussia.fr
                  </a>
                </li>
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a
                    href="tel:+33695467881"
                    className="text-blue-600 hover:underline"
                  >
                    +33 6 95 46 78 81
                  </a>
                </li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu du site gaussia.fr (textes, images,
                logos, graphismes, icônes, sons, logiciels, etc.) est la
                propriété exclusive de GAUSSIA ou de ses partenaires et est
                protégé par les lois françaises et internationales relatives à la
                propriété intellectuelle.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, modification, publication ou
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite sauf autorisation
                écrite préalable de GAUSSIA.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Protection des données personnelles
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi « Informatique et Libertés » du 6 janvier
                1978, vous disposez d&apos;un droit d&apos;accès, de
                rectification, de suppression et d&apos;opposition aux données
                personnelles vous concernant.
              </p>
              <p className="mt-3">
                Les données collectées via le formulaire de contact sont
                utilisées uniquement pour répondre à vos demandes et ne sont
                jamais transmises à des tiers sans votre consentement.
              </p>
              <p className="mt-3">
                Pour exercer vos droits ou pour toute question relative à vos
                données, contactez-nous à :{" "}
                <a
                  href="mailto:contact@gaussia.fr"
                  className="text-blue-600 hover:underline"
                >
                  contact@gaussia.fr
                </a>
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Cookies
              </h2>
              <p>
                Le site gaussia.fr peut utiliser des cookies techniques
                nécessaires au bon fonctionnement du site. Ces cookies ne
                collectent aucune donnée personnelle à des fins commerciales.
              </p>
              <p className="mt-3">
                Vous pouvez configurer votre navigateur pour refuser les cookies.
                Cependant, certaines fonctionnalités du site pourraient ne plus
                être disponibles.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. Limitation de responsabilité
              </h2>
              <p>
                GAUSSIA s&apos;efforce de fournir des informations aussi précises
                que possible sur le site. Toutefois, GAUSSIA ne pourra être tenu
                responsable des omissions, des inexactitudes et des carences dans
                la mise à jour, qu&apos;elles soient de son fait ou du fait de
                tiers partenaires.
              </p>
              <p className="mt-3">
                Le site gaussia.fr peut contenir des liens hypertextes vers
                d&apos;autres sites. GAUSSIA ne saurait être tenu responsable du
                contenu de ces sites externes.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige, les tribunaux de Paris seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
