import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./provider";
import Header from "./components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Civi.ma",
  description: "Le meilleur créateur de CV en ligne au Maroc",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header/>
          {children}
          
        </body>
      </html>
    </StoreProvider>
  );
}
