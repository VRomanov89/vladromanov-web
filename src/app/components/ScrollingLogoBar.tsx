import styles from "../page.module.css";
import Image from "next/image";

// Map company to logo filename (add more as files become available)
const logoData = [
  { name: "Post Holdings", file: "/logos/post.webp" },
  { name: "Procter & Gamble", file: "/logos/pg.png" },
  // { name: "Kraft Heinz", file: "/logos/kraft.png" },
  // { name: "SolisPLC", file: "/logos/solisplc.png" },
  // { name: "FRAME", file: "/logos/frame.png" },
  // { name: "Manufacturing Hub", file: "/logos/mfghub.png" },
  // { name: "Automate", file: "/logos/automate.png" },
];

// Repeat enough times for seamless scroll (at least 16 logos)
const minLogos = 16;
const repeatCount = Math.ceil(minLogos / logoData.length);
const scrollingLogos = Array.from({ length: repeatCount }, () => logoData).flat();

export default function ScrollingLogoBar() {
  return (
    <div className={styles.logoBarWrapper}>
      <div className={styles.logoBar} aria-label="Companies Vlad has worked with">
        {scrollingLogos.map((logo, i) => (
          <span className={styles.logoBarLogo} key={logo.name + i}>
            <Image
              src={logo.file}
              alt={logo.name + " logo"}
              width={64}
              height={48}
              style={{ objectFit: "contain", maxHeight: 48, display: 'block' }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
// Missing logo files needed in public/logos/: kraft.png, solisplc.png, frame.png, mfghub.png, automate.png 