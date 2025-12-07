"use client";

export function StatsSection() {
  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "< 3s", label: "Avg Response Time" },
    { value: "10M+", label: "Screenshots Generated" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="animate-fade-in">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              {stat.value}
            </div>
            <div className="text-blue-100 text-sm md:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

