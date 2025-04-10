import Breadcrumb from "@/components/home/Common/Breadcrumb";
import Features from "@/components/home/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Principais Recursos",
  description: "",
  // other metadata
};

const FeaturesPage = () => {
  return (
    <>
      <Features />
    </>
  );
};

export default FeaturesPage;
