"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExperiencesList } from "../slices/experiencesSlice";

export default function ExperiencePage() {
    const [experiences, setExperiences] = useState([
        {
            annee: "",
            entreprise: "",
            poste: "",
            description: "",
        },
    ]);
    const router = useRouter();
    const experiencesList = useSelector(state => state.experiences);
    const dispatch = useDispatch();
    

    const handleChange = (index, e) => {
        const newExperiences = experiences.map((exp, expIndex) => {
            if (expIndex === index) {
                return { ...exp, [e.target.name]: e.target.value };
            }
            return exp;
        });
        setExperiences(newExperiences);
    };

    const addExperience = () => {
        setExperiences([
            ...experiences,
            { annee: "", entreprise: "", poste: "", description: "" },
        ]);
    };

    const deleteExperience = (index) => {
        setExperiences(experiences.filter((_, expIndex) => expIndex !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(experiences);
        dispatch(setExperiencesList(experiences));
        router.push('/certificats')
    };


    useEffect(() => {
        setExperiences(experiencesList)
    }, [experiencesList])

    const hundleBack = (e) => {
        e.preventDefault();
        router.push('/educations')
    }

    return (
        <section className="flex w-full bg-white py-8">
            <div className="mx-auto w-full max-w-7xl px-8">
                <h2 className="text-2xl font-bold mb-6">Expériences professionnelles:</h2>
                <hr style={{ borderBottom: "1px dashed black" }}/>
                <form className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div style={{ borderBottom: "1px dashed black" }} key={index} className="relative p-5 grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Année
                                </label>
                                <input
                                    type="text"
                                    name="annee"
                                    value={exp.annee}
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="(Ex): 2024-2025"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Entreprise
                                </label>
                                <input
                                    type="text"
                                    name="entreprise"
                                    value={exp.entreprise}
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="entreprise"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Poste
                                </label>
                                <input
                                    type="text"
                                    name="poste"
                                    value={exp.poste}
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="(Ex): ingénieur"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={exp.description}
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="description"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                onClick={() => deleteExperience(index)}
                                className="absolute top-2 right-2 rounded-lg bg-red-500 p-2 text-white hover:bg-red-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                                </svg>
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addExperience}
                        className="mt-4 rounded-lg bg-yellow-500 p-3 font-semibold text-white hover:bg-yellow-400 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                        </svg>
                    </button>
                    <hr className="my-6" />
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={hundleBack}
                            className="rounded-lg bg-gray-500 p-3 font-semibold text-white hover:bg-gray-400 transition"
                        >
                            Avant
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="rounded-lg bg-[#007456] p-3 font-semibold text-white hover:bg-gray-400 transition"
                        >
                            Suivant
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
