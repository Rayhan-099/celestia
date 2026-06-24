import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/navigation/Siderail"
import ArchiveSecondarySidenav from "@/components/navigation/ArchiveSecondarySidenav"
import Topnav from "@/components/navigation/Topnav"
import ClientWrapper from "@/components/navigation/ClientWrapper"
import Footer from "@/components/navigation/Footer"
import { cookies } from 'next/headers'
import Head from "next/head"
import Sidedrawer from "@/components/navigation/Sidedrawer"
import ClientProvider from "@/components/navigation/ClientProvider"
import BottomNav from "@/components/navigation/bottomnav"
import MiniAIChat from "@/components/ui/MiniAIChat"
import RightSidenav from "../components/navigation/RightSidenav"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  description: "Pulonia: The Ultimate Genshin Impact Theorycrafting and Metagaming Suite",
  metadataBase: new URL("https://pulonia.vercel.app"),
  keywords: [
      "Pulonia",
      "Genshin Impact",
      "Genshin Website",
      "Genshin Database",
      "Genshin Impact Theorycrafting",
      "Genshin Impact Metagaming",
      "Genshin Meta",
      "Genshin Impact guides",
      "Genshin character builds",
      "Genshin tier list",
      "Genshin Impact calculator",
      "Best Genshin builds",
      "Theorycrafting",
      "Metagaming",
  ],
  author: "Pulonia",
  robots: "index, follow",
  openGraph: {
      title: "Pulonia",
      description: "Pulonia: The Ultimate Genshin Impact Theorycrafting and Metagaming Suite",
      type: "website",
      url: "https://pulonia.vercel.app",
  }
}

export default async function RootLayout({children}) {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')?.value || 'dark'
  const language = cookieStore.get('language')?.value || 'en'

  return (
    <html lang={language} data-theme={theme} data-language={language} className={theme === 'dark' ? 'dark' : ''} suppressHydrationWarning>
      <Head>
      </Head>
      <body className={inter.className}>
        <ClientProvider>
          <Sidebar />
          <ArchiveSecondarySidenav />
          <div className="">
            <Topnav />
            {children}
          </div>
        </ClientProvider>
      </body>
    </html>
  )
}
