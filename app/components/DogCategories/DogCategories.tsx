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
                Gene: <span className="bold-700">{item.gene}</span>{" "}
                <span className={styles.dot}> · </span> Age:{" "}
                <span className="bold-700">{item.age}</span>
              </p>
              <p className={styles.price}>{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DogCategories;
