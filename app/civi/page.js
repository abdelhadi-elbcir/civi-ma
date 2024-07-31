"use client";

import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";

export default function CiviPage() {
    const competencesList = useSelector(state => state.competences);
    const certificatsList = useSelector(state => state.certificates);
    const experiencesList = useSelector(state => state.experiences);
    const educationsList = useSelector(state => state.educations);
    const generalInfo = useSelector(state => state.generalInfo);
    const langagesList = useSelector(state => state.langages);

    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            const a4WidthMm = 210;
            const containerWidth = document.getElementById("resumeContainer").offsetWidth;
            const newScale = containerWidth / (a4WidthMm * 3.7795275591);
            setScale(newScale);
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const handleDownloadPDF = async () => {
        const element = document.getElementById("resumeContent");
        if (!element) return;

        const a4WidthPx = 210 * 3.7795275591;
        const a4HeightPx = 297 * 3.7795275591;

        const clone = element.cloneNode(true);
        clone.style.transform = 'none';
        clone.style.width = `${a4WidthPx}px`;
        clone.style.height = `${a4HeightPx}px`;
        clone.style.position = 'absolute';
        clone.style.left = '-9999px';
        document.body.appendChild(clone);

        const canvas = await html2canvas(clone, {
            scale: 2,
            useCORS: true,
            width: a4WidthPx,
            height: a4HeightPx
        });

        document.body.removeChild(clone);

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);

        pdf.save("resume.pdf");
    };

    const resumeStyle = {
        width: '200mm',
        minHeight: '297mm',
        padding: '20mm',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
    };

    return (
        <div className="bg-gray-100 font-sans">
            <div id="resumeContainer" style={{ maxWidth: '210mm', margin: '0 auto', padding: '16px' }}>
                <button
                    onClick={handleDownloadPDF}
                    style={{ marginBottom: '24px', width: '100%', borderRadius: '8px', backgroundColor: '#ecc94b', padding: '12px', fontWeight: '600', color: '#000', cursor: 'pointer', transition: 'background-color 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d69e2e'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ecc94b'}
                >
                    Télécharger Votre CV PDF
                </button>
                <div id="resumeContent" style={resumeStyle}>
                    <h1 style={{ fontSize: '24px', fontWeight: '600' }}>{generalInfo.nom} {generalInfo.prenom}</h1>
                    <p style={{ color: '#4a5568', fontSize: '18px' }}>{generalInfo.titre}</p>

                    <hr style={{ margin: '16px 0' }} />

                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>Profile</h2>
                    <p style={{ color: '#2d3748', fontSize: '16px' }}>{generalInfo.description}</p>

                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Contact</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#2d3748', fontSize: '16px' }}>
                        <li>Email: <a href={`mailto:${generalInfo.email}`} style={{ color: '#3182ce', textDecoration: 'underline' }}>{generalInfo.email}</a></li>
                        <li>Téléphone: {generalInfo.tele}</li>
                        {generalInfo.linkedin && <li>LinkedIn: <a href={generalInfo.linkedin} style={{ color: '#3182ce', textDecoration: 'underline' }}>{generalInfo.linkedin}</a></li>}
                        {generalInfo.github && <li>GitHub: <a href={generalInfo.github} style={{ color: '#3182ce', textDecoration: 'underline' }}>{generalInfo.github}</a></li>}
                    </ul>
                    <hr style={{ borderBottom: "1px dashed black" }}/>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Éducation</h2>
                    {educationsList.map((edu, index) => (
                        <div key={index} style={{ marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{edu.diplome}</h3>
                            <p style={{ color: '#2d3748', fontSize: '14px' }}>{edu.etablissement} - {edu.annee} ({edu.statut})</p>
                        </div>
                    ))}
                    <hr style={{ borderBottom: "1px dashed black" }}/>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Expériences professionnelles</h2>
                    {experiencesList.map((exp, index) => (
                        <div key={index} style={{ marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{exp.poste} - {exp.entreprise}</h3>
                            <p style={{ color: '#2d3748', fontSize: '14px' }}>{exp.description} - {exp.annee}</p>
                        </div>
                    ))}
                    <hr style={{ borderBottom: "1px dashed black" }}/>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Compétences</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#2d3748', fontSize: '16px' }}>
                        {competencesList.map((comp, index) => (
                            <li key={index}>{comp}</li>
                        ))}
                    </ul>
                    <hr style={{ borderBottom: "1px dashed black" }}/>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Langues</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#2d3748', fontSize: '16px' }}>
                        {langagesList.map((lang, index) => (
                            <li key={index}>{lang.langage} : {lang.niveau}</li>
                        ))}
                    </ul>
                    <hr style={{ borderBottom: "1px dashed black" }}/>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Certificates</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#2d3748', fontSize: '16px' }}>
                        {certificatsList.map((cert, index) => (
                            <li key={index}>{cert.titre} - {cert.entreprise}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={handleDownloadPDF}
                    style={{ marginTop: '24px', width: '100%', borderRadius: '8px', backgroundColor: '#ecc94b', padding: '12px', fontWeight: '600', color: '#000', cursor: 'pointer', transition: 'background-color 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d69e2e'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ecc94b'}
                >
                    Télécharger Votre CV PDF
                </button>
            </div>
        </div>
    );
}