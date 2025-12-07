"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      company: "TechStart Inc.",
      content:
        "Screenshot API has been a game-changer for our documentation workflow. Fast, reliable, and incredibly easy to integrate.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      content:
        "We generate thousands of screenshots monthly for our email campaigns. The API handles everything seamlessly.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "DataViz",
      content:
        "The quality and speed are unmatched. Our team loves how simple it is to use. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-xl text-gray-600">
          Trusted by developers and businesses worldwide
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

