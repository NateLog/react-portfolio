"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  const [hoveredNavLink, setHoveredNavLink] = React.useState(null);

  const id = React.useId();

  return (
    <nav onMouseLeave={() => setHoveredNavLink(null)}>
      <ul className={styles.navlinks}>
        {LINKS.map(({ slug, label, href }) => (
          <li
            key={slug}
            style={{
              zIndex: hoveredNavLink === slug ? 2 : 1,
            }}
          >
            {hoveredNavLink === slug && (
              <motion.div layoutId={id} className={styles.hoveredBackdrop} />
            )}
            <Link href={href} onMouseEnter={() => setHoveredNavLink(slug)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const LINKS = [
  {
    slug: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    slug: "contact",
    label: "Contact Me",
    href: "/contact",
  },
  {
    slug: "aboutme",
    label: "About Me",
    href: "/aboutme",
  },
];
export default Navbar;
