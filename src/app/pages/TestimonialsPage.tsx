import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Weight Loss Client",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      text: "Working with FitPro was life-changing! I lost 30 lbs in 3 months and gained so much confidence. The personalized meal plans and training sessions were exactly what I needed. I've never felt stronger or healthier!",
      result: "Lost 30 lbs in 3 months",
    },
    {
      name: "Michael Chen",
      role: "Muscle Building Client",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      text: "I've tried multiple trainers before, but FitPro really knows their stuff. The muscle gain program helped me pack on 15 lbs of lean muscle in 4 months. The progressive overload approach works wonders!",
      result: "Gained 15 lbs of muscle",
    },
    {
      name: "Emily Rodriguez",
      role: "Beginner Client",
      image: "https://images.unsplash.com/photo-1596357395217-80de13130e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      text: "As a complete beginner, I was intimidated by the gym. FitPro made everything easy to understand and never made me feel judged. Now I actually look forward to my workouts! Best decision ever.",
      result: "Went from zero to hero",
    },
    {
      name: "David Thompson",
      role: "Online Coaching Client",
      image: "https://images.unsplash.com/photo-1641337221253-fdc7237f6b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      text: "The online coaching program exceeded my expectations. Even remotely, FitPro provided excellent guidance and accountability. The app tracking made everything seamless. Highly recommend for busy professionals!",
      result: "Lost 20 lbs remotely",
    },
    {
      name: "Jessica Martinez",
      role: "Transformation Client",
      image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      text: "After having my second child, I struggled to get back in shape. FitPro's customized program worked around my schedule and limitations. Six months later, I'm in the best shape of my life! Thank you!",
      result: "Complete body transformation",
    },
    {
      name: "Robert Anderson",
      role: "Strength Training Client",
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      text: "I wanted to compete in powerlifting and needed expert guidance. FitPro's strength program got me ready for my first competition. I PR'd all my lifts! Couldn't have done it without this amazing trainer.",
      result: "Competition ready in 12 weeks",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Z3ltJTIwdHJhaW5lciUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc3ODgzNzg3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Testimonials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">Client <span className="text-primary">Testimonials</span></h1>
          <p className="text-xl text-white/80">Success stories from satisfied clients</p>
        </div>
      </section>

      <section className="py-20 theme-section-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl border border-white/10 p-8 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{testimonial.name}</h3>
                    <p className="text-white/60 mb-2">{testimonial.role}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                <p className="text-white/80 leading-relaxed mb-6">"{testimonial.text}"</p>

                <div className="pt-4 border-t border-white/10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-primary">{testimonial.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 theme-section-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="text-5xl mb-4 text-primary">500+</div>
              <p className="text-white/60">Satisfied Clients</p>
            </div>
            <div className="p-8">
              <div className="text-5xl mb-4 text-primary">4.9/5</div>
              <p className="text-white/60">Average Rating</p>
            </div>
            <div className="p-8">
              <div className="text-5xl mb-4 text-primary">95%</div>
              <p className="text-white/60">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
