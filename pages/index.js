import Contact from "../components/home/Contact";
import HeroSection from "../components/home/HeroSection";
import Services from "../components/home/Services";
const Home = () => {
  return (
    <main className="">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-10 xl:px-0">
        <Services />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
