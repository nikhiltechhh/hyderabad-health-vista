import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Medical Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <MapPin className="h-4 w-4" />
            <span>Serving Hyderabad with Care</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Your Trusted{" "}
            <span className="text-primary">Healthcare Partner</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Quality medicines, expert consultation, and fast delivery across
            Hyderabad. Your health is our priority, available 24/7 for your
            medical needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="text-base">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              View Products
            </Button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Clock className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-1">24/7 Open</h3>
              <p className="text-sm text-muted-foreground">
                Always available for emergencies
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Phone className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-1">
                Fast Delivery
              </h3>
              <p className="text-sm text-muted-foreground">
                Within 30 minutes in Hyderabad
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <MapPin className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-1">
                Multiple Locations
              </h3>
              <p className="text-sm text-muted-foreground">
                Across Hyderabad city
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
