import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsappFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <Services />
      <WhyChooseUs />
      <Contact />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Index;
