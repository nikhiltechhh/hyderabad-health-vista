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
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AllProducts() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Example product list (price & image removed)
  const allProducts = [
    { id: "1", name: "Asthalin Inhaler", brand: "Cipla", inStock: true },
    { id: "2", name: "Telvas 40mg Tablet", brand: "Aristo", inStock: true },
    { id: "3", name: "Ecosprin GOLD 20", brand: "Rx", inStock: true },
    { id: "4", name: "Zerodol-P Tablet", brand: "Ipca", inStock: true },
    { id: "5", name: "Acitrom 2", brand: "", inStock: true },
    { id: "6", name: "Amlokind at", brand: "", inStock: true },
{ id: "7", name: "Aten 25", brand: "", inStock: true },
{ id: "8", name: "Gemer 1", brand: "", inStock: true },
{ id: "9", name: "Glycomet gp1", brand: "", inStock: true },
{ id: "10", name: "Medimet g1", brand: "", inStock: true },
{ id: "11", name: "Glimiprime m1", brand: "", inStock: true },
{ id: "12", name: "Glycomet 500", brand: "", inStock: true },
{ id: "13", name: "CilAcar 10", brand: "", inStock: true },
{ id: "14", name: "Clopilet tab", brand: "", inStock: true },
{ id: "15", name: "Clopitab cv", brand: "", inStock: true },
{ id: "16", name: "Clavix as75", brand: "", inStock: true },
{ id: "17", name: "Clopivas ap 75", brand: "", inStock: true },
{ id: "18", name: "Bio d3 plus", brand: "", inStock: true },
{ id: "19", name: "Aztogold 10", brand: "", inStock: true },
{ id: "20", name: "Endoglim m1", brand: "", inStock: true },
{ id: "21", name: "Vildary 50", brand: "", inStock: true },
{ id: "22", name: "Vildanex 50", brand: "", inStock: true },
{ id: "23", name: "Cilacar 10", brand: "", inStock: true },
{ id: "24", name: "Cyrq d", brand: "", inStock: true },
{ id: "25", name: "Razo d", brand: "", inStock: true },
{ id: "26", name: "Omeez", brand: "", inStock: true },
{ id: "27", name: "Cardivas 3.125", brand: "", inStock: true },
{ id: "28", name: "Duoride 1", brand: "", inStock: true },
{ id: "29", name: "Diapride m1", brand: "", inStock: true },
{ id: "30", name: "Drotin m", brand: "", inStock: true },
{ id: "31", name: "Glimitone mp2", brand: "", inStock: true },
{ id: "32", name: "Dapajust m", brand: "", inStock: true },
{ id: "33", name: "Ecosprin 75", brand: "", inStock: true },
{ id: "34", name: "Etova mr 400", brand: "", inStock: true },
{ id: "35", name: "Prolomet XL 25", brand: "", inStock: true },
{ id: "36", name: "Kglim m1", brand: "", inStock: true },
{ id: "37", name: "Medimet g1", brand: "", inStock: true },
{ id: "38", name: "Mega cv 625", brand: "", inStock: true },
{ id: "39", name: "Moxikind cv 625", brand: "", inStock: true },
{ id: "40", name: "Moxiforce cv 625", brand: "", inStock: true },
{ id: "41", name: "Mega cv syp", brand: "", inStock: true },
{ id: "42", name: "Flucold syp", brand: "", inStock: true },
{ id: "43", name: "Gelusil syp", brand: "", inStock: true },
{ id: "44", name: "TAZLOC 40", brand: "", inStock: true },
{ id: "45", name: "Telvas 40", brand: "", inStock: true },
{ id: "46", name: "Telinor 40", brand: "", inStock: true },
{ id: "47", name: "Telsartan 40", brand: "", inStock: true },
{ id: "48", name: "Telmiprime 40", brand: "", inStock: true },
{ id: "49", name: "Glimy mv1", brand: "", inStock: true },
{ id: "50", name: "Glypride 1", brand: "", inStock: true },
{ id: "51", name: "Pantop 40", brand: "", inStock: true },
{ id: "52", name: "Pantodac 40", brand: "", inStock: true },
{ id: "53", name: "Pantocid 40", brand: "", inStock: true },
{ id: "54", name: "Prothiadaine m 75/1500", brand: "", inStock: true },
{ id: "55", name: "Meftalspas tab", brand: "", inStock: true },
{ id: "56", name: "Metolar 25", brand: "", inStock: true },
{ id: "57", name: "Met XL 50", brand: "", inStock: true },
{ id: "58", name: "Dytor 10", brand: "", inStock: true },
{ id: "59", name: "Dronis 30", brand: "", inStock: true },
{ id: "60", name: "Drotine m", brand: "", inStock: true },
{ id: "61", name: "Dapavel m 10/500", brand: "", inStock: true },
{ id: "62", name: "Defcort 6", brand: "", inStock: true },
{ id: "63", name: "Foracort inhaler", brand: "", inStock: true },
{ id: "64", name: "Budecort inhaler", brand: "", inStock: true },
{ id: "65", name: "Maxiflo 250 inhaler", brand: "", inStock: true },
{ id: "66", name: "Levolin inhaler", brand: "", inStock: true },
{ id: "67", name: "Nazomac af spray", brand: "", inStock: true },
{ id: "68", name: "Duonase nasal spray", brand: "", inStock: true },
{ id: "69", name: "Azeflo spray", brand: "", inStock: true },
{ id: "70", name: "Momeflo spray", brand: "", inStock: true },
{ id: "71", name: "Forglyn inhaler", brand: "", inStock: true },
{ id: "72", name: "Asthaline respules", brand: "", inStock: true },
{ id: "73", name: "Budecort respules", brand: "", inStock: true },
{ id: "74", name: "Levoline respules", brand: "", inStock: true },
{ id: "75", name: "Dynapar Inj", brand: "", inStock: true },
{ id: "76", name: "Pantop Inj", brand: "", inStock: true },
{ id: "77", name: "Voveran inj", brand: "", inStock: true },
{ id: "78", name: "Mega cv inj", brand: "", inStock: true },
{ id: "79", name: "Monocef inj", brand: "", inStock: true },
{ id: "80", name: "Momtaz inj", brand: "", inStock: true },
{ id: "81", name: "Ascoril syp", brand: "", inStock: true },
{ id: "82", name: "Macberry syp", brand: "", inStock: true },
{ id: "83", name: "Reswas syp", brand: "", inStock: true },
{ id: "84", name: "Ambrodil s syp", brand: "", inStock: true },
{ id: "85", name: "Sucrafil syp", brand: "", inStock: true },
{ id: "86", name: "Cremaffin syp", brand: "", inStock: true },
{ id: "87", name: "Ride m2", brand: "", inStock: true },
{ id: "88", name: "Glucobit gm 1", brand: "", inStock: true },
{ id: "89", name: "Reclimet tab", brand: "", inStock: true },
{ id: "90", name: "Rosumac cv10", brand: "", inStock: true },
{ id: "91", name: "Rosloy gold 10", brand: "", inStock: true },
{ id: "92", name: "Rosuvas cv 10", brand: "", inStock: true },
{ id: "93", name: "Rozagold 10", brand: "", inStock: true },
{ id: "94", name: "Rozucor 10", brand: "", inStock: true },
{ id: "95", name: "Triglynase 1", brand: "", inStock: true },
{ id: "96", name: "Istamet 50/500", brand: "", inStock: true },
{ id: "97", name: "Jalra 50", brand: "", inStock: true },
{ id: "98", name: "Vildary m plus", brand: "", inStock: true },
{ id: "99", name: "Vildaprime m 50/500", brand: "", inStock: true },
{ id: "100", name: "Tedibar soap", brand: "", inStock: true },
{ id: "101", name: "Sofibar soap", brand: "", inStock: true },
{ id: "102", name: "Glowskin soap", brand: "", inStock: true },
{ id: "103", name: "Scalp + shampoo", brand: "", inStock: true },
{ id: "104", name: "Pantop mps syp", brand: "", inStock: true },
{ id: "105", name: "Gelusil tab", brand: "", inStock: true },
{ id: "106", name: "Aristozyme syp", brand: "", inStock: true },
{ id: "107", name: "Zincovit syp", brand: "", inStock: true },
{ id: "108", name: "Bevon syp", brand: "", inStock: true },
{ id: "109", name: "Zerodol sp", brand: "", inStock: true },
{ id: "110", name: "Hifinac d", brand: "", inStock: true },
{ id: "111", name: "Warf 1", brand: "", inStock: true },
{ id: "112", name: "Zeptol cr 200", brand: "", inStock: true },
{ id: "113", name: "Chymorol forte tab", brand: "", inStock: true },
{ id: "114", name: "Becosules cap", brand: "", inStock: true },
{ id: "115", name: "Beplex forte", brand: "", inStock: true },
{ id: "116", name: "Tenli m", brand: "", inStock: true },
{ id: "117", name: "Sensoform paste", brand: "", inStock: true },
{ id: "118", name: "Sensodent paste", brand: "", inStock: true },
{ id: "119", name: "Montek lc tab", brand: "", inStock: true },
{ id: "120", name: "Zetaglim m1", brand: "", inStock: true },
{ id: "121", name: "Rantac 150", brand: "", inStock: true },
{ id: "122", name: "Zandubalm", brand: "", inStock: true },
{ id: "123", name: "Volini spray", brand: "", inStock: true },
{ id: "124", name: "Shelcal 500", brand: "", inStock: true },
{ id: "125", name: "Human mixtard", brand: "", inStock: true },
{ id: "126", name: "Insugen 30/70", brand: "", inStock: true },
{ id: "127", name: "Cypon syp", brand: "", inStock: true },
{ id: "128", name: "Betnasol tab", brand: "", inStock: true },
{ id: "129", name: "Glimistar m1", brand: "", inStock: true },
{ id: "130", name: "Gemer Ds1", brand: "", inStock: true },
{ id: "131", name: "Voglistar gm 2", brand: "", inStock: true },
{ id: "132", name: "Encoarte chrono 300", brand: "", inStock: true },
{ id: "133", name: "Cidogril a", brand: "", inStock: true },
{ id: "134", name: "Glifil m", brand: "", inStock: true },
{ id: "135", name: "Angicam beta", brand: "", inStock: true },
{ id: "136", name: "Neurobeion forte", brand: "", inStock: true },
{ id: "137", name: "Triglyburol", brand: "", inStock: true },
{ id: "138", name: "Triglycomet", brand: "", inStock: true },
{ id: "139", name: "Zanocin 200", brand: "", inStock: true },
{ id: "140", name: "Concor 2.5", brand: "", inStock: true },
{ id: "141", name: "Bisobis 2.5", brand: "", inStock: true },
{ id: "142", name: "Mega cv syp", brand: "", inStock: true },
{ id: "143", name: "Clamp syp", brand: "", inStock: true },
{ id: "144", name: "Losar h", brand: "", inStock: true },
{ id: "145", name: "Stamlo 5", brand: "", inStock: true },
{ id: "146", name: "Signoflam tab", brand: "", inStock: true },
{ id: "147", name: "Gemcal", brand: "", inStock: true },
{ id: "148", name: "Grenil tab", brand: "", inStock: true },
{ id: "149", name: "Cobeta cream", brand: "", inStock: true },
{ id: "150", name: "Lozivate cream", brand: "", inStock: true },
{ id: "151", name: "Diprobate cream", brand: "", inStock: true },
{ id: "152", name: "Powergesic gel", brand: "", inStock: true },
{ id: "153", name: "Dynapar gel", brand: "", inStock: true },
{ id: "154", name: "Metpure XL 25", brand: "", inStock: true },
{ id: "155", name: "Gabamax nt", brand: "", inStock: true },
{ id: "156", name: "Glitary m1", brand: "", inStock: true },
{ id: "157", name: "Candid powder", brand: "", inStock: true },
{ id: "158", name: "Zycel 100", brand: "", inStock: true },
{ id: "159", name: "Trigabantin 100", brand: "", inStock: true },
{ id: "160", name: "Carca 3.125", brand: "", inStock: true },
{ id: "161", name: "Acton or tab", brand: "", inStock: true },
{ id: "162", name: "Jointace c2", brand: "", inStock: true },
{ id: "163", name: "Eucalvit tab", brand: "", inStock: true },
{ id: "164", name: "Eslizen 600", brand: "", inStock: true },
{ id: "165", name: "Cilodac 100", brand: "", inStock: true },
{ id: "166", name: "Acera d", brand: "", inStock: true },
{ id: "167", name: "Tendomac forte", brand: "", inStock: true },
{ id: "168", name: "Normabrain syp", brand: "", inStock: true },
{ id: "169", name: "Eptoin 100 tab", brand: "", inStock: true },
{ id: "170", name: "Poktlor syp", brand: "", inStock: true },
{ id: "171", name: "Tonoferon syp", brand: "", inStock: true },
{ id: "172", name: "Cypon syp", brand: "", inStock: true },
{ id: "173", name: "Dexorange syp", brand: "", inStock: true },
{ id: "174", name: "Aptimust syp", brand: "", inStock: true },
{ id: "175", name: "Hexigel", brand: "", inStock: true },
{ id: "176", name: "Mucopian gel", brand: "", inStock: true },
{ id: "177", name: "Ketoral dt", brand: "", inStock: true },
{ id: "178", name: "Saridon", brand: "", inStock: true },
{ id: "179", name: "Dart", brand: "", inStock: true },
{ id: "180", name: "Dolo 650", brand: "", inStock: true },
{ id: "181", name: "Eldopar", brand: "", inStock: true },
{ id: "182", name: "Incobol od", brand: "", inStock: true },
{ id: "183", name: "Rabistal dsr", brand: "", inStock: true },
{ id: "184", name: "Levipil 500", brand: "", inStock: true },
{ id: "185", name: "Levera 750", brand: "", inStock: true },
{ id: "186", name: "Chericof syp", brand: "", inStock: true },
{ id: "187", name: "Ambrolite syp", brand: "", inStock: true },
{ id: "188", name: "Glimiprime mp2", brand: "", inStock: true },
{ id: "189", name: "Etoshine 60", brand: "", inStock: true },
{ id: "190", name: "Nucoxia mr", brand: "", inStock: true },
{ id: "191", name: "Ezact 90", brand: "", inStock: true },
{ id: "192", name: "Novastat cv 10", brand: "", inStock: true },
{ id: "193", name: "Nexovas 10", brand: "", inStock: true },
{ id: "194", name: "Nebi 5", brand: "", inStock: true },
{ id: "195", name: "Nexpro 40", brand: "", inStock: true },
{ id: "196", name: "Nova 75", brand: "", inStock: true },
{ id: "197", name: "Humanmixtard pen fill", brand: "", inStock: true },
{ id: "198", name: "Novofine needles", brand: "", inStock: true },
{ id: "199", name: "Protine powders", brand: "", inStock: true },
{ id: "200", name: "Multivitamins", brand: "", inStock: true },
{ id: "201", name: "Embeta xr 25", brand: "", inStock: true }



  ];

  // Filter products based on search query
  const filteredProducts = allProducts.filter((product) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.brand.toLowerCase().includes(searchLower)
    );
  });

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
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
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

        {/* Search/Filter Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search by product name or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-base border-2 border-border/50 rounded-2xl bg-card/50 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          {/* Results count */}
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              {searchQuery ? (
                <>
                  Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> of{" "}
                  <span className="font-semibold text-foreground">{allProducts.length}</span> products
                </>
              ) : (
                <>
                  <span className="font-semibold text-foreground">{allProducts.length}</span> products available
                </>
              )}
            </p>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const quantity = getCartItemQuantity(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-card/50 border-2 border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all p-5 hover:shadow-lg"
                >
                  <p className="text-xs text-primary/70 font-semibold mb-1 uppercase">
                    {product.brand || "Generic"}
                  </p>
                  <h4 className="font-bold text-base mb-4 text-foreground">
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
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No products found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms
            </p>
            <Button
              variant="outline"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          </div>
        )}
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
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Brand: {item.brand}
                      </p>
                      <p className="text-sm">Qty: {item.quantity}</p>
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