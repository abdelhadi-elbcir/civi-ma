import React from "react";
import Image from "next/image";
import { DM_Sans } from "@next/font/google";
import Link from "next/link";

const dm = DM_Sans({ subsets: ["latin"], weight: "700" });

export default function Cards() {
  const content = [
    {
      thumbnail: "/civi-advices.jpeg",
      title: "L'utilisation des mots-clés pour optimiser votre CV",
      description:
        "Les systèmes de suivi des candidatures (ATS) sont largement utilisés par les entreprises pour filtrer les CV.",
    },
    {
      thumbnail: "/civi-errors.jpeg",
      title: "Les erreurs sont éviter absolument",
      description:
        "Évitez les clichés et les phrases toutes faites qui manquent d'originalité.",
    },
    {
      thumbnail: "/master-civi.jpeg",
      title: "Structurer efficacement votre CV",
      description:
        "Un CV bien structuré est essentiel pour capter l'attention des recruteurs et mettre en valeur votre profil professionnel.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl flex-col space-y-16 px-8 py-8 lg:space-y-24">
        {content &&
          content.map((item, i) => (
            <div key={i} className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
              {/* Right Image */}
              <div
                className={`cursor-pointer lg:p-8 ${
                  i % 2 === 0 ? "sm:order-2" : "sm:order-1"
                }`}
              >
                <Image
                  className="h-full w-full rounded-md shadow transition duration-300 ease-in-out hover:-translate-y-2 lg:shadow-xl"
                  src={item?.thumbnail}
                  alt={item?.title}
                  width={504}
                  height={450}
                  priority
                />
              </div>
               {/* Left Content */}
               <div
                className={`flex flex-col justify-center space-y-4 lg:space-y-8 ${
                  i % 2 === 0 ? "sm:order-1" : "sm:order-2"
                }`}
              >
                <h1
                  className={`${dm.className} text-4xl font-bold text-dark-blue lg:text-7xl`}
                >
                  {item?.title}
                </h1>
                <p className="max-w-lg text-lg text-gray-600 lg:text-xl">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}

        <div className="flex flex-col items-center justify-center space-y-6 rounded-3xl bg-[#007456] py-16 md:py-28">
          <h2
            className={`${dm.className} text-center text-3xl font-bold text-white lg:text-5xl`}
          >
            Trouvez votre emploi de rêve Wadifaty.ma!
          </h2>
          <p className="text-white">© Copyright 2024, Tous droits réservés</p>
          <div className="flex flex-col space-y-2 pt-10 md:flex-row md:space-y-0">
            <Link href={"https://wadifaty.ma"} className="rounded-lg bg-yellow-300 p-6 font-semibold text-black transition hover:bg-yellow-200 ">
              Commencer maintenant
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}