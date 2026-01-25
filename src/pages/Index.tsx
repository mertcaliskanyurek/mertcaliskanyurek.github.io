import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechArsenal from "@/components/TechArsenal";
import Timeline from "@/components/Timeline";
import SaasMindset from "@/components/SaasMindset";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechArsenal />
        <Timeline />
        <SaasMindset />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
