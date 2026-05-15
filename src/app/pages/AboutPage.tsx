import { CheckCircle2, Award, Target, Heart } from "lucide-react";
import { motion } from "motion/react";

export function AboutPage() {
  const certifications = [
    "NASM Certified Personal Trainer",
    "Sports Nutrition Specialist",
    "Corrective Exercise Specialist",
    "Olympic Weightlifting Coach",
    "Crossfit Level 2 Trainer",
    "Yoga Alliance RYT-200",
  ];

  const skills = [
    { icon: Target, label: "Goal Setting", desc: "Strategic planning for sustainable results" },
    { icon: Heart, label: "Motivation", desc: "Inspiring clients to push beyond limits" },
    { icon: Award, label: "Expertise", desc: "10+ years of professional experience" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1641337221253-fdc7237f6b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">About <span className="text-primary">Me</span></h1>
          <p className="text-xl text-white/80">Your Partner in Fitness Excellence</p>
        </div>
      </section>

      <section className="py-20 theme-section-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1604480133435-25b86862d276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Trainer"
                className="rounded-xl w-full h-[600px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl mb-6">My <span className="text-primary">Story</span></h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                I am a professional gym trainer helping people build strength, lose weight, and improve their lifestyle through personalized fitness plans.
              </p>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                My fitness journey began over 10 years ago when I transformed my own life through dedication and proper training. Since then, I've dedicated my career to helping others achieve their fitness goals and unlock their full potential.
              </p>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                With expertise in strength training, weight loss, muscle building, and nutrition, I create customized programs that deliver real, sustainable results. Every client is unique, and I believe in tailoring each plan to individual needs and goals.
              </p>

              <div className="space-y-3">
                {["10+ Years of Training Experience", "500+ Successful Transformations", "Certified in Multiple Disciplines"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 theme-section-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Special <span className="text-primary">Skills</span></h2>
            <p className="text-white/60 text-xl">What sets me apart from the rest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl mb-3">{skill.label}</h3>
                <p className="text-white/60">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 theme-section-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4"><span className="text-primary">Certifications</span> & Credentials</h2>
            <p className="text-white/60 text-xl">Professionally certified and continuously learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-all"
              >
                <Award className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-lg">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
