"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  ShoppingCart, 
  BarChart3, 
  Shield, 
  Mail, 
  Monitor 
} from "lucide-react";

export function UseCasesSection() {
  const useCases = [
    {
      icon: FileText,
      title: "Documentation",
      description: "Generate visual documentation and tutorials with live website screenshots.",
      color: "text-blue-600",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Create product previews, catalog images, and marketing materials automatically.",
      color: "text-green-600",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Capture dashboards, reports, and data visualizations for presentations.",
      color: "text-purple-600",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Archive website states for legal compliance and security audits.",
      color: "text-red-600",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Generate email previews and social media thumbnails automatically.",
      color: "text-orange-600",
    },
    {
      icon: Monitor,
      title: "Testing & QA",
      description: "Visual regression testing and cross-browser compatibility checks.",
      color: "text-indigo-600",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Use Cases</h2>
        <p className="text-xl text-gray-600">
          Perfect for developers, marketers, and businesses of all sizes
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Icon className={`h-10 w-10 mb-2 ${useCase.color}`} />
                <CardTitle>{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

