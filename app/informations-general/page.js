"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGeneralInfo } from "../slices/generalInfoSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InfoPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    titre: "",
    description: "",
    tele: "",
    linkedin: "",
    email: "",
    github: ""
  });
  const router = useRouter();
  const generalInfo = useSelector(state => state.generalInfo)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [ e.target.name ]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setGeneralInfo(formData));
    router.push('/educations');
  };

  const hundleBack = (e) => {
    e.preventDefault();
    router.push('/')
  }

  useEffect(()=>{
    setFormData(generalInfo);
  },[generalInfo]);
  
  return (
    <section className="flex w-full bg-white py-8">
      <div className="mx-auto w-full max-w-7xl px-8">
       <h2 className="text-2xl font-bold mb-6">Informations générales:</h2>
        <form className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="nom"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="prenom"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Titre de profile</label>
            <input
              type="text"
              name="titre"
              value={formData.titre}
              onChange={handleChange}
              className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="titre"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Description de profile</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="description"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Téléphone</label>
            <input
              type="tel"
              name="tele"
              value={formData.tele}
              onChange={handleChange}
              className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="téléphone"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">LinkedIn (optionnel)</label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="LinkedIn"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">GitHub (optionnel)</label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="w-full rounded-lg p-3 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="GitHub"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-between">
            <button
              onClick={hundleBack}
              className=" rounded-lg bg-red-500 p-3 font-semibold text-white hover:bg-gray-400 transition"
            >
              Annuler
            </button>
            <button
              onClick={handleSubmit}
              className=" rounded-lg bg-[#007456] p-3 font-semibold text-white hover:bg-gray-400 transition"
            >
              Suivant
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
