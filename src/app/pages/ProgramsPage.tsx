import { Clock, Users, TrendingUp, Home, Dumbbell, Target } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

export function ProgramsPage() {
  const programs = [
    {
      icon: TrendingUp,
      title: "Fat Loss Transformation Program",
      duration: "12 Weeks",
      level: "All Levels",
      description: "Structured plan focused on reducing body fat while maintaining lean muscle through progressive training and nutrition control.",
      features: [
        "Progressive strength training",
        "Fat loss nutrition strategy",
        "Body composition tracking",
        "Weekly accountability",
        "Cardio guidance",
        "Sustainable habit building",
      ],
      image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Dumbbell,
      title: "Muscle Building Program",
      duration: "16 Weeks",
      level: "Intermediate",
      description: "Hypertrophy-based training system designed to increase muscle size, strength, and overall physique development.",
      features: [
        "Hypertrophy-focused splits",
        "Progressive overload system",
        "Compound movement focus",
        "Recovery management",
        "Nutrition for lean mass",
        "Exercise technique refinement",
      ],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Target,
      title: "Body Recomposition Program",
      duration: "12 Weeks",
      level: "All Levels",
      description: "Balanced approach to simultaneously build muscle and reduce fat with strategic training and nutrition.",
      features: [
        "Strength and hypertrophy blend",
        "Nutrition periodization",
        "Body measurements tracking",
        "Goal-based adjustments",
        "Consistency systems",
        "Technique coaching",
      ],
      image: "https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Clock,
      title: "Strength & Performance Program",
      duration: "12 Weeks",
      level: "Intermediate",
      description: "Focused on improving overall strength, power, and athletic performance using compound lifts and progressive overload.",
      features: [
        "Compound lift progression",
        "Strength testing",
        "Performance tracking",
        "Mobility support",
        "Recovery planning",
        "Training intensity control",
      ],
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Users,
      title: "Beginner Foundation Program",
      duration: "8 Weeks",
      level: "Beginner",
      description: "Step-by-step introduction to proper training techniques, movement patterns, and fitness fundamentals.",
      features: [
        "Exercise technique basics",
        "Full-body training",
        "Movement pattern coaching",
        "Nutrition foundations",
        "Confidence building",
        "Simple progress tracking",
      ],
      image: "https://images.unsplash.com/photo-1596357395217-80de13130e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Home,
      title: "Home Workout Program",
      duration: "10 Weeks",
      level: "All Levels",
      description: "Effective training plan using minimal or no equipment, designed for consistency, fat loss, or maintenance.",
      features: [
        "Minimal equipment options",
        "Bodyweight progressions",
        "Flexible scheduling",
        "Space-efficient workouts",
        "Fat loss or maintenance focus",
        "Remote support",
      ],
      image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Z3ltJTIwdHJhaW5lciUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc3ODgzNzg3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">Training <span className="text-primary">Programs</span></h1>
          <p className="text-xl text-white/80">Structured systems for natural results and long-term progress</p>
        </div>
      </section>

      <section className="py-20 theme-section-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary px-4 py-2 rounded-lg">
                    <span>{program.level}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 backdrop-blur-sm rounded-lg">
                      <program.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl">{program.title}</h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                  </div>
                  <p className="text-white/70 mb-6">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
