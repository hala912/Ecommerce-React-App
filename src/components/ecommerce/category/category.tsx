import { Link } from "react-router-dom";
import styles from "./category.module.css";
interface CategoryProps {
  title: string;
  image: string;
  prefix: string;
}
const Category = ({ title, prefix, image }: CategoryProps) => {
  return (
    <div className={styles.category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={styles.categoryImg}>
          <img
            src={image}
            alt=""
          />
        </div>
      </Link>
      <h4 className={styles.categoryTitle}>{title}</h4>
    </div>
  );
};

export default Category;