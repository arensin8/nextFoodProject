import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">NextFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noreferrer">
          NextFood
        </a>{" "}
        Next.Js course | NextFood &copy;
      </footer>
    </div>
  );
};

export default Layout;
