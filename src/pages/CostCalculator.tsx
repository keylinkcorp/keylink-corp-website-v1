import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { FormationCostCalculator } from "@/components/services/formation/FormationCostCalculator";

export default function CostCalculator() {
  useEffect(() => {
    document.title = "Company Formation Cost Calculator Bahrain 2026 | Keylink";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Free Bahrain company formation cost calculator. Estimate setup fees, office options, and visas in minutes."
      );
    }
  }, []);

  return (
    <Layout>
      <FormationCostCalculator />
    </Layout>
  );
}
