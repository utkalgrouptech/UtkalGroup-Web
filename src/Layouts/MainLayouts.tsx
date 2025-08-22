import React, { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ResponsiveNavBar from "./Responsivenav";
import Head from "next/head";


type Prop = {
  title?: string;
  children: ReactElement | ReactElement[];
};

export default function MainLayouts({ children }: Prop) {
  return (
    <>
      <Head>
      <link rel="icon" href="./logo.png "></link> 
    </Head>
      <header className="sticky top-0 z-50 bg-white shadow-md"> 
        <Header />
      </header>

      <ResponsiveNavBar />
      <main>{children}</main>
     
      <Footer />
    </>
  );
}
