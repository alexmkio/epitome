import { Link as ReactScrollLink } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import styles from "./header.module.scss";
import { useState } from "react";
import classNames from "classnames";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className={styles.header}>
      <nav className={clicked ? styles.isClicked : ""}>
        <ul>
          <li>
            <ReactScrollLink
              activeClass="active"
              className={styles.link}
              to="intro"
              spy={true}
              smooth={true}
              offset={isMobile ? -470 : -78}
              duration={800}
              onClick={handleClick}
            >
              Intro
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              activeClass="active"
              className={styles.link}
              to="about"
              spy={true}
              smooth={true}
              offset={isMobile ? -470 : -78}
              duration={800}
              onClick={handleClick}
            >
              About
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              activeClass="active"
              className={styles.link}
              to="philosophy"
              spy={true}
              smooth={true}
              offset={isMobile ? -470 : -78}
              duration={800}
              onClick={handleClick}
            >
              Philosophy
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              activeClass="active"
              className={styles.link}
              to="works"
              spy={true}
              smooth={true}
              offset={isMobile ? -470 : -78}
              duration={800}
              onClick={handleClick}
            >
              Works
            </ReactScrollLink>
          </li>
          <li>
            <ReactScrollLink
              activeClass="active"
              className={styles.link}
              to="contact"
              spy={true}
              smooth={true}
              offset={isMobile ? -470 : -78}
              duration={800}
              onClick={handleClick}
            >
              Say Hello
            </ReactScrollLink>
          </li>
        </ul>
      </nav>
      <button
        className={classNames(
          styles.headerMenuToggle,
          clicked ? styles.isClicked : ""
        )}
        onClick={handleClick}
        aria-label="Toggle Menu"
      >
        <span>Menu</span>
      </button>
    </header>
  );
}
