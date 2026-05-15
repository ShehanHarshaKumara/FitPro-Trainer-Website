import { Check, Zap, Crown, Target } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

export function PricingPage() {
  const plans = [
    {
      icon: Target,
      name: "Monthly Plan",
      price: "$199",
      period: "per month",
      description: "Perfect for getting started with professional training",
      features: [
        "4 personal training sessions/month",
        "Custom workout plan",
        "Nutrition guidance",
        "Progress tracking",
        "Email support",
        "Access to training app",
      ],
      popular: false,
    },
    {
      icon: Zap,
      name: "Personal Training Plan",
      price: "$349",
      period: "per month",
      description: "Most popular choice for serious fitness goals",
      features: [
        "8 personal training sessions/month",
        "Custom workout & meal plans",
        "Weekly progress check-ins",
        "Body composition analysis",
        "Priority email & text support",
        "Access to all programs",
        "Supplement recommendations",
      ],
      popular: true,
    },
    {
      icon: Crown,
      name: "Premium Fitness Package",
      price: "$599",
      period: "per month",
      description: "Ultimate package for complete transformation",
      features: [
        "12 personal training sessions/month",
        "Fully customized programs",
        "Daily check-ins & support",
        "Monthly body composition tests",
        "24/7 priority support",
        "Access to all programs",
        "Custom supplement plan",
        "Meal prep guidance",
        "Free merchandise",
      ],
      popular: false,
    },
  ];

  const onlinePlan = {
    icon: Target,
    name: "Online Coaching Plan",
    price: "$129",
    period: "per month",
    description: "Train anywhere with remote coaching",
    features: [
      "Custom workout program",
      "Video form analysis",
      "Weekly video check-ins",
      "Custom meal plans",
      "App-based tracking",
      "Email & chat support",
      "Global availability",
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604480133435-25b86862d276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Pricing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">Pricing <span className="text-primary">Plans</span></h1>
          <p className="text-xl text-white/80">Invest in yourself and achieve your goals</p>
        </div>
      </section>

      <section className="py-20 theme-section-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Choose Your <span className="text-primary">Plan</span></h2>
            <p className="text-white/60 text-xl">Flexible options to fit your schedule and budget</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 rounded-xl border ${
                  plan.popular ? "border-primary" : "border-white/10"
                } p-8 hover:border-primary/50 transition-all ${
                  plan.popular ? "lg:-mt-4 lg:mb-4" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary rounded-full">
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <plan.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className="text-white/60 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl">{plan.price}</span>
                  <span className="text-white/60 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center px-6 py-4 rounded-lg transition-all ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-xl border border-primary/30 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-lg mb-4">
                  <onlinePlan.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl mb-2">{onlinePlan.name}</h3>
                <p className="text-white/60 mb-4">{onlinePlan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl text-primary">{onlinePlan.price}</span>
                  <span className="text-white/60 ml-2">{onlinePlan.period}</span>
                </div>
                <ul className="space-y-2">
                  {onlinePlan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg transition-all whitespace-nowrap"
                >
                  Start Online
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 theme-section-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-8">All Plans Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "No long-term contracts",
              "Cancel anytime",
              "First session satisfaction guarantee",
              "Flexible rescheduling",
              "Access to training resources",
              "Community support group",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
