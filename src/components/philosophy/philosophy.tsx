import Image from "next/image";
import styles from "./philosophy.module.scss";
import { Element as ReactScrollElement } from "react-scroll";
import { motion } from "framer-motion";
import { animationOptions } from "../../utils/constants";
import philosophyBackground from "../../../public/assets/images/services-bg.webp";

export default function Philosophy() {
  return (
    <ReactScrollElement name="philosophy" className={styles.philosophy}>
      <Image
        src={philosophyBackground}
        alt="Philosophy background"
        className={styles["background-image"]}
      />
      <div className={styles.overlay} />
      <motion.div className={styles.headingRow} {...animationOptions}>
        <div className={styles.headingColumn}>
          <h2>Development Philosophy</h2>
          <p className={styles.sectionDescription}>
            My passion and goal is to help you make your business standout.
          </p>
        </div>
      </motion.div>
      <div className={styles.philosophyList}>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Brand Identity</h3>
            <p>
              Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat consequatur
              sit vel illum vel et a delectus. Vel sequi vitae voluptatem
              perspiciatis eligendi. Voluptatibus optio natus asperiores est
              commodi amet quia architecto. Dolores necessitatibus et.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Illustration</h3>
            <p>
              Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat consequatur
              sit vel illum vel et a delectus. Vel sequi vitae voluptatem
              perspiciatis eligendi. Voluptatibus optio natus asperiores est
              commodi amet quia architecto. Dolores necessitatibus et.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Web Design</h3>
            <p>
              Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat consequatur
              sit vel illum vel et a delectus. Vel sequi vitae voluptatem
              perspiciatis eligendi. Voluptatibus optio natus asperiores est
              commodi amet quia architecto. Dolores necessitatibus et.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Product Strategy</h3>
            <p>
              Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat consequatur
              sit vel illum vel et a delectus. Vel sequi vitae voluptatem
              perspiciatis eligendi. Voluptatibus optio natus asperiores est
              commodi amet quia architecto. Dolores necessitatibus et.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>UI/UX Design</h3>
            <p>
              Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat consequatur
              sit vel illum vel et a delectus. Vel sequi vitae voluptatem
              perspiciatis eligendi. Voluptatibus optio natus asperiores est
              commodi amet quia architecto. Dolores necessitatibus et.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.philosophyItemContainer}
          {...animationOptions}
        >
          <div className={styles.philosophyItemContent}>
            <h3>Mobile Design</h3>
            <p>
              Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat consequatur
              sit vel illum vel et a delectus. Vel sequi vitae voluptatem
              perspiciatis eligendi. Voluptatibus optio natus asperiores est
              commodi amet quia architecto. Dolores necessitatibus et.
            </p>
          </div>
        </motion.div>
      </div>
    </ReactScrollElement>
  );
}
