import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";


export default function Menu({ menu }) {
  const menus = [
    {
      title: "Acceuil",
      active: true,
    },
    {
      title: "Pourquoi Civi",
    },
    {
      title: "Comment ça fonctionne",
    },
    {
      title: "À propos",
    },
  ];
  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute top-full w-full bg-white shadow sm:hidden"
        >
          <ul className="flex flex-col divide-y divide-gray-100 text-center ">
            {menus &&
              menus.map((item, i) => (
                <li
                  className={`${
                    item?.active ? "text-[#007456]" : "text-gray-600"
                  } py-4 transition hover:text-[#007456]`}
                  key={i}
                >
                    <Link href={"/a-propos"}>
                      {item?.title}
                    </Link>
                </li>
              ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}