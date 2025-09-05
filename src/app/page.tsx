import Hero from "@/components/Hero";
import Myself from "@/components/Myself";
import ProjectGlimps from "@/components/ProjectGlimps";
import TechStacks from "@/components/TechStacks";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Achievement from "@/components/Achievement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 transition-all duration-300 ease-in-out relative overflow-hidden min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Myself />
        <ProjectGlimps />
        <TechStacks />
        <Experience />
        <Achievement />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;