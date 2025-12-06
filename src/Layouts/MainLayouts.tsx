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
        <link rel="icon" href="./logo.png" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-53FKQLZV');`
          }}
        />
        {/* End Google Tag Manager */}
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
