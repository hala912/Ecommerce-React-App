import { Link } from "react-router-dom";
import styles from "./category.module.css";
import { Categoryshared} from "@schemas/category";

const Category = ({ name, prefix, img }: Categoryshared) => {
  return (
    <div className={styles.category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={styles.categoryImg}>
          <img
            src={img}
            alt=""
          />
        </div>
      </Link>
      <h4 className={styles.categoryTitle}>{name}</h4>
    </div>
  );
};

export default Category;