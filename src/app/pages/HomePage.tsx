import { Link } from "react-router";
import { Dumbbell, Target, Award, Users } from "lucide-react";
import { motion } from "motion/react";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/assets/hero-background.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.06),transparent_34%)]" />
        </div>

        <div className="relative z-10 grid w-full max-w-7xl mx-auto grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-left"
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur md:text-sm">
              Manula D Fitness Coaching
            </div>
            <h1 className="mb-6 max-w-4xl text-5xl font-black uppercase leading-none tracking-normal text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
              Transform
              <span className="block text-primary">
                Your Body
              </span>
            </h1>
            <p className="mb-9 max-w-2xl border-l-4 border-primary pl-5 text-lg font-medium leading-8 text-white/90 md:text-xl">
              Build a stronger physique, healthier habits, and lasting confidence through science-based training and personalized nutrition.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-medium text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Book Training
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                View Programs
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto h-[480px] w-full max-w-md -translate-y-4 sm:h-[580px] sm:max-w-lg md:h-[680px] md:max-w-xl lg:h-[830px] lg:max-w-none lg:-translate-y-12"
          >
            <div className="absolute -inset-8 bg-primary/15 blur-3xl" />
            <div className="relative h-full overflow-visible">
              <img
                src="/assets/hero-trainer.png"
                alt="Personal trainer workout"
                className="mx-auto h-full w-auto max-w-full object-contain drop-shadow-2xl lg:ml-auto lg:max-w-none"
              />
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-36 sm:h-44 lg:h-56" aria-hidden="true">
          <div
            className="absolute inset-x-0 bottom-0 h-28 bg-black/95 shadow-2xl shadow-red-950/20 backdrop-blur-sm sm:h-32 lg:h-40"
            style={{ clipPath: "polygon(0 44%, 100% 6%, 100% 100%, 0 100%)" }}
          />
          <div
            className="absolute inset-x-0 bottom-12 h-20 bg-gradient-to-r from-black/85 via-red-950/45 to-orange-950/30 sm:bottom-14 sm:h-24 lg:bottom-18 lg:h-32"
            style={{ clipPath: "polygon(0 52%, 100% 12%, 100% 100%, 0 100%)" }}
          />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Dumbbell, label: "8+ Years", sublabel: "Training Experience" },
              { icon: Users, label: "5+ Years", sublabel: "Coaching" },
              { icon: Target, label: "8+ Years", sublabel: "Natural Athlete" },
              { icon: Award, label: "NASM", sublabel: "Certified Trainer" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl mb-2">{stat.label}</h3>
                <p className="text-white/60">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Why Choose <span className="text-primary">Manula D</span></h2>
            <p className="text-white/60 text-xl">Smart coaching for real, sustainable transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Plans",
                description: "Custom workout and nutrition plans tailored to your goals, lifestyle, and current fitness level",
                image: "https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Expert Guidance",
                description: "Certified coaching supported by 8+ years of natural bodybuilding and physique development experience",
                image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Real Results",
                description: "A results-driven system built on consistency, discipline, accountability, and science-based training",
                image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Z3ltJTIwdHJhaW5lciUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc3ODgzNzg3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <h3 className="text-2xl mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Start Your <span className="text-primary">Journey</span>?</h2>
          <p className="text-white/60 text-xl mb-8">
            Start with structured coaching that removes confusion and helps you build powerful natural results.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
