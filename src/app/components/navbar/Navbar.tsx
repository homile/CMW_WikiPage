import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <div className={styles.logo}>CodingHub</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
