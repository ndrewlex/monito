import Image from "next/image";
import { CategoriesData } from "./config";
import styles from "./styles.module.scss";

const DogCategories = () => {
  return (
    <div className={styles.dog_categories}>
      {CategoriesData.map((item, index) => {
        return (
          <div key={index} className={styles.category_card}>
            <div className={styles.image_wrapper}>
              <Image src={item.image} fill alt="category" />
            </div>
            <div className={styles.description}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.info}>
                Gene: {item.genre} Age: {item.age}
              </p>
              <p>{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DogCategories;
