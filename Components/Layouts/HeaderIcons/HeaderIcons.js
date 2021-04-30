import styles from "./HeaderIcons.module.scss";

export const HeaderIcons = ({ title, Icon }) => {
  return (
    <div className={styles.headerIcons}>
      <Icon className={styles.headerIcons__icon} />
      <p className={styles.headerIcons__title}>{title}</p>
    </div>
  );
};
