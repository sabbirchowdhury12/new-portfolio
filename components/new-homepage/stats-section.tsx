"use client";

export default function StatsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
      <div className="bg-[#F5E6D3] rounded-[80px] p-6 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Years Experience */}
        <div className="text-center">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4">
            <div
              className="absolute inset-0 blob"
              style={{
                background:
                  "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                transform:
                  "scaleX(-1) scale(1.5) translateY(-0.5rem) translateX(-0.35rem)",
              }}
            />
            <span
              style={{ fontFamily: "'Modern Antiqua', serif" }}
              className="relative text-3xl sm:text-4xl font-bold text-black"
            >
              2+
            </span>
          </div>
          <h3
            style={{ fontFamily: "'Modern Antiqua', serif" }}
            className="text-lg sm:text-xl font-semibold text-gray-800 mb-2"
          >
            Years Experience
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Experience as a Full-Stack Developer and Tech Lead, building
            scalable web applications with modern Frontend and backend
            technologies.
          </p>
        </div>

        {/* Client Projects */}
        <div className="text-center">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4">
            <div
              className="absolute inset-0 blob"
              style={{
                background:
                  "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                transform:
                  "scaleX(-1) scale(1.5) translateY(-0.5rem) translateX(-0.35rem)",
              }}
            />
            <span
              style={{ fontFamily: "'Modern Antiqua', serif" }}
              className="relative text-3xl sm:text-4xl font-bold text-black"
            >
              10+
            </span>
          </div>
          <h3
            style={{ fontFamily: "'Modern Antiqua', serif" }}
            className="text-lg sm:text-xl font-semibold text-gray-800 mb-2"
          >
            Client&apos;s Projects
          </h3>
          <p className=" text-gray-600 text-sm leading-relaxed">
            Successfully delivered responsive websites, SaaS platforms,
            automation systems, AI-powered posture analysis tools, dashboards,
            and visual editors for clients and startups.
          </p>
        </div>

        {/* Hours Available */}
        <div className="text-center">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-4">
            <div
              className="absolute inset-0 blob"
              style={{
                background:
                  "linear-gradient(134.19deg, #BE5F47 27.13%, #D29D73 73.56%)",
                transform:
                  "scaleX(-1) scale(1.5) translateY(-0.5rem) translateX(-0.35rem)",
              }}
            />
            <span
              style={{ fontFamily: "'Modern Antiqua', serif" }}
              className="relative text-3xl sm:text-4xl font-bold text-black"
            >
              24/7
            </span>
          </div>
          <h3
            style={{ fontFamily: "'Modern Antiqua', serif" }}
            className="text-lg sm:text-xl font-semibold text-gray-800 mb-2"
          >
            Hours Available
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Manikganj, Dhaka
            <br />
            Bangladesh
            <br />
            sabbirchowdhury40854@gmail.com
            <br />
            whatsapp: 01617837797
          </p>
        </div>
      </div>
    </div>
  );
}
