import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 98765 43210", "+91 87654 32109"],
      subtext: "24/7 Emergency Hotline",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@medicareplus.com", "support@medicareplus.com"],
      subtext: "Response within 2 hours",
    },
    {
      icon: MapPin,
      title: "Our Locations",
      details: ["Jubilee Hills, Hyderabad", "Banjara Hills, Hyderabad"],
      subtext: "5+ stores across the city",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["24/7 - All Days", "Emergency Service Available"],
      subtext: "Always here for you",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 overflow-x-hidden">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 sm:p-8 text-primary-foreground mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Need Urgent Help?</h3>
              <p className="mb-6 opacity-90 text-sm sm:text-base">
                Call our emergency hotline for immediate assistance with urgent medication needs.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="w-full gap-2 text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="truncate">Call: +91 98765 43210</span>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-muted-foreground mb-1 break-words">
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

            {/* Map Placeholder */}
            <div className="bg-muted rounded-xl overflow-hidden h-64 border border-border">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    Jubilee Hills, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Send Us a Message
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 xxxxx xxxxx"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject *
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your query..."
                  className="min-h-32 resize-none"
                />
              </div>

              <Button size="lg" className="w-full gap-2 group">
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center px-2">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
