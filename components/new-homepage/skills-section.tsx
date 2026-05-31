"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skillsData = [
  {
    image: "/service/frontend.svg",
    title: "Frontend",
    skills:
      "React.js, Next.js, Redux, Tailwind CSS, ShadCN, Styled-components, Framer-motion",
  },
  {
    image: "/service/mobile-app-phone.svg",
    title: "Mobile Development",
    skills: "React Native, Expo, Mobile UI/UX, Cross-platform Development",
  },
  {
    image: "/service/backend.svg",
    title: "Backend",
    skills: "Node.js, Express.js, Nest.js, REST API, Prisma, JWT, Mongoose",
  },
  {
    image: "/service/language.svg",
    title: "Language",
    skills: "JavaScript (ES6+), TypeScript",
  },
  {
    image: "/service/database-svgrepo-com.svg",
    title: "Database",
    skills: "MongoDB, PostgreSQL",
  },
  {
    image: "/service/clouded-cloud-svgrepo-com.svg",
    title: "Cloud & Tools",
    skills:
      "AWS S3, Firebase, Supabase, Git, GitHub, GitLab, Postman, VS Code, Vercel, Netlify",
  },
  {
    image: "/service/payment-method.svg",
    title: "Payment Integration",
    skills: "PayPal, Razorpay, Stripe, SSLCommerz",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#F5E6D3] relative overflow-hidden" style={{ backgroundImage: "url(/skills-bg.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#BE5F47] uppercase tracking-wider text-sm mb-2">
            SKILLS
          </p>
          <h2 className="text-4xl sm:text-5xl font-['Modern_Antiqua'] text-gray-900 mb-4">
            Technologies <span className="text-[#BE5F47]">I work with</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I use modern tools and technologies to build scalable,
            high-performance web applications and deliver great user
            experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${index === skillsData.length - 1 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="bg-[#FFE8DC] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Modern_Antiqua']">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-['Modern_Antiqua']">
                    {skill.skills}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
