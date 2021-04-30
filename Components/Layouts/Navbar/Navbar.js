import requests from "../../../utils/request";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__topics}>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`?genre=${key}`)}
            key={key}
            className={styles.navbar__topics__title}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className={styles.navbar__fade} />
    </nav>
  );
};
