import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  Activity,
  Thermometer,
  Brain,
  Eye,
  Bone,
  Plus,
  ShoppingCart,
  Minus,
  X,
  Send,
  Trash2,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("pharmacyCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pharmacyCart", JSON.stringify(cart));
  }, [cart]);

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
      id: "1",
      name: "Asthalin Inhaler",
      brand: "Cipla",
      image: "https://i.ibb.co/5x52kcHP/asthalin.jpg",
    },
    {
      id: "2",
      name: "Telvas 40mg Tablet",
      brand: "Aristo",
      image: "https://i.ibb.co/ynznPjsh/telvas.webp",
    },
    {
      id: "3",
      name: "Ecosprin GOLD 20",
      brand: "Rx",
      image: "http://i.ibb.co/DfgPvXGq/ecosprin.jpg",
    },
    {
      id: "4",
      name: "Zerodol-P Tablet",
      brand: "ipca",
      image: "https://i.ibb.co/KJQQdXt/zerodol.jpg",
    },
  ];

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    setAnimateCart(true);
    setTimeout(() => setAnimateCart(false), 600);
  };

  const updateQuantity = (productId: string, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getCartItemQuantity = (productId: string) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      setCart([]);
      setShowCart(false);
    }
  };

  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let message = "🛍️ Teja Medical Order\n\nOrder Summary:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Brand: ${item.brand}\n`;
      message += `   Qty: ${item.quantity}\n\n`;
    });
    message += `Total Items: ${getTotalItems()}\n\nThank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919550140897?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="products"
      className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <Package className="h-4 w-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Browse Our Extensive{" "}
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Medicine Catalog
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 5,000+ genuine medicines and healthcare products from trusted
            brands at competitive prices.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${category.gradient} border-2 border-border/50 rounded-2xl p-6 text-center hover:-translate-y-2 hover:border-primary/30 transition-all cursor-pointer`}
              >
                <div className="bg-background/80 p-4 rounded-2xl mb-4 inline-block">
                  <Icon className={`h-8 w-8 ${category.iconColor}`} />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-primary font-semibold mb-1">
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Featured Products
              </h3>
              <p className="text-sm text-muted-foreground">
                Handpicked bestsellers for your health needs
              </p>
            </div>

            <Button
              variant="outline"
              className="text-sm md:text-base group hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => navigate("/all-products")}
            >
              View All Products
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => {
              const quantity = getCartItemQuantity(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-card/50 border-2 border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-primary/70 font-semibold mb-1 uppercase">
                      {product.brand}
                    </p>
                    <h4 className="font-bold text-base mb-3 text-foreground">
                      {product.name}
                    </h4>

                    {quantity === 0 ? (
                      <Button
                        className="w-full gap-2"
                        size="lg"
                        onClick={() => addToCart(product)}
                      >
                        <Plus className="h-4 w-4" /> Add to Cart
                      </Button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(product.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-bold text-lg w-8 text-center">
                          {quantity}
                        </span>
                        <Button
                          size="icon"
                          onClick={() => updateQuantity(product.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Cart */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-28 right-7 z-50">
          <Button
            className={`rounded-full w-16 h-16 shadow-xl relative bg-gradient-to-r from-primary to-accent transition-all ${
              animateCart ? "scale-110" : "hover:scale-105"
            }`}
            onClick={() => setShowCart(true)}
          >
            <ShoppingCart className="h-8 w-8" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          </Button>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowCart(false)}
        >
          <div
            className="bg-background w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold">Shopping Cart</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCart(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-center text-muted-foreground py-10">
                  Your cart is empty.
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Brand: {item.brand}
                        </p>
                        <p className="text-sm">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5 text-destructive" />
                    </Button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t space-y-3">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={sendToWhatsApp}
                >
                  <Send className="h-4 w-4 mr-2" /> Proceed to WhatsApp Order
                </Button>
                <Button
                  variant="outline"
                  className="w-full hover:text-destructive hover:border-destructive"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4 mr-2" /> Clear Cart
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
