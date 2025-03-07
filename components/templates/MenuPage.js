import styles from "./MenuPage.module.css";

const MenuPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {data.map((food) => (
          <p key={food.id}>{food.name}</p>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
