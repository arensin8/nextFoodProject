import styles from "./CategoriesPage.module.css";

const CategoriesPage = () => {
  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.sunContainer}>
        <div className={styles.select}>
          <select>
            <option value="">Difficulty</option>
            <option value="">Easy</option>
            <option value="">Medium</option>
            <option value="">Hard</option>
          </select>
          <select>
            <option value="">Cooking time</option>
            <option value="">More than 30 min</option>
            <option value="">Less than 30 min</option>
          </select>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
