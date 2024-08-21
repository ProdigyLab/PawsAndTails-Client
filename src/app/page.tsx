"use client";
import Head from "next/head";
import metaData from "../../public/meta.json";
import NavBarComponent from "@/components/ui/features/Navbar";
import PetCardComponent from "@/components/ui/features/PetCard";
import FooterComponent from "@/components/ui/features/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <NavBarComponent/> */}
        
        <PetCardComponent/>
        {/* <AddTodo />
        <TodoList /> */}
      <FooterComponent/>
      </main>
    </>
  );
}
