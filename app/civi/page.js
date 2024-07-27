"use client";

import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function CiviPage() {
    const competencesList = useSelector(state => state.competences);
    const certificatsList = useSelector(state => state.certificates);
    const experiencesList = useSelector(state => state.experiences);
    const educationsList = useSelector(state => state.educations);
    const generalInfo = useSelector(state => state.generalInfo);

    const handleDownloadPDF = async () => {
        const element = document.getElementById("resumeContent");
        if (!element) return;

        // Define A4 dimensions in pixels
        const a4WidthPx = 210 * 3.7795275591; // 210 mm to pixels
        const a4HeightPx = 297 * 3.7795275591; // 297 mm to pixels

        // Capture the content of the element
        const canvas = await html2canvas(element, {
            scale: 2, // Higher scale for better resolution
            width: a4WidthPx,
            height: a4HeightPx,
            useCORS: true, // Allow cross-origin images
        });

        const imgData = canvas.toDataURL("image/png");

        // Create a new jsPDF instance with A4 size
        const pdf = new jsPDF({
            orientation: 'portrait', // or 'landscape'
            unit: 'px', // Use 'px' to match the canvas dimensions
            format: [a4WidthPx, a4HeightPx]
        });

        const imgWidth = a4WidthPx;
        const imgHeight = canvas.height * imgWidth / canvas.width;

        let position = 0;
        let heightLeft = imgHeight;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= a4HeightPx;

        while (heightLeft > 0) {
            pdf.addPage();
            position = heightLeft - imgHeight;
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= a4HeightPx;
        }

        // Save the PDF
        pdf.save("resume.pdf");
    };

    return (
        <div className="bg-gray-100 font-sans">
            <div style={{ maxWidth: '210mm', margin: '0 auto', padding: '16px' }}>
                <button
                    onClick={handleDownloadPDF}
                    style={{ marginBottom: '24px', width: '100%', borderRadius: '8px', backgroundColor: '#ecc94b', padding: '12px', fontWeight: '600', color: '#000', cursor: 'pointer', transition: 'background-color 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d69e2e'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ecc94b'}
                >
                    Download Resume as PDF
                </button>
                <div id="resumeContent" style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', width: '100%' }}>
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

                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Education</h2>
                    {educationsList.map((edu, index) => (
                        <div key={index} style={{ marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{edu.titre}</h3>
                            <p style={{ color: '#2d3748', fontSize: '14px' }}>From {edu.entreprise}</p>
                            <p style={{ color: '#4a5568', fontSize: '14px' }}>{edu.date}</p>
                        </div>
                    ))}

                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Experience</h2>
                    {experiencesList.map((exp, index) => (
                        <div key={index} style={{ marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{exp.titre} at {exp.entreprise}</h3>
                            <p style={{ color: '#2d3748', fontSize: '14px' }}>{exp.description}</p>
                            <p style={{ color: '#4a5568', fontSize: '14px' }}>{exp.periode}</p>
                        </div>
                    ))}

                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Skills</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#2d3748', fontSize: '16px' }}>
                        {competencesList.map((comp, index) => (
                            <li key={index}>{comp}</li>
                        ))}
                    </ul>

                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '16px', marginBottom: '8px' }}>Certificates</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#2d3748', fontSize: '16px' }}>
                        {certificatsList.map((cert, index) => (
                            <li key={index}>{cert.titre} at {cert.entreprise}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={handleDownloadPDF}
                    style={{ marginTop: '24px', width: '100%', borderRadius: '8px', backgroundColor: '#ecc94b', padding: '12px', fontWeight: '600', color: '#000', cursor: 'pointer', transition: 'background-color 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d69e2e'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ecc94b'}
                >
                    Download Resume as PDF
                </button>
            </div>
        </div>
    );
}
