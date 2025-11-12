import { Heart, Activity, Thermometer, Brain, Eye, Bone, Plus, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const categories = [
    {
      icon: Heart,
      name: "Cardiac Care",
      products: "250+ Items",
      description: "Heart health medications & supplements",
      gradient: "from-red-500/10 to-pink-500/10",
      iconColor: "text-red-500",
    },
    {
      icon: Activity,
      name: "Diabetes Care",
      products: "180+ Items",
      description: "Blood sugar management products",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Thermometer,
      name: "Fever & Pain",
      products: "320+ Items",
      description: "Pain relievers & fever reducers",
      gradient: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-500",
    },
    {
      icon: Brain,
      name: "Mental Health",
      products: "150+ Items",
      description: "Cognitive & mental wellness",
      gradient: "from-purple-500/10 to-violet-500/10",
      iconColor: "text-purple-500",
    },
    {
      icon: Eye,
      name: "Eye Care",
      products: "200+ Items",
      description: "Vision health & eye drops",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-500",
    },
    {
      icon: Bone,
      name: "Orthopedic",
      products: "280+ Items",
      description: "Bone & joint health products",
      gradient: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-500",
    },
  ];

  const featuredProducts = [
    {
      name: "Vitamin D3 Capsules",
      brand: "HealthCare Plus",
      price: "₹299",
      originalPrice: "₹450",
      discount: "33% OFF",
      inStock: true,
    },
    {
      name: "Omega-3 Fish Oil",
      brand: "NutriLife",
      price: "₹699",
      originalPrice: "₹999",
      discount: "30% OFF",
      inStock: true,
    },
    {
      name: "Multivitamin Tablets",
      brand: "VitalBoost",
      price: "₹399",
      originalPrice: "₹599",
      discount: "33% OFF",
      inStock: true,
    },
    {
      name: "Calcium + Magnesium",
      brand: "BoneStrong",
      price: "₹549",
      originalPrice: "₹799",
      discount: "31% OFF",
      inStock: true,
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Products
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse Our Extensive Catalog
          </h2>
          <p className="text-lg text-muted-foreground">
            Over 5,000+ genuine medicines and healthcare products from trusted brands at competitive prices.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${category.gradient} border border-border rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-background rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Icon className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                </div>
                <h3 className="font-bold text-foreground mb-1 text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-primary font-medium mb-1">
                  {category.products}
                </p>
                <p className="text-xs text-muted-foreground">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Featured Products
            </h3>
            <Button variant="outline">View All Products →</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Product Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <Pill className="h-16 w-16 text-primary/20" />
                  {product.discount && (
                    <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-1">
                    {product.brand}
                  </p>
                  <h4 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-foreground">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button className="w-full gap-2" size="sm">
                    <Plus className="h-4 w-4" />
                    Add to Cart
                  </Button>

                  {product.inStock && (
                    <p className="text-xs text-accent text-center mt-2">
                      ✓ In Stock - Fast Delivery
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-muted/50 border border-border rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Upload your prescription or call us directly. Our pharmacists will help you find the right medication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Upload Prescription
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Contact Pharmacist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
