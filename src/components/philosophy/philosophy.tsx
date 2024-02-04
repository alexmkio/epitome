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
      <motion.div className={styles["heading-row"]} {...animationOptions}>
        <div className={styles["heading-column"]}>
          <h2>Development Philosophy</h2>
          <p className={styles["section-description"]}>
            My passion and goal is to help you make your business standout.
          </p>
        </div>
      </motion.div>
      <div className={styles["philosophy-list"]}>
        <motion.div
          className={styles["philosophy-item-container"]}
          {...animationOptions}
        >
          <div className={styles["philosophy-item-content"]}>
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
          className={styles["philosophy-item-container"]}
          {...animationOptions}
        >
          <div className={styles["philosophy-item-content"]}>
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
          className={styles["philosophy-item-container"]}
          {...animationOptions}
        >
          <div className={styles["philosophy-item-content"]}>
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
          className={styles["philosophy-item-container"]}
          {...animationOptions}
        >
          <div className={styles["philosophy-item-content"]}>
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
          className={styles["philosophy-item-container"]}
          {...animationOptions}
        >
          <div className={styles["philosophy-item-content"]}>
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
          className={styles["philosophy-item-container"]}
          {...animationOptions}
        >
          <div className={styles["philosophy-item-content"]}>
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
