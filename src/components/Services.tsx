import { Pill, Cross, Truck, Clock, FileText, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Prescription Medicines",
      description: "Wide range of prescription drugs from trusted brands. Upload your prescription online for hassle-free ordering.",
      color: "primary",
    },
    {
      icon: Cross, // better suited for a medical store
      title: "Surgical Items",
      description:
        "We stock a wide range of essential surgical and medical supplies for home care and clinical use.",
      color: "accent",
    },

    {
      icon: Truck,
      title: "Home Delivery",
      description: "Fast and reliable delivery to your doorstep within 30 minutes. Track your order in real-time.",
      color: "primary",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock availability for urgent medical needs. We're here when you need us most.",
      color: "accent",
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Maintain digital health records and prescription history for easy reordering and better health management.",
      color: "primary",
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "Dedicated support team available via phone, email, or chat to assist with all your queries.",
      color: "accent",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Healthcare Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From prescription medicines to expert consultations, we provide comprehensive healthcare services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300 ${
                    service.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-primary font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Immediate Medical Assistance?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Our emergency service is available 24/7. Call us now or place an order online for urgent medication delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" variant="secondary" className="gap-2">
              <Clock className="h-5 w-5" />
              Call Emergency Line
            </Button> */}
           <a href="tel:+919550140897">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2"
            >
              <Truck className="h-5 w-5" />
              Order Medicine Now
            </Button>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
