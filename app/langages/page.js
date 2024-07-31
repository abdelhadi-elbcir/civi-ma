"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLangagesList } from "../slices/langagesSlice";
import { useRouter } from 'next/navigation';

export default function LangagePage() {
    const [langages, setLangages] = useState([
        {
            langage: "",
            niveau: "",
        },
    ]);
    const langagesList = useSelector(state => state.langages); // Ensure this matches your state structure
    const dispatch = useDispatch();
    const router = useRouter();

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedLangages = langages.map((lang, langIndex) => {
            if (langIndex === index) {
                return { ...lang, [name]: value };
            }
            return lang;
        });
        setLangages(updatedLangages);
    };

    const addLangage = () => {
        setLangages([...langages, { langage: "", niveau: "" }]);
    };

    const deleteLangage = (index) => {
        setLangages(langages.filter((_, langIndex) => langIndex !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setLangagesList(langages));
        router.push('/civi');
    };

    const handleBack = (e) => {
        e.preventDefault();
        router.push('/competences');
    }

    useEffect(() => {
        if (langagesList) {
            setLangages(langagesList);
        }
    }, [langagesList]);

    return (
        <section className="flex w-full bg-white py-8">
            <div className="mx-auto w-full max-w-7xl px-8">
                <h2 className="text-2xl font-bold mb-6">Langages:</h2>
                <hr style={{ borderBottom: "1px dashed black" }}/>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {langages.map((lang, index) => (
                        <div style={{ borderBottom: "1px dashed black" }} key={index} className="relative p-5 grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Langage
                                </label>
                                <input
                                    type="text"
                                    name="langage"
                                    value={lang.langage}
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Langage"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Niveau
                                </label>
                                <select
                                    name="niveau"
                                    value={lang.niveau}
                                    onChange={(e) => handleChange(index, e)}
                                    className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                >
                                    <option value="">Select Niveau</option>
                                    <option value="Débutant">Débutant</option>
                                    <option value="Intermédiaire">Intermédiaire</option>
                                    <option value="Avancé">Avancé</option>
                                </select>
                            </div>
                            <button
                                type="button"
                                onClick={() => deleteLangage(index)}
                                className="absolute top-2 right-2 rounded-full bg-red-500 p-2 text-white hover:bg-red-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                                </svg>
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addLangage}
                        className="mt-4 rounded-lg bg-yellow-500 p-3 font-semibold text-white hover:bg-yellow-400 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                        </svg>
                    </button>
                    <hr className="my-6" />
                    <div className="flex justify-between">
                        <button
                            onClick={handleBack}
                            className="rounded-lg bg-gray-500 p-3 font-semibold text-white hover:bg-gray-400 transition"
                        >
                            Avant
                        </button>
                        <button
                            type="submit"
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
