import { Shield, Award, Headphones, TrendingUp, Users, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Genuine Products",
      description: "All medicines sourced directly from manufacturers with complete authenticity verification.",
      stat: "Zero Counterfeit",
    },
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "Fully licensed pharmacy with ISO certification and government approvals.",
      stat: "ISO ",
    },
    {
      icon: TrendingUp,
      title: "Best Prices Guaranteed",
      description: "Competitive pricing with regular discounts and loyalty rewards for our customers.",
      stat: "Up to 40% OFF",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Qualified pharmacists available 24/7 to answer your queries and provide guidance.",
      stat: "24/7 Available",
    },
    {
      icon: Users,
      title: "10,000+ Happy Customers",
      description: "Trusted by thousands of families across Hyderabad for their healthcare needs.",
      stat: "4.9/5 Rating",
    },
    {
      icon: Zap,
      title: "Express Delivery",
      description: "Lightning-fast delivery within 30 minutes with real-time order tracking.",
      stat: "30-Min Delivery",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Anantapur's Most Trusted Medical Shop
          </h2>
          <p className="text-lg text-muted-foreground">
            Since 2010, we've been committed to providing quality healthcare products and services with unmatched reliability and customer care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Stat Badge */}
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {feature.stat}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-card border border-border rounded-2xl p-8 md:p-12 ">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">13+</p>
            <p className="text-muted-foreground">Years of Service</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">5000+</p>
            <p className="text-muted-foreground">Products Available</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</p>
            <p className="text-muted-foreground">Orders Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2">99%</p>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
