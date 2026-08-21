"use client";

import { useEffect, useRef, useState } from "react";

const CLIP_A_SRC = "/videos/hero-clip-a.mp4";
const CLIP_B_SRC = "/videos/hero-clip-b.mp4";

// Cue points (seconds) to jump-cut into within each clip — chosen a beat or
// two apart so every cut lands on fresh motion instead of replaying the same
// moment, and clear of each clip's first/last ~0.4s fade-to-black frames.
const CUES_A = [0.4, 3.1, 6.4, 9.6];
const CUES_B = [1.2, 5.5, 10.5, 16, 21.5, 27];

function randomCutMs() {
  return 900 + Math.random() * 800; // 0.9s–1.7s per cut — fast, montage pace
}

function whenReady(video: HTMLVideoElement) {
  if (video.readyState >= 1) return Promise.resolve();
  return new Promise<void>((resolve) => {
    video.addEventListener("loadedmetadata", () => resolve(), { once: true });
  });
}

export function HeroVideoBackground() {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [activeSlot, setActiveSlot] = useState<"a" | "b">("a");

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    const cueIndex = { a: 0, b: 0 };

    // Deliberately not awaited: awaiting video.play() here can hang
    // indefinitely in Chromium if a seek lands before the previous load
    // settles, which would stall every cut after it. Fire-and-forget keeps
    // the cut timer running regardless of how the underlying play/seek
    // resolves.
    function cut(slot: "a" | "b") {
      const video = slot === "a" ? videoA! : videoB!;
      const cues = slot === "a" ? CUES_A : CUES_B;
      const idx = cueIndex[slot] % cues.length;
      cueIndex[slot] += 1;
      video.currentTime = cues[idx];
      video.play().catch(() => {});
      setActiveSlot(slot);
      timeoutId = setTimeout(() => cut(slot === "a" ? "b" : "a"), randomCutMs());
    }

    Promise.all([whenReady(videoA), whenReady(videoB)]).then(() => {
      if (cancelled) return;
      cut("a");
    });

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <video
        ref={videoARef}
        muted
        playsInline
        preload="auto"
        poster="/images/videobg2.jpg"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover ${
          activeSlot === "a" ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={CLIP_A_SRC} type="video/mp4" />
      </video>
      <video
        ref={videoBRef}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover ${
          activeSlot === "b" ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={CLIP_B_SRC} type="video/mp4" />
      </video>
    </>
  );
}
