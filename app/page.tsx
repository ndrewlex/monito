import Image from "next/image";
import styles from "./page.module.scss";
import logoIcon from "./../public/logo.svg";
import { NavMenus } from "./components/Menu/config";
import SearchInput from "./components/SearchInput";
import Button from "./components/Button";
import DogCategories from "./components/DogCategories";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <nav>
          <a href="/" className={styles.logo}>
            <Image src={logoIcon} alt="hero" width={115} height={40} />
          </a>
          {NavMenus.map((menu) => {
            return (
              <a href="/" key={menu.label}>
                {menu.label}
              </a>
            );
          })}
          <SearchInput className="mr-14" />
          <Button className="bold-600">Join the community</Button>
        </nav>

        <div className={styles.hero_content}>
          <h1>One more friend</h1>
          <h2>Thousands more fun!</h2>
          <p>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className={styles.btn_group}>
            <Button>View Intro</Button>
            <Button>Explore Now</Button>
          </div>
        </div>
      </section>

      <section className={styles.dog_category}>
        <div className={styles.dog_category_heading}>
          <div>
            <p>Whats new?</p>
            <h2>Take a look at some of our pets</h2>
          </div>
          <Button>View more</Button>
        </div>
        <DogCategories />
      </section>
    </div>
  );
}
