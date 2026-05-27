"use client";

const techs = [
  { src: "/techlogo/next-js-svgrepo-com.svg", name: "Next.js" },
  { src: "/techlogo/React-icon.svg", name: "React" },
  { src: "/techlogo/tailwind-svgrepo-com.svg", name: "Tailwind CSS" },
  { src: "/techlogo/node-js-svgrepo-com .svg", name: "Node.js" },
  { src: "/techlogo/mongodb-svgrepo-com.svg", name: "MongoDB" },
  { src: "/techlogo/postgresql-svgrepo-com.svg", name: "PostgreSQL" },
  { src: "/techlogo/prisma-svgrepo-com.svg", name: "Prisma" },
];

export default function TechMarquee() {
  return (
    <div className="group/marquee relative overflow-hidden py-16">
      {/* Gradient fade edges */}

      <div className="flex whitespace-nowrap">
        <div className="flex items-center gap-16 animate-marquee group-hover/marquee:[animation-play-state:paused]">
          {[...Array(2)].map((_, groupIdx) =>
            techs.map((tech) => (
              <div
                key={`${groupIdx}-${tech.name}`}
                className="group flex items-center gap-5 transition-all duration-300 hover:scale-110"
              >
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center p-2.5">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span
                  className="text-white/80 text-xl tracking-wider transition-colors duration-300 group-hover:text-white"
                  style={{ fontFamily: "'Modern Antiqua', serif" }}
                >
                  {tech.name}
                </span>
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
}
