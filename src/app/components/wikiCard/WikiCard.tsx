import Link from "next/link";

// import css
import styles from "./wikiCard.module.css";

// import types
import { WikiCardProps } from "@/app/types/wiki";

const WikiCard: React.FC<WikiCardProps> = ({ wiki }) => {
  return (
    <Link key={wiki.id} href={`/wiki/${wiki.id}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>{wiki.title}</h2>
      </div>
    </Link>
  );
};

export default WikiCard;
