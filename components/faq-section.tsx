"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How fast is the API?",
      answer:
        "Our API typically responds in 2-3 seconds for standard screenshots. Full-page captures may take 5-10 seconds depending on page complexity. We use optimized infrastructure to ensure fast response times.",
    },
    {
      question: "What image formats are supported?",
      answer:
        "We support PNG, JPEG, and WebP formats. PNG is recommended for high-quality screenshots, JPEG for smaller file sizes, and WebP for modern web applications.",
    },
    {
      question: "Can I capture full-page screenshots?",
      answer:
        "Yes! Our API supports full-page screenshots that automatically scroll and capture the entire page, regardless of length. This is available on all paid plans.",
    },
    {
      question: "Is there rate limiting?",
      answer:
        "Yes, rate limiting is applied based on your plan to ensure fair usage. Free plan: 100 requests/month, Starter: 5,000/month, Pro: 25,000/month, Business: 100,000/month. Additional requests can be purchased.",
    },
    {
      question: "How do I get started?",
      answer:
        "Sign up for a free account, get your API key, and start making requests. Our documentation includes code examples in multiple languages to help you get started quickly.",
    },
    {
      question: "Do you offer webhooks?",
      answer:
        "Yes! Webhooks are available on Starter plans and above. You can configure webhooks to receive notifications when screenshots are ready, making it perfect for asynchronous workflows.",
    },
    {
      question: "What about security and privacy?",
      answer:
        "All API requests are encrypted with HTTPS. API keys are required for authentication. We don't store or log the content of screenshots. Your data is secure and private.",
    },
    {
      question: "Can I use this for commercial purposes?",
      answer:
        "Absolutely! All plans allow commercial use. Make sure to review our Terms of Service for specific usage guidelines and restrictions.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600">
          Everything you need to know about our API
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

