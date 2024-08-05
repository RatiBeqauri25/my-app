"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { startTransition, useState } from "react";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
  { title: "Login", path: "/login" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div className={styles.links}>
        {links.map((link, index, array) => {
          return (
            <Link
              key={link.title}
              href={link.path}
              className={`${styles.LinkItem} ${
                link.path === pathName && styles.linkActive
              }`}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className={styles.menuIcon}>
        <Image
          src="/menu.png"
          className={styles.img}
          fill
          onClick={() =>
            setIsOpen((o) => {
              return !o;
            })
          }
          alt="menu"
        />
      </div>
      {isOpen && (
        <div className={styles.responsiveLinks}>
          {links.map((link, index, array) => {
            return (
              <Link key={link.title} href={link.path} className={pathName == link.path && styles.activeResponsiveLink}>
                {link.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
