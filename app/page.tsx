"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MobileNav } from "@/components/mobile-nav";
import { DemoSection } from "@/components/demo-section";
import { StatsSection } from "@/components/stats-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      requests: "100",
      features: [
        "100 requests/month",
        "Basic screenshots",
        "Watermark included",
        "Community support",
      ],
      popular: false,
    },
    {
      name: "Starter",
      price: "$19",
      period: "month",
      requests: "5,000",
      features: [
        "5,000 requests/month",
        "Full page screenshots",
        "No watermark",
        "Webhook support",
        "Email support",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "$49",
      period: "month",
      requests: "25,000",
      features: [
        "25,000 requests/month",
        "Custom CSS injection",
        "Element selector",
        "Geolocation support",
        "Priority queue",
        "Priority support",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "$149",
      period: "month",
      requests: "100,000",
      features: [
        "100,000 requests/month",
        "All Pro features",
        "Custom fonts",
        "Dedicated support",
        "SLA guarantee",
        "Custom integrations",
      ],
      popular: false,
    },
  ];

  const features = [
    {
      title: "Lightning Fast",
      description: "Render screenshots in seconds with our optimized infrastructure",
      icon: "⚡",
    },
    {
      title: "High Quality",
      description: "Crystal clear screenshots and PDFs with full page capture support",
      icon: "🎨",
    },
    {
      title: "Developer Friendly",
      description: "RESTful API with comprehensive documentation and code examples",
      icon: "💻",
    },
    {
      title: "Scalable",
      description: "Handle millions of requests with our auto-scaling infrastructure",
      icon: "📈",
    },
    {
      title: "Secure",
      description: "Enterprise-grade security with API keys and rate limiting",
      icon: "🔒",
    },
    {
      title: "Reliable",
      description: "99.9% uptime SLA with automatic retries and error handling",
      icon: "✅",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Screenshot API
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQ
            </a>
            <Button variant="outline" asChild>
              <a href="/docs">Documentation</a>
            </Button>
            <Button asChild>
              <a href="#waitlist">Get Started</a>
            </Button>
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4 animate-fade-in" variant="secondary">
          🚀 Coming Soon
        </Badge>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
          Professional Screenshot & PDF API
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform any URL into high-quality screenshots or PDFs. Fast, reliable,
          and built for developers who demand excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild className="group">
            <a href="#waitlist">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#demo">Try Demo</a>
          </Button>
        </div>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 text-gray-700">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span>2-3 second response time</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span>99.9% uptime SLA</span>
          </div>
        </div>

        {/* Code Example */}
        <div className="max-w-3xl mx-auto mt-12 animate-fade-in">
          <Card className="bg-gray-900 text-gray-100 border-gray-800 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-left text-sm font-mono flex items-center gap-2">
                <span className="text-green-400">$</span>
                Simple API Call
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-left text-sm overflow-x-auto font-mono">
                <code className="text-gray-300">{`curl -X POST https://api.screenshot.example.com/v1/render/screenshot \\
  -H "X-API-Key: sk_live_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com",
    "width": 1920,
    "height": 1080,
    "format": "png"
  }'`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Demo Section */}
      <section id="demo">
        <DemoSection />
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-600">
            Powerful features to meet all your screenshot and PDF needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200"
            >
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases">
        <UseCasesSection />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-lg scale-105"
                  : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2">
                  {plan.requests} requests/month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === "Free" ? "Get Started" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="container mx-auto px-4 py-20">
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">
              Get Early Access
            </CardTitle>
            <CardDescription className="text-lg">
              Be the first to know when we launch. Join our waitlist and get
              exclusive early access.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🎉</div>
                <p className="text-lg font-semibold text-green-600">
                  Thanks for joining!
                </p>
                <p className="text-gray-600 mt-2">
                  We'll notify you as soon as we launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Screenshot API
              </h3>
              <p className="text-gray-600 text-sm">
                Professional screenshot and PDF generation API for developers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#features" className="hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/docs" className="hover:text-gray-900">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-gray-600">
            © 2024 Screenshot API. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
