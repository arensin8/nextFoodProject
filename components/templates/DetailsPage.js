import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./DetailsPage.module.css";

const DetailsPage = (props) => {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    ingredients,
    details,
    recipe,
  } = props;
  return (
    <div className={styles.container}>
      <h2>Details</h2>
      <div className={styles.cubContainer}>
        <div className={styles.banner}>
          <img src={`/images/${id}.jpeg`} alt={name} />
          <div>
            <h3>{name}</h3>
            <span className={styles.location}>
              <Location />
              {details[0].Cuisine}
            </span>
            <span className={styles.price}>
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            {discount ? (
              <span className={styles.discount}>{discount}% Off</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
