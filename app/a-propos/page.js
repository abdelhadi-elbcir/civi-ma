export default function PageAPropos() {
    return (
        <div className="bg-gray-100 font-sans">
            <div className="container mx-auto py-8 px-4">

                <h1 className="text-3xl font-bold mb-6 text-gray-800">À propos civi.ma !</h1>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Pourquoi construire mon CV avec civi.ma ?</h2>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded-full mr-4">
                                <span className="text-xl font-semibold">1</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">Nous sommes réellement gratuits</h2>
                                <p className="text-gray-600 mt-2">Contrairement à d&apos;autres services, nous ne facturons aucun frais pour la création de votre CV. Profitez d&apos;un service totalement gratuit.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded-full mr-4">
                                <span className="text-xl font-semibold">2</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">Aucune donnée stockée</h2>
                                <p className="text-gray-600 mt-2">Nous respectons votre vie privée. Aucune de vos informations personnelles n&apos;est stockée sur nos serveurs, garantissant ainsi votre sécurité.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded-full mr-4">
                                <span className="text-xl font-semibold">3</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">Rapidité de création</h2>
                                <p className="text-gray-600 mt-2">Créez votre CV en quelques minutes grâce à notre interface simple et rapide. Votre CV sera prêt à l&apos;emploi en un rien de temps.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Optimiser votre CV</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">L&apos;utilisation des mots-clés</h3>
                            <p className="text-gray-600 mt-2">Les systèmes de suivi des candidatures (ATS) sont largement utilisés par les entreprises pour filtrer les CV. Utilisez des mots-clés pertinents pour améliorer la visibilité de votre CV et augmenter vos chances d&apos;être sélectionné.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Les erreurs à éviter absolument</h3>
                            <p className="text-gray-600 mt-2">Évitez les clichés et les phrases toutes faites qui manquent d&apos;originalité. Assurez-vous que votre CV est exempt de fautes d&apos;orthographe et de grammaire, et qu&apos;il reflète fidèlement votre expérience et vos compétences.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Structurer efficacement votre CV</h3>
                            <p className="text-gray-600 mt-2">Un CV bien structuré est essentiel pour capter l&apos;attention des recruteurs. Utilisez des titres clairs, des sections bien définies, et une mise en page soignée pour mettre en valeur votre profil professionnel de manière optimale.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Conditions</h2>
                    <p className="text-gray-600">En utilisant notre service, vous acceptez nos termes et conditions. Voici les principaux points :</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Les services fournis sont gratuits et sans frais cachés.</li>
                        <li>Nous nous réservons le droit de modifier nos conditions d&apos;utilisation à tout moment.</li>
                        <li>Le contenu généré est de votre responsabilité, et nous déclinons toute responsabilité en cas d&apos;erreurs ou d&apos;omissions.</li>
                    </ul>
                </div>

                {/* Confidentialité */}
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Confidentialité</h2>
                    <p className="text-gray-600">Votre confidentialité est importante pour nous. Voici notre politique de confidentialité :</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Nous ne stockons aucune donnée personnelle sur nos serveurs.</li>
                        <li>Nous ne partageons pas vos informations avec des tiers sans votre consentement explicite.</li>
                        <li>Les informations collectées sont uniquement utilisées pour fournir le service demandé.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
