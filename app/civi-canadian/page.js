"use client";

import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";

export default function CiviCanadianPage() {
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
                    style={{ marginBottom: '24px', width: '100%', borderRadius: '8px', backgroundColor: '#007bff', padding: '12px', fontWeight: '600', color: '#ffffff', cursor: 'pointer', transition: 'background-color 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                >
                    Download Resume as PDF
                </button>
                <div id="resumeContent" style={resumeStyle}>
                    <header style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', marginBottom: '20px' }}>
                        <h1 style={{ fontSize: '28px', fontWeight: '700' }}>{generalInfo.nom} {generalInfo.prenom}</h1>
                        <p style={{ fontSize: '18px', fontWeight: '500', color: '#6c757d' }}>{generalInfo.titre}</p>
                    </header>

                    <section style={{ marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '10px' }}>Summary</h2>
                        <p style={{ fontSize: '16px', color: '#343a40' }}>{generalInfo.description}</p>
                    </section>

                    <section style={{ marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '10px' }}>Contact Information</h2>
                        <ul style={{ listStyleType: 'none', padding: '0', fontSize: '16px', color: '#343a40' }}>
                            <li>Email: <a href={`mailto:${generalInfo.email}`} style={{ color: '#007bff', textDecoration: 'underline' }}>{generalInfo.email}</a></li>
                            <li>Phone: {generalInfo.tele}</li>
                            {generalInfo.linkedin && <li>LinkedIn: <a href={generalInfo.linkedin} style={{ color: '#007bff', textDecoration: 'underline' }}>{generalInfo.linkedin}</a></li>}
                            {generalInfo.github && <li>GitHub: <a href={generalInfo.github} style={{ color: '#007bff', textDecoration: 'underline' }}>{generalInfo.github}</a></li>}
                        </ul>
                    </section>

                    <section style={{ marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '10px' }}>Education</h2>
                        {educationsList.map((edu, index) => (
                            <div key={index} style={{ marginBottom: '15px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{edu.diplome}</h3>
                                <p style={{ fontSize: '16px', color: '#343a40' }}>{edu.etablissement} - {edu.annee} ({edu.statut})</p>
                            </div>
                        ))}
                    </section>

                    <section style={{ marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '10px' }}>Professional Experience</h2>
                        {experiencesList.map((exp, index) => (
                            <div key={index} style={{ marginBottom: '15px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{exp.poste} at {exp.entreprise}</h3>
                                <p style={{ fontSize: '16px', color: '#343a40' }}>{exp.description} - {exp.annee}</p>
                            </div>
                        ))}
                    </section>

                    <section style={{ marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '10px' }}>Skills</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '16px', color: '#343a40' }}>
                            {competencesList.map((comp, index) => (
                                <li key={index}>{comp}</li>
                            ))}
                        </ul>
                    </section>

                    <section style={{ marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '10px' }}>Languages</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '16px', color: '#343a40' }}>
                            {langagesList.map((lang, index) => (
                                <li key={index}>{lang.langage} - {lang.niveau}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '10px' }}>Certifications</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '16px', color: '#343a40' }}>
                            {certificatsList.map((cert, index) => (
                                <li key={index}>{cert.titre} - {cert.entreprise}</li>
                            ))}
                        </ul>
                    </section>
                </div>
                <button
                    onClick={handleDownloadPDF}
                    style={{ marginTop: '24px', width: '100%', borderRadius: '8px', backgroundColor: '#007bff', padding: '12px', fontWeight: '600', color: '#ffffff', cursor: 'pointer', transition: 'background-color 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                >
                    Download Resume as PDF
                </button>
            </div>
        </div>
    );
}
