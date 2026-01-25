import { Building2, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: Building2, value: "1,000+", label: "Companies Formed" },
  { icon: Users, value: "500+", label: "Active Clients" },
  { icon: Globe, value: "40+", label: "Countries Served" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-border">
      <div className="container py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Trust statement */}
          <div className="text-center lg:text-left">
            <p className="text-lg font-semibold text-primary">
              Bootstrapped. Founder-Led. Trusted Since 2014.
            </p>
            <p className="text-muted-foreground text-sm">
              Helping entrepreneurs succeed in the Kingdom of Bahrain
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
