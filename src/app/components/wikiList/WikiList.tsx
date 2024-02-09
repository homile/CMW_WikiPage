"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// import api
import { getWikiList } from "@/app/api/wikis";

// import components
import WikiCard from "../wikiCard/WikiCard";

// import css
import styles from "./wikiList.module.css";

// import types
import { Wiki } from "@/app/types/wiki";

const WikiList = () => {
  const [wikiList, setWikiList] = useState<Wiki[]>([]);

  // 위키리스트 가져오는 함수
  const fetchWikiList = async () => {
    try {
      const data = await getWikiList();
      setWikiList(data.data);
    } catch (error) {
      console.error("위키리스트를 가져오지 못했습니다.", error);
    }
  };

  useEffect(() => {
    fetchWikiList();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <div>
          <Link href={`/write`}>
            <button>추가</button>
          </Link>
        </div>
      </div>
      <div>전체 : {wikiList.length}</div>
      <div className={styles.wikiList}>
        {wikiList.map((wiki: Wiki) => {
          return <WikiCard key={wiki.id} wiki={wiki} />;
        })}
      </div>
      <div>pagenation</div>
    </div>
  );
};

export default WikiList;
