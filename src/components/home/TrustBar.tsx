import { Building2, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: Building2, value: "1,000+", label: "Companies Formed" },
  { icon: Users, value: "500+", label: "Active Clients" },
  { icon: Globe, value: "40+", label: "Countries Served" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

export function TrustBar() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Trust statement */}
          <div className="text-center md:text-left">
            <p className="text-lg font-medium text-gold">
              Bootstrapped. Founder-Led. Trusted Since 2014.
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Helping entrepreneurs succeed in the Kingdom of Bahrain
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gold/10">
                  <stat.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
