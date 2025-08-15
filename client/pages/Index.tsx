import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-brand-100 pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-brand-100 text-brand-800 hover:bg-brand-200"
                >
                  Premium Men's Fashion
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  Elevate Your
                  <span className="block text-brand-600">Style Journey</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                  Discover premium menswear crafted for the modern gentleman.
                  From Karachi to the world, ECOGLOW represents sophistication
                  and style.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-6 text-lg"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-300 text-brand-700 hover:bg-brand-50 px-8 py-6 text-lg"
                >
                  View Lookbook
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    4.9/5 (2,341 reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center space-y-4 text-gray-500">
                    <div className="w-16 h-16 mx-auto bg-brand-100 rounded-full flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-brand-600"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 22 12 18.27 5.82 22 7 13.87 2 9l6.91-.74L12 2z" />
                      </svg>
                    </div>
                    <p className="font-medium">Premium Menswear Collection</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">In Stock</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-600">500+</div>
                  <div className="text-xs text-muted-foreground">
                    Happy Customers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-brand-100 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-semibold text-foreground">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Free delivery on orders over PKR 5,000
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-brand-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-semibold text-foreground">
                Quality Guarantee
              </h3>
              <p className="text-sm text-muted-foreground">
                Premium materials with lifetime warranty
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-brand-100 rounded-full flex items-center justify-center">
                <Headphones className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-semibold text-foreground">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Expert styling advice anytime
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-brand-100 rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-semibold text-foreground">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">
                30-day hassle-free returns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collections designed for the modern
              Pakistani gentleman
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Formal Wear */}
            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="text-white text-center space-y-2">
                      <h3 className="text-xl font-semibold">Formal Wear</h3>
                      <p className="text-sm opacity-90">
                        Professional & Elegant
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Formal Collection
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        From PKR 8,999
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-brand-600 hover:text-brand-700 hover:bg-brand-50"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Casual Wear */}
            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="text-white text-center space-y-2">
                      <h3 className="text-xl font-semibold">Casual Wear</h3>
                      <p className="text-sm opacity-90">Comfort & Style</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Casual Collection
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        From PKR 3,999
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-brand-600 hover:text-brand-700 hover:bg-brand-50"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Traditional Wear */}
            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-amber-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="text-white text-center space-y-2">
                      <h3 className="text-xl font-semibold">Traditional</h3>
                      <p className="text-sm opacity-90">Cultural Heritage</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Traditional Collection
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        From PKR 12,999
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-brand-600 hover:text-brand-700 hover:bg-brand-50"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-brand-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Wardrobe?
            </h2>
            <p className="text-lg text-brand-100">
              Join thousands of satisfied customers who trust ECOGLOW for their
              fashion needs. Experience the perfect blend of style, comfort, and
              quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-600 px-8 py-6 text-lg"
              >
                Visit Store
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
