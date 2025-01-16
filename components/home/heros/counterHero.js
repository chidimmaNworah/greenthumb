import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.scss";

const CounterHero = ({ target, title, duration }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let current = 0;
      const totalFrames = Math.round(duration / 16); // Approx 60fps
      const increment = target / totalFrames;

      let frame = 0;
      const updateCounter = () => {
        frame++;
        const currentCount = Math.min(Math.ceil(frame * increment), target);
        setCount(currentCount);
        if (currentCount < target) {
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    }
  }, [inView, target]);

  return (
    <div ref={ref} className={styles.counter}>
      <p className={styles.counter_number}>{count}</p>
      <p className={styles.counter_title}>{title}</p>
    </div>
  );
};

export default CounterHero;
