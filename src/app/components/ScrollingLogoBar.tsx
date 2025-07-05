"use client";
import { useRef, useEffect, useState } from "react";
import styles from "../components/ScrollingLogoBar.module.css";
import Image from "next/image";

// Map company to logo filename (add more as files become available)
const logoData = [
  { name: "Post Holdings", file: "/logos/post.png" },
  { name: "Procter & Gamble", file: "/logos/pg.png" },
  { name: "Kraft Heinz", file: "/logos/kraft.png" },
  { name: "SolisPLC", file: "/logos/solisplc.png" },
  { name: "Joltek", file: "/logos/joltek.png" },
  { name: "Kerno", file: "/logos/kerno.png" },
  { name: "Manufacturing Hub", file: "/logos/manufacturinghub.png" },
  { name: "McGill University", file: "/logos/mcgill.png" },
  { name: "Concordia University", file: "/logos/concordia.png" },
  // { name: "FRAME", file: "/logos/frame.png" },
  // { name: "Manufacturing Hub", file: "/logos/mfghub.png" },
  // { name: "Automate", file: "/logos/automate.png" },
];

function LogoGroup() {
  return (
    <div className={styles.marqueeGroup}>
      {logoData.map((logo, i) => (
        <span className={styles.marqueeLogo} key={logo.name + i}>
          <Image
            src={logo.file}
            alt={logo.name + " logo"}
            width={112}
            height={72}
            style={{ objectFit: "contain", maxHeight: 72, display: 'block' }}
          />
        </span>
      ))}
    </div>
  );
}

export default function ScrollingLogoBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    function updateRepeat() {
      if (containerRef.current && groupRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const groupWidth = groupRef.current.scrollWidth;
        // Repeat enough times so that total width is at least 2x container width
        const minTotalWidth = containerWidth * 2;
        const count = groupWidth > 0 ? Math.ceil(minTotalWidth / groupWidth) + 1 : 2;
        setRepeatCount(count);
      }
    }
    updateRepeat();
    window.addEventListener("resize", updateRepeat);
    return () => window.removeEventListener("resize", updateRepeat);
  }, []);

  // Render the first group with a ref to measure width
  const groups = [
    <div className={styles.marqueeGroup} ref={groupRef} key="group-0">
      {logoData.map((logo, i) => (
        <span className={styles.marqueeLogo} key={logo.name + i}>
          <Image
            src={logo.file}
            alt={logo.name + " logo"}
            width={112}
            height={72}
            style={{ objectFit: "contain", maxHeight: 72, display: 'block' }}
          />
        </span>
      ))}
    </div>
  ];
  for (let i = 1; i < repeatCount; i++) {
    groups.push(
      <div className={styles.marqueeGroup} aria-hidden="true" key={`group-${i}`}>
        {logoData.map((logo, j) => (
          <span className={styles.marqueeLogo} key={logo.name + i + '-' + j}>
            <Image
              src={logo.file}
              alt={logo.name + " logo"}
              width={112}
              height={72}
              style={{ objectFit: "contain", maxHeight: 72, display: 'block' }}
            />
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.marqueeWrapper} ref={containerRef}>
      <div className={styles.marquee}>
        {groups}
      </div>
    </div>
  );
}
// Missing logo files needed in public/logos/: kraft.png, solisplc.png, frame.png, mfghub.png, automate.png 