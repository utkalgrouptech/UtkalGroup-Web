
import BlogPage from "@/Components/Blog/blog";

import MainLayouts from "@/Layouts/MainLayouts";
import React from "react";
const data = {
  cont1: "Blog Page",
  cont2: "Empowering businesses with 15+ years of excellence",
};
export default function aboutus() {
  return (
    <MainLayouts>
      {/* <Commonbreadcrumb data={data} /> */}
      <BlogPage />
    </MainLayouts>
  );
}
