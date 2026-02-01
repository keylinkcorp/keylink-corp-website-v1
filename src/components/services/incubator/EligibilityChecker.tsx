import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Rocket, 
  Target, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  RotateCcw,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: "company",
    question: "Do you have a registered company in Bahrain?",
    icon: Building2,
    options: [
      { value: "yes", label: "Yes, already registered" },
      { value: "inProgress", label: "In progress" },
      { value: "no", label: "Not yet" }
    ]
  },
  {
    id: "stage",
    question: "What stage is your startup?",
    icon: Rocket,
    options: [
      { value: "idea", label: "Idea / Concept" },
      { value: "mvp", label: "MVP / Early Traction" },
      { value: "revenue", label: "Revenue Generating" }
    ]
  },
  {
    id: "industry",
    question: "What's your industry focus?",
    icon: Target,
    options: [
      { value: "fintech", label: "FinTech / Financial Services" },
      { value: "tech", label: "Tech / Software" },
      { value: "other", label: "Other Industries" }
    ]
  },
  {
    id: "founder",
    question: "Are you a Bahraini national or foreign entrepreneur?",
    icon: Globe,
    options: [
      { value: "bahraini", label: "Bahraini National" },
      { value: "gcc", label: "GCC National" },
      { value: "foreign", label: "International / Foreign" }
    ]
  }
];

interface ProgramRecommendation {
  name: string;
  match: "high" | "medium" | "low";
  reason: string;
}

function getRecommendations(answers: Record<string, string>): ProgramRecommendation[] {
  const recommendations: ProgramRecommendation[] = [];

  // Tamkeen Logic
  let tamkeenMatch: "high" | "medium" | "low" = "medium";
  let tamkeenReason = "Good fit for general business support";
  
  if (answers.stage === "idea" || answers.stage === "mvp") {
    tamkeenMatch = "high";
    tamkeenReason = "Ideal for early-stage startups with non-dilutive grants";
  }
  if (answers.company === "no" && (answers.founder === "foreign" || answers.founder === "gcc")) {
    tamkeenReason += " — We'll handle company formation first";
  }
  
  recommendations.push({
    name: "Tamkeen Startup Support",
    match: tamkeenMatch,
    reason: tamkeenReason
  });

  // FinTech Bay Logic
  if (answers.industry === "fintech") {
    let fintechMatch: "high" | "medium" = "high";
    let fintechReason = "Perfect match for financial technology startups";
    
    if (answers.stage === "idea") {
      fintechMatch = "medium";
      fintechReason = "Consider building MVP first for stronger application";
    }
    
    recommendations.push({
      name: "FinTech Bay Accelerator",
      match: fintechMatch,
      reason: fintechReason
    });
  }

  // C5 Accelerate Logic
  if (answers.industry === "tech" || answers.industry === "fintech") {
    let c5Match: "high" | "medium" = "medium";
    let c5Reason = "Good for scalable tech businesses";
    
    if (answers.stage === "revenue") {
      c5Match = "high";
      c5Reason = "Ideal for growth-stage startups seeking investors";
    }
    
    recommendations.push({
      name: "C5 Accelerate",
      match: c5Match,
      reason: c5Reason
    });
  }

  return recommendations.sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return order[a.match] - order[b.match];
  });
}

export function EligibilityChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const recommendations = showResults ? getRecommendations(answers) : [];
  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, hsl(var(--gold)) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, hsl(var(--gold)) 0%, transparent 30%)
          `
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-medium mb-6">
            Quick Check
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Are You Eligible for Bahrain's Incubator Programs?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Answer 4 quick questions to see which programs match your profile.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Question {currentStep + 1} of {questions.length}</span>
                      <span>{Math.round(progress)}% complete</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <currentQuestion.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {currentQuestion.question}
                    </h3>
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(currentQuestion.id, option.value)}
                        className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                          answers[currentQuestion.id] === option.value
                            ? "border-accent bg-accent/5"
                            : "border-border hover:border-accent/50 hover:bg-secondary/30"
                        }`}
                      >
                        <span className="font-medium text-foreground">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Results Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Your Program Matches
                    </h3>
                    <p className="text-muted-foreground">
                      Based on your answers, here are our recommendations:
                    </p>
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-4 mb-8">
                    {recommendations.map((rec, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-xl border-2 ${
                          rec.match === "high" 
                            ? "border-accent bg-accent/5" 
                            : "border-border"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-foreground">{rec.name}</h4>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            rec.match === "high" 
                              ? "bg-accent/20 text-accent" 
                              : "bg-secondary text-muted-foreground"
                          }`}>
                            {rec.match === "high" ? "High Match" : "Good Fit"}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{rec.reason}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <Button 
                      asChild 
                      className="w-full btn-gold py-6"
                    >
                      <a 
                        href="https://wa.me/97317000000?text=Hi%2C%20I%20just%20completed%20the%20eligibility%20quiz%20and%20would%20like%20to%20discuss%20my%20results."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Get Your Personalized Roadmap
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={resetQuiz}
                    >
                      <RotateCcw className="w-4 h-4" />
                      Start Over
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
