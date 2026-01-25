const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1,000+", label: "Companies Formed" },
  { value: "40+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-border/50">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Trust statement */}
          <p className="text-muted-foreground text-center md:text-left">
            <span className="font-semibold text-primary">Bootstrapped & Founder-Led</span>
            <span className="hidden sm:inline"> — Helping entrepreneurs succeed since 2014</span>
          </p>

          {/* Stats - text only, separated */}
          <div className="flex items-center gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-10 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
