import { CheckCircle2, Award, Target, Heart } from "lucide-react";
import { motion } from "motion/react";

export function AboutPage() {
  const certifications = [
    "NASM Certified Personal Trainer",
    "8+ Years as a Natural Bodybuilding Athlete",
    "5+ Years of Professional Fitness Coaching",
    "Evidence-Based Training & Physique Development",
  ];

  const skills = [
    { icon: Target, label: "Personalized Coaching", desc: "Structured workout and nutrition guidance built around each client's goal" },
    { icon: Heart, label: "Accountability", desc: "Consistent progress tracking, support, and practical habit building" },
    { icon: Award, label: "Natural Physique Expertise", desc: "Real-world bodybuilding experience applied through science-based programming" },
  ];

  const coachingSkills = [
    "Personalized Fitness Coaching",
    "Strength & Hypertrophy Programming",
    "Fat Loss Coaching",
    "Body Recomposition Strategies",
    "Customized Nutrition Planning",
    "Progressive Overload Programming",
    "Exercise Technique Correction",
    "Client Progress Tracking",
    "Transformation Coaching",
    "Online & Onsite Personal Training",
    "Accountability Coaching",
    "Natural Bodybuilding Guidance",
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
          <p className="text-xl text-white/80">Science-based coaching for natural, lasting transformation</p>
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
                I'm Manula D, a dedicated fitness coach and natural bodybuilding athlete with 8+ years of experience in training, physique development, and fitness transformation.
              </p>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                My journey began with a passion for understanding how proper training, nutrition, and consistency can naturally transform the body. Over the years, that passion developed into a professional coaching career focused on helping people achieve real results through structured, personalized guidance.
              </p>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                I specialize in fat loss, muscle building, body recomposition, customized nutrition planning, and performance improvement. My approach is built on science-based training principles, progressive overload, discipline, and long-term sustainability.
              </p>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                My mission is to simplify fitness, remove confusion, and help every client build a stronger body, healthier habits, greater confidence, and a stronger mindset through professional coaching and accountability.
              </p>

              <div className="space-y-3">
                {["8+ Years Natural Bodybuilding Experience", "5+ Years Professional Coaching Experience", "Customized Training & Nutrition Systems"].map((item, index) => (
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
            <p className="text-white/60 text-xl">Coaching built for real-world transformation</p>
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
            <p className="text-white/60 text-xl">Professional credentials backed by years of practical training experience</p>
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

          <div className="mt-10 text-center">
            <a
              href="https://credentials.nasm.org/a7b9b554-45ff-4613-ab11-8ac65fb5dad1?utm_source=tiktok&utm_medium=social"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-medium text-white transition-all hover:bg-primary/90"
            >
              View NASM Credential
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 theme-section-red">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Coaching <span className="text-primary">Expertise</span></h2>
            <p className="text-white/60 text-xl">The core skills behind every transformation plan</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coachingSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
