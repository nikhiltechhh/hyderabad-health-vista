import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Minus,
  X,
  ShoppingCart,
  Send,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AllProducts() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);

  // Load & persist cart in localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("pharmacyCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pharmacyCart", JSON.stringify(cart));
  }, [cart]);

  // Example product list (expand freely)
  const allProducts = [
    {
      id: "1",
      name: "Asthalin Inhaler",
      brand: "Cipla",
      price: 85,
      originalPrice: 100,
      discount: "15% OFF",
      inStock: true,
      image: "https://i.ibb.co/5x52kcHP/asthalin.jpg",
    },
    {
      id: "2",
      name: "Telvas 40mg Tablet",
      brand: "Aristo",
      price: 85,
      originalPrice: 100,
      discount: "15% OFF",
      inStock: true,
      image: "https://i.ibb.co/ynznPjsh/telvas.webp",
    },
    {
      id: "3",
      name: "Ecosprin GOLD 20",
      brand: "Rx",
      price: 165,
      originalPrice: 195,
      discount: "15% OFF",
      inStock: true,
      image: "http://i.ibb.co/DfgPvXGq/ecosprin.jpg",
    },
    {
      id: "4",
      name: "Zerodol-P Tablet",
      brand: "ipca",
      price: 66,
      originalPrice: 77,
      discount: "15% OFF",
      inStock: true,
      image: "https://i.ibb.co/KJQQdXt/zerodol.jpg",
    },
    {
      id: "5",
      name: "Dolo 650 Tablet",
      brand: "Micro Labs",
      price: 28,
      originalPrice: 35,
      discount: "20% OFF",
      inStock: true,
      image: "https://i.ibb.co/7XxvxFC/dolo.jpg",
    },
    {
      id: "6",
      name: "Metformin 500mg",
      brand: "Glenmark",
      price: 55,
      originalPrice: 65,
      discount: "15% OFF",
      inStock: true,
      image: "https://i.ibb.co/ZmvgscV/metformin.jpg",
    },
    {
      id: "7",
      name: "Azee 500 Tablet",
      brand: "Cipla",
      price: 120,
      originalPrice: 150,
      discount: "20% OFF",
      inStock: true,
      image: "https://i.ibb.co/mBFKwZV/azee.jpg",
    },
    {
      id: "8",
      name: "Shelcal 500",
      brand: "Torrent",
      price: 85,
      originalPrice: 100,
      discount: "15% OFF",
      inStock: true,
      image: "https://i.ibb.co/61FJWZV/shelcal.jpg",
    },
  ];

  // Cart helpers
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
  const getTotalPrice = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
      message += `   Qty: ${item.quantity}\n`;
      message += `   Price: ₹${item.price} × ${item.quantity} = ₹${
        item.price * item.quantity
      }\n\n`;
    });
    message += `Total Items: ${getTotalItems()}\nTotal: ₹${getTotalPrice()}\n\nThank you!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919550140897?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              All Products
            </h2>
            <p className="text-base text-muted-foreground">
              Explore our complete medicine collection
            </p>
          </div>
          <Button
            variant="outline"
            className="group hover:bg-primary hover:text-primary-foreground transition-all"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => {
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
                  {product.discount && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {product.discount}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-primary/70 font-semibold mb-1 uppercase">
                    {product.brand}
                  </p>
                  <h4 className="font-bold text-base mb-2 text-foreground">
                    {product.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>

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

      {/* Floating Cart */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-28 right-8 z-50">
          <Button
            className={`rounded-full w-14 h-14 shadow-xl relative bg-gradient-to-r from-primary to-accent transition-all ${
              animateCart ? "scale-110" : "hover:scale-105"
            }`}
            onClick={() => setShowCart(true)}
          >
            <ShoppingCart className="h-6 w-6" />
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
            {/* Header */}
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

            {/* Cart Items */}
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
                          ₹{item.price} × {item.quantity}
                        </p>
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

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t space-y-3">
                <p className="text-lg font-bold">
                  Total: ₹{getTotalPrice()}
                </p>
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
