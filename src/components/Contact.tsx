import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 9550140897"],
      subtext: "24/7 Emergency Hotline",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["tejamedical09@gmail.com"],
      subtext: "Response within 2 hours",
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Door No. 15/654, Sanjeeva Reddy Circle, Ananthapur-515001"],
      subtext: "Best store across the city",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["8AM - 10PM", "Emergency Service Available"],
      subtext: "Always here for you",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 overflow-x-hidden -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            We're Here to Help You
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about medications or need assistance? Our team is ready to support your healthcare needs.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Urgent Help Card */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 sm:p-8 text-primary-foreground text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Need Urgent Help?</h3>
            <p className="mb-6 opacity-90 text-sm sm:text-base">
              Call our emergency hotline for immediate assistance with urgent medication needs.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Call: +91 9849443562
            </Button>
          </div>

          {/* Contact Information Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">
                    {info.title}
                  </h4>
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-xs sm:text-sm text-muted-foreground mb-1 break-words"
                    >
                      {detail}
                    </p>
                  ))}
                  <p className="text-xs text-accent font-medium mt-2">
                    {info.subtext}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
