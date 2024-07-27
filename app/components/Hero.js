import Image from "next/image";
import { DM_Sans } from "@next/font/google";
import Link from "next/link";

const dm = DM_Sans({ subsets: ["latin"], weight: "700" });

export default function Hero() {
    const hero_content = {
        h1: "Le meilleur créateur de CV en ligne au Maroc",
        description:
            "Créez facilement le CV parfait pour n'importe quel emploi en utilisant notre plateforme de création de CV, la meilleure de sa catégorie.",
        hero_image: {
            alt: "Hero Image",
            path: "/girl-work-on-table.svg",
        },
        cta: "Créer mon CV maintenant",
    };

    return (
        <>
            <section className="flex w-full bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-8 py-8 md:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-8 fade-in">
                        <h1
                            className={`${dm.className} text-5xl font-bold text-dark-blue lg:text-7xl`}
                        >
                            {hero_content?.h1}
                        </h1>
                        <p className="max-w-lg text-xl text-gray-600">
                            {hero_content?.description}
                        </p>
                        <div>
                            <Link
                                href={"/informations-general"}
                                className="rounded-lg bg-[#007456] text-white px-8 py-4 font-medium duration-150 hover:scale-110 hover:bg-gray-400 transition"
                            >
                                {hero_content?.cta}
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:mt-10 fade-in flex items-center justify-center min-h-[24rem]">
                        <Image
                            className="object-contain" // Ensures the image scales properly while maintaining its aspect ratio
                            src={hero_content?.hero_image?.path}
                            alt={hero_content?.hero_image?.alt}
                            width={460}
                            height={200}
                            priority
                        />
                    </div>

                </div>
            </section>
            <section className="flex w-full bg-yellow-300 py-8">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-8 lg:flex-row">
                    <h2
                        className={`${dm.className} text-center text-xl font-bold text-dark-blue lg:text-4xl fade-in`}
                    >
                        Plus de 1 000 professionnels d&apos;entreprises du monde entier nous font confiance
                    </h2>
                </div>
            </section>
        </>
    );
}
