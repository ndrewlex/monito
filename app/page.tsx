import styles from "./page.module.scss";
import Button from "./components/Button";
import DogCategories from "./components/DogCategories";
import NavMenu from "./components/NavMenu";
import PlayIcon from "./components/IconComponent/PlayIcon";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <NavMenu />

        <div className={styles.hero_content}>
          <h1>One more friend</h1>
          <h2>Thousands more fun!</h2>
          <p>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className={styles.btn_group}>
            <Button variant="secondary" className={styles.btn_play}>
              <span>View Intro</span>
              <PlayIcon />
            </Button>
            <Button>Explore Now</Button>
          </div>
        </div>
      </section>

      <section className={styles.dog_category}>
        <div className={styles.dog_category_heading}>
          <div className={styles.title}>
            <p>Whats new?</p>
            <h2>Take a look at some of our pets</h2>
          </div>
          <Button size="sm" variant="secondary">
            View more
          </Button>
        </div>
        <DogCategories />

        <div className={styles.view_more_categories}>
          <Button size="sm" variant="secondary" fullWidth>
            View more
          </Button>
        </div>
      </section>
    </div>
  );
}
