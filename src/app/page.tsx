import Navbar from "./Landing_Page/Navbar";
import Banner from "./Landing_Page/Banner";
import Footer from "./Landing_Page/Footer";
import Feature from "./Landing_Page/Feature";
import Technology from "./Landing_Page/Technology";
import Agents from "./Landing_Page/Agents";
import Pricing from "./Landing_Page/Prices";
import Contact from "./Landing_Page/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Feature />
      <Technology />
      <Agents />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
