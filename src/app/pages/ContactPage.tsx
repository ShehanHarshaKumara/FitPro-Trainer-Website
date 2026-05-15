import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@fitpro.com",
      link: "mailto:info@fitpro.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "123 Fitness St, Gym City, GC 12345",
      link: "#",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/15551234567",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl mb-4">Get In <span className="text-primary">Touch</span></h1>
          <p className="text-xl text-white/80">Let's start your fitness journey together</p>
        </div>
      </section>

      <section className="py-20 theme-section-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl mb-6">Let's Talk About Your <span className="text-primary">Goals</span></h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Ready to transform your life? Fill out the form and I'll get back to you within 24 hours to schedule your free consultation session.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all group"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">{item.label}</p>
                      <p className="text-lg">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-xl border border-primary/30">
                <h3 className="text-xl mb-3">Free Consultation</h3>
                <p className="text-white/70">
                  Book your free 30-minute consultation session to discuss your fitness goals and find the perfect program for you.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white/5 rounded-xl border border-white/10 p-8">
                <h3 className="text-2xl mb-6">Send Me a Message</h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-white/80">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-white/80">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-white/80">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-white/80">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your fitness goals and what you're looking to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary hover:bg-primary/90 rounded-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 theme-section-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Visit Our <span className="text-primary">Gym</span></h2>
            <p className="text-white/60 text-xl">Located in the heart of the city</p>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxneW0lMjB0cmFpbmVyJTIwZml0bmVzcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc4ODM3ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Gym Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 inline-block">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-xl">FitPro Training Studio</h3>
                </div>
                <p className="text-white/80">123 Fitness Street, Gym City, GC 12345</p>
                <p className="text-white/60 mt-2">Open Monday - Saturday: 6:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
