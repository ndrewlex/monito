import Image from "next/image";
import styles from "./styles.module.scss";
import logoIcon from "../../../public/logo.svg";
import menuIcon from "../../../public/menu.svg";
import caretDown from "../../../public/caret-down.svg";
import searchIcon from "../../../public/search.svg";
import { menuConfigs } from "./config";
import SearchInput from "../SearchInput";
import Button from "../Button";

const NavMenu = () => {
  return (
    <div className={styles.nav_menu}>
      <Image
        src={menuIcon}
        alt="menu"
        width={32}
        height={32}
        className={styles.hamburger_icon}
      />

      <a href="/" className={styles.logo_icon}>
        <Image src={logoIcon} alt="hero" width={115} height={40} />
      </a>

      <Image
        src={searchIcon}
        alt="search"
        width={23}
        height={23}
        className={styles.search_icon}
      />

      <div className={styles.nav_menu_main}>
        {menuConfigs.map((menu) => {
          return (
            <a href="/" key={menu.label}>
              {menu.label}
            </a>
          );
        })}
      </div>

      <div className={styles.nav_menu_addons}>
        <SearchInput className={styles.search_menu_input} />
        <Button className="bold-700">Join the community</Button>
        <div className={styles.currency}>
          <span>VND</span>
          <Image src={caretDown} alt="currency" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
