"use client";
import { useEffect, useState } from "react";

// import api
import { getWiki } from "@/app/api/wikis";

// import types
import { Wiki } from "@/app/types/wiki";

// import css
import styles from "./wikiPage.module.css";

const WikiPage = ({ params }: { params: { wikiId: string } }) => {
  const [wikiInfo, setWikiInfo] = useState<Wiki>();

  // 위키정보 가져오는 함수
  const fetchWiki = async () => {
    try {
      const data = await getWiki(params.wikiId);
      setWikiInfo(data.data);
    } catch (error) {
      console.error("위키정보를 가져오지 못했습니다.", error);
    }
  };

  useEffect(() => {
    fetchWiki();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{wikiInfo?.title}</h1>
      <p className="content">{wikiInfo?.content}</p>
    </div>
  );
};

export default WikiPage;
