
import Cards from "@/Components/About/Cards";
import Commonbreadcrumb from "@/Components/Commoncomponent/Commonbreadcrumb";

import MainLayouts from "@/Layouts/MainLayouts";
import React from "react";
const data = {
  cont1: "ABOUT US",
  cont2: "Empowering businesses with 15+ years of excellence",
};
export default function aboutus() {
  return (
    <MainLayouts>
      {/* <Commonbreadcrumb data={data} /> */}
      <Cards />
    </MainLayouts>
  );
}
