import Image from "next/image";
import { HeaderIcons } from "../HeaderIcons/HeaderIcons";
import {
  BadgeCheckIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <HeaderIcons title="HOME" Icon={HomeIcon} />
        <HeaderIcons title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderIcons title="VERIFED" Icon={BadgeCheckIcon} />
        <HeaderIcons title="SEARCH" Icon={SearchIcon} />
        <HeaderIcons title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className={styles.header__logo}
        src="/Photos/hululogo.png"
        height={65}
        width={200}
      />
    </header>
  );
};
