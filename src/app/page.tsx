
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import ProductShowcase from "./components/ProductShowcase";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <LogoTicker></LogoTicker>
      <ProductShowcase></ProductShowcase>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
      <Footer/>
    </div>
  );
}
