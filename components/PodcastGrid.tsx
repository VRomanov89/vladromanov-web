"use client";

import { useState, useEffect, useCallback } from "react";

export interface Episode {
  videoId: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
}

export default function PodcastGrid({ episodes }: { episodes: Episode[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (id: string) => {
    setActiveId(id);
    // Defer visibility to next frame so CSS transition fires
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setModalVisible(true));
    });
  };

  const closeModal = useCallback(() => {
    setModalVisible(false);
    setTimeout(() => setActiveId(null), 220);
  }, []);

  // ESC key closes modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  return (
    <>
      {/* 3-column grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {episodes.map((ep) => {
          const date = new Date(ep.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });

          return (
            <button
              key={ep.videoId}
              onClick={() => openModal(ep.videoId)}
              className="group text-left overflow-hidden rounded-sm border border-[var(--color-border)] hover:border-[var(--color-navy)] hover:shadow-card-hover active:scale-[0.99] transition-[border-color,box-shadow,transform] duration-200"
              aria-label={`Play episode: ${ep.title}`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-[var(--color-parchment-deep)]">
                <img
                  src={ep.thumbnail}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: "rgba(27, 51, 82, 0.32)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-[transform,background-color] duration-200 group-hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.92)" }}
                  >
                    {/* Play triangle */}
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 1.5L12.5 8L1.5 14.5V1.5Z"
                        fill="var(--color-navy)"
                        stroke="var(--color-navy)"
                        strokeWidth="0.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card info */}
              <div
                className="p-4"
                style={{ background: "var(--color-surface)" }}
              >
                <p className="text-[0.68rem] font-medium tracking-[0.06em] uppercase text-[var(--color-gold)] mb-1.5">
                  {date}
                </p>
                <h4
                  className="font-display text-[1rem] font-medium text-[var(--color-ink)] leading-snug"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {ep.title}
                </h4>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox modal */}
      {activeId && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Episode player"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10"
          style={{
            background: "rgba(10, 20, 35, 0.93)",
            opacity: modalVisible ? 1 : 0,
            transition: "opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl"
            style={{
              transform: modalVisible ? "scale(1) translateY(0)" : "scale(0.96) translateY(12px)",
              opacity: modalVisible ? 1 : 0,
              transition:
                "transform 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-9 right-0 flex items-center gap-2 text-white/50 hover:text-white transition-[color,opacity] duration-150 text-[0.7rem] font-medium tracking-[0.14em] uppercase"
            >
              Close
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L9 9M9 1L1 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* 16:9 iframe container */}
            <div
              className="relative w-full rounded-sm overflow-hidden"
              style={{ paddingBottom: "56.25%", boxShadow: "0 24px 80px rgba(0,0,0,0.6)" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0&modestbranding=1`}
                title="Episode player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
