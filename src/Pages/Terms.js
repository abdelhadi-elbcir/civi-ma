import React from 'react';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';

const Terms = () => {
  const containerStyle = {
    padding: '20px',
    
  };

  const questionStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#007456',
  };

  const answerStyle = {
    marginLeft: '15px',
    marginBottom: '10px',
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <h1 style={questionStyle}>Conditions d'utilisation</h1>
        <details>
          <summary style={questionStyle}>Qu'est-ce que civi.ma ?</summary>
          <p style={answerStyle}>
            civi.ma est votre plateforme de référence pour trouver des opportunités d'emploi, des stages et du coaching professionnel au Maroc.
          </p>
        </details>
        <details>
          <summary style={questionStyle}>Comment puis-je trouver des offres d'emploi sur civi.ma ?</summary>
          <p style={answerStyle}>
            Vous pouvez parcourir la sélection quotidienne des offres d'emploi sur civi.ma dans les secteurs public et privé, y compris les postes permanents et temporaires, les stages et les opportunités de pré-embauche.
          </p>
        </details>
        <details>
          <summary style={questionStyle}>Puis-je bénéficier de services de coaching sur civi.ma ?</summary>
          <p style={answerStyle}>
            Oui, civi.ma propose des articles de coaching pour vous aider dans votre recherche d'emploi ou votre développement professionnel. Vous pouvez également entrer en contact avec des coachs professionnels via notre plateforme.
          </p>
        </details>
        <hr/>
        <p style={{ marginTop: '20px' }}>
          Notre site est votre ressource incontournable pour tout ce qui concerne les CV en français. Que vous soyez à la recherche de conseils pour rédiger un CV percutant, des stratégies pour décrocher le poste de vos rêves, des astuces pour vous démarquer en entretien, ou des modèles prêts à l'emploi, nous avons tout ce dont vous avez besoin pour réussir dans votre carrière professionnelle.
        </p>
        <br />
        <p>
          Rejoignez-nous et donnez un nouvel élan à votre parcours professionnel avec des conseils pratiques, des exemples concrets et des ressources indispensables. Nous sommes là pour vous accompagner à chaque étape, que ce soit pour améliorer la présentation de votre expérience, choisir les bons mots-clés, ou préparer des réponses percutantes aux questions d'entretien.
        </p>
        <br />
        <p>
          Chez nous, vous trouverez une communauté engagée, des experts prêts à partager leurs connaissances, et un ensemble d'outils pour maximiser l'impact de votre candidature. N'hésitez plus, faites partie de notre plateforme et boostez votre carrière dès aujourd'hui!
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default Terms;
