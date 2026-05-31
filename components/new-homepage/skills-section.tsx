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
    <section
      id="skills"
      className="relative bg-[#F5E6D3] py-16 sm:py-24"
      style={{
        backgroundImage: "url(/skills-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="mb-2 text-sm uppercase tracking-wider text-[#BE5F47]">
              SKILLS
            </p>
            <h2 className="mb-5 font-['Modern_Antiqua'] text-4xl leading-tight text-gray-900 sm:text-5xl">
              Technologies{" "}
              <span className="text-[#BE5F47]">I work with</span>
            </h2>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              I use modern tools and technologies to build scalable,
              high-performance web applications and deliver great user
              experiences.
            </p>

            <div className="mt-8 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-white">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-[#BE5F47]"
              />
            </div>
          </motion.div>
        </div>

        <div className="space-y-6 pb-24 lg:space-y-8 lg:pb-40">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="sticky rounded-2xl border border-[#BE5F47]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              style={{
                top: `calc(6rem + ${index * 12}px)`,
                zIndex: index + 1,
              }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-[#FFE8DC]">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h3 className="font-['Modern_Antiqua'] text-xl font-semibold text-gray-900 sm:text-2xl">
                      {skill.title}
                    </h3>
                    <span className="hidden font-['Modern_Antiqua'] text-3xl text-[#BE5F47]/25 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="font-['Modern_Antiqua'] text-sm leading-relaxed text-gray-600 sm:text-base">
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
