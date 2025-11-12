import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/MD.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-12">
      {/* Background Image with Advanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/8830478/pexels-photo-8830478.jpeg?_gl=1*1yn1u56*_ga*MTY5NTEyMzAxMi4xNzYyOTMxNTA4*_ga_8JE65Q40S6*czE3NjI5MzE1MDgkbzEkZzEkdDE3NjI5MzM2MDgkajgkbDAkaDA."
          alt="Professional Medical Shop in Hyderabad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              <MapPin className="h-4 w-4" />
              <span>Anantapur's #1 Medical Shop</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <Award className="h-4 w-4" />
              <span>ISO Certified</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Your Trusted{" "}
            <span className="text-primary relative inline-block">
              Healthcare
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 2 150 2 198 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-primary/30"
                />
              </svg>
            </span>{" "}
            <br className="hidden sm:block" />
            Partner
          </h1>

          {/* Enhanced Description */}
          <p className="text-lg sm:text-xl text-black mb-4 font-bold leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 max-w-2xl">
            Experience healthcare excellence with quality medicines, expert consultation, 
            and lightning-fast delivery across Anantapur. Your health is our priority.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-6 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">10,000+</p>
                <p className="text-l font-bold text-white">Happy Customers</p>
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-l font-bold text-white">Available</p>
              </div>
            </div>
            <div className="h-12 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">5+</p>
                <p className="text-l font-bold text-white">Locations</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <a href="tel:+919550140897">
  <Button
    size="lg"
    className="text-base group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center">
      <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
      Call Now
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
  </Button>
</a>
            {/* <Button size="lg" variant="outline" className="text-base group">
              View Services
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button> */}
          </div>

          {/* Enhanced Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <div className="group bg-card/90 backdrop-blur-md border border-border rounded-xl p-5 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-lg">24/7 Emergency</h3>
              <p className="text-sm text-muted-foreground">
                Round-the-clock service for urgent medical needs
              </p>
            </div>

            <div className="group bg-card/90 backdrop-blur-md border border-border rounded-xl p-5 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-lg">
                30-Min Delivery
              </h3>
              <p className="text-sm text-muted-foreground">
                Lightning-fast delivery within a 5 km radius.
              </p>
            </div>

            <div className="group bg-card/90 backdrop-blur-md border border-border rounded-xl p-5 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-lg">
                Verified Products
              </h3>
              <p className="text-sm text-muted-foreground">
                100% genuine medicines with quality guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" /> */}
    </section>
  );
};

export default Hero;
