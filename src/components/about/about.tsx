import Image from "next/image";
import styles from "./about.module.scss";
import { Element as ReactScrollElement } from "react-scroll";
import { motion } from "framer-motion";
import { animationOptions } from "../../utils/constants";
import workIcon from "../../../public/assets/icons/icon-briefcase.svg";
import educationIcon from "../../../public/assets/icons/icon-education.svg";

export default function About() {
  return (
    <ReactScrollElement name="about" className={styles.about}>
      <div>
        <motion.div className={styles["heading-row"]} {...animationOptions}>
          <div className={styles["heading-column"]}>
            <h2>About Me</h2>
          </div>
        </motion.div>
        <motion.div className={styles["about-me-row"]} {...animationOptions}>
          <div className={styles["about-me-column"]}>
            <p>
              Nulla aspernatur nam et accusantium. Tempore delectus dignissimos
              aut ab commodi. Labore et cupiditate temporibus odio debitis
              eaque. Officia provident aut iste et dicta perferendis. Velit iure
              adipisci. Molestiae qui fuga rerum facilis.
            </p>
            <p>
              Reprehenderit quia id facilis nihil odit perferendis fugiat quidem
              voluptas. Non ratione tenetur. Quis earum quia deleniti fugit
              fugiat minus omnis. Iure dolore dolorum. Aspernatur quos cumque ea
              dolorum nemo nihil beatae magnam. Qui molestiae rem. Maxime enim
              provident ipsum reprehenderit tenetur. Et cupiditate repellendus.
              Et modi ipsum aut harum. Ratione alias.
            </p>
            <p>
              Rerum consequatur dolore quae. Qui excepturi facilis quam quae
              quasi. Mollitia occaecati minus voluptas veniam. Qui excepturi
              facilis quam quae quasi. Mollitia occaecati minus voluptas veniam.
              Est est occaecati dolor qui aut et eum. Aspernatur quos cumque ea
              dolorum nemo nihil beatae magnam. Qui molestiae rem.
            </p>
            <p>
              Maxime enim provident ipsum reprehenderit tenetur. Et cupiditate
              repellendus. Et modi ipsum aut harum. Ratione alias sed. Rerum
              consequatur dolore quae. Qui excepturi facilis quam quae quasi.
              Mollitia occaecati minus voluptas veniam. Est est occaecati dolor
              qui aut et eum. Aspernatur quos cumque ea dolorum nemo nihil
              beatae magnam. Qui molestiae rem. Aspernatur quos cumque ea
              dolorum nemo nihil. Qui molestiae rem.
            </p>
          </div>
        </motion.div>
        <div className={styles["about-me-buttons"]}>
          <motion.div {...animationOptions}>
            <a href="#0" className={styles["btn-stroke"]}>
              Hire Me
            </a>
          </motion.div>
          <motion.div {...animationOptions}>
            <a href="#0" className={styles["btn-primary"]}>
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <div>
        <motion.div className={styles["heading-row"]} {...animationOptions}>
          <div className={styles["heading-column"]}>
            <h2>Work & Education</h2>
          </div>
        </motion.div>
        <div className={styles["experience-row"]}>
          <motion.div
            className={styles["experience-column"]}
            {...animationOptions}
          >
            <div className={styles.timeline}>
              <div className={styles["icon-wrap"]}>
                <Image
                  src={workIcon}
                  alt="icon of a briefcase"
                  className={styles["work-icon"]}
                />
              </div>
              <div className={styles.block}>
                <div className={styles.bullet} />
                <div className={styles.header}>
                  <p className={styles.timeframe}>July 2018 - Present</p>
                  <h3 className={styles.name}>Awesome Studio</h3>
                  <h4>Lead Designer</h4>
                </div>
                <p>
                  Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                  magna consectetur nisi cupidatat laboris esse eiusmod deserunt
                  aute do quis velit esse sed Ut proident cupidatat nulla esse
                  cillum laborum occaecat nostrud sit dolor incididunt amet est
                  occaecat nisi.
                </p>
              </div>

              <div className={styles.block}>
                <div className={styles.bullet} />
                <div className={styles.header}>
                  <p className={styles.timeframe}>July 2017 - June 2018</p>
                  <h3 className={styles.name}>Super Cool Agency</h3>
                  <h4>Frontend Developer</h4>
                </div>
                <p>
                  Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                  magna consectetur nisi cupidatat laboris esse eiusmod deserunt
                  aute do quis velit esse sed Ut proident cupidatat nulla esse
                  cillum laborum occaecat nostrud sit dolor incididunt amet est
                  occaecat nisi.
                </p>
              </div>

              <div className={styles.block}>
                <div className={styles.bullet} />
                <div className={styles.header}>
                  <p className={styles.timeframe}>March 2016 - June 2017</p>
                  <h3 className={styles.name}>Epic Design Studio</h3>
                  <h4>Frontend Developer</h4>
                </div>
                <p>
                  Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                  magna consectetur nisi cupidatat laboris esse eiusmod deserunt
                  aute do quis velit esse sed Ut proident cupidatat nulla esse
                  cillum laborum occaecat nostrud sit dolor incididunt amet est
                  occaecat nisi.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles["experience-column"]}
            {...animationOptions}
          >
            <div className={styles.timeline}>
              <div className={styles["icon-wrap"]}>
                <Image
                  src={educationIcon}
                  alt="icon of a graduation cap"
                  className={styles["education-icon"]}
                />
              </div>

              <div className={styles.block}>
                <div className={styles.bullet} />
                <div className={styles.header}>
                  <p className={styles.timeframe}>July 2011 - June 2015</p>
                  <h3 className={styles.name}>University of Life</h3>
                  <h4>Master Degree</h4>
                </div>
                <p>
                  Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                  magna consectetur nisi cupidatat laboris esse eiusmod deserunt
                  aute do quis velit esse sed Ut proident cupidatat nulla esse
                  cillum laborum occaecat nostrud sit dolor incididunt amet est
                  occaecat nisi.
                </p>
              </div>

              <div className={styles.block}>
                <div className={styles.bullet} />
                <div className={styles.header}>
                  <p className={styles.timeframe}>July 2009 - June 2011</p>
                  <h3 className={styles.name}>State Design University</h3>
                  <h4>Bachelor Degree</h4>
                </div>
                <p>
                  Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                  magna consectetur nisi cupidatat laboris esse eiusmod deserunt
                  aute do quis velit esse sed Ut proident cupidatat nulla esse
                  cillum laborum occaecat nostrud sit dolor incididunt amet est
                  occaecat nisi.
                </p>
              </div>

              <div className={styles.block}>
                <div className={styles.bullet} />
                <div className={styles.header}>
                  <p className={styles.timeframe}>July 2005 - June 2009</p>
                  <h3 className={styles.name}>School of Hard Knocks</h3>
                  <h4>Bachelor Degree</h4>
                </div>
                <p>
                  Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                  magna consectetur nisi cupidatat laboris esse eiusmod deserunt
                  aute do quis velit esse sed Ut proident cupidatat nulla esse
                  cillum laborum occaecat nostrud sit dolor incididunt amet est
                  occaecat nisi.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ReactScrollElement>
  );
}
