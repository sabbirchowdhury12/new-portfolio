"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface SliderImage {
  src: string;
  alt: string;
}

interface ProjectSliderProps {
  images: SliderImage[];
  title: string;
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function ProjectSlider({ images, title }: ProjectSliderProps) {
  const count = images.length;
  const hasMultiple = count > 1;
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const paginate = (dir: number) => {
    setSlide(([i]) => [(i + dir + count) % count, dir]);
  };

  const openLightbox = () => setLightboxIndex(index);

  const closeLightbox = () => {
    if (lightboxIndex !== null) setSlide([lightboxIndex, 0]);
    setLightboxIndex(null);
  };

  const paginateLightbox = (dir: number) => {
    setLightboxIndex((i) => (i === null ? i : (i + dir + count) % count));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSlide([lightboxIndex, 0]);
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i === null ? i : (i + 1 + count) % count));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((i) => (i === null ? i : (i - 1 + count) % count));
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, count]);

  return (
    <>
      <div className="relative h-full w-full overflow-hidden bg-gray-100">
        {/* Slides */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Open lightbox */}
        <button
          type="button"
          onClick={openLightbox}
          aria-label={`View ${title} image in full size`}
          className="absolute inset-0 z-10 cursor-zoom-in focus:outline-none"
        />

        {/* Prev / Next */}
        {hasMultiple && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => paginate(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => paginate(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Zoom hint */}
        <span className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full pointer-events-none">
          <ZoomIn className="w-3.5 h-3.5" />
          View
        </span>

        {/* Dots */}
        {hasMultiple && (
          <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setSlide([i, i > index ? 1 : -1])}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-5 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image viewer`}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="relative w-[92vw] max-w-[1000px] h-[70vh] sm:h-[78vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 92vw, 1000px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Close */}
            <button
              type="button"
              aria-label="Close image viewer"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {hasMultiple && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginateLightbox(-1);
                  }}
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginateLightbox(1);
                  }}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-white text-sm bg-white/10 px-3 py-1.5 rounded-full">
                  {lightboxIndex + 1} / {count}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}