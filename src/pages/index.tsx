import Image from "next/image";
import MainLayouts from "@/Layouts/MainLayouts";
import Breadcrumb from "@/Components/Home/Breadcrumb";
import Workprocess from "@/Components/Home/Workprocess";
import Protfolio from "@/Components/Home/Protfolio";
import Latestnews from "@/Components/Home/Latestnews";
import Call from "@/Components/Home/Call";
import Readmore from "@/Components/Home/Readmore";
import Welcome from "@/Components/Home/Welcome";
import Director from "@/Components/Home/Director";
import Head from "next/head";
import BusinessTransformation from "@/Components/Home/Inovation";


export default function Home() {
  return (
    <>
    <Head>
<title>Utkal Group Of Companies</title>
<meta name="description" content=""/>
<meta name="keywords" content="" />
<meta property="og:image" content="logo.png"/>
    </Head>
    <MainLayouts>
      <Breadcrumb />
      <Welcome />
      <Director/>
      <Workprocess />
      <BusinessTransformation/>
      <Protfolio />
      <Latestnews />
      <Call />
      <Readmore />
    </MainLayouts>
    </>
  );
}
