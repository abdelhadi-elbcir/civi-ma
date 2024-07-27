import Image from 'next/image';

export default function Partners() {
    return (
        <section className="w-full bg-white py-24 sm:py-32">
            <div className="mx-auto flex max-w-5xl flex-col items-center px-8 sm:space-y-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Approuvé par
                </h2>
                <div className="flex justify-center space-x-12">
                    {/* Company Image 1 */}
                    <div className="flex items-center justify-center">
                        <Image
                            src="/logo-ox.webp" // Replace with the path to your image
                            alt="Company 1"
                            width={280} // Adjust to desired width
                            height={280} // Adjust to desired height
                            className="object-contain"
                        />
                    </div>
                    {/* Company Image 2 */}
                    <div className="flex items-center justify-center">
                        <Image
                            src="/wadifatyma-logo.webp" // Replace with the path to your image
                            alt="Company 2"
                            width={280} // Adjust to desired width
                            height={280} // Adjust to desired height
                            className="object-contain"
                        />
                    </div>
                    {/* Company Image 3 */}
                    <div className="flex items-center justify-center">
                        <Image
                            src="/draalogo.webp" // Replace with the path to your image
                            alt="Company 3"
                            width={280} // Adjust to desired width
                            height={280} // Adjust to desired height
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
