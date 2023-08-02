import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PropertyAreaCard from "../components/PropertyAreaCard";
import InfoCard from "../components/InfoCard";
import LatestPropertySection from "../components/LatestPropertySection";
import LatestProperties from "../components/LatestProperties";
import ContactUsForm from "../components/ContactUsForm";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real State</title>
        <meta name="description" content="Real State finder" />
      </Head>
      <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <HeroSection />
        <PropertyAreaCard />
        <InfoCard />
        <LatestPropertySection />
        <LatestProperties />
        <ContactUsForm />
        <Footer
          imageIds="/houseline2.svg"
          smallImageIds="/social-media-logo5.svg"
          mediumImageIds="/social-media-logo6.svg"
          smallImageIds2="/social-media-logo7.svg"
          smallImageIds3="/social-media-logo8.svg"
          largeImageIds="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;
