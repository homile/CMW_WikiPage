"use client";
import { useEffect, useState } from "react";

// import api
import { getWiki, getWikiList } from "@/app/api/wikis";

// import types
import { Wiki } from "@/app/types/wiki";

// import css
import styles from "./wikiPage.module.css";

const WikiPage = ({ params }: { params: { wikiId: string } }) => {
  const [wikiInfo, setWikiInfo] = useState<Wiki>();
  const [wikiList, setWikiList] = useState<Wiki[]>([]);

  // 위키정보 가져오는 함수
  const fetchWiki = async () => {
    try {
      const data = await getWiki(params.wikiId);
      setWikiInfo(data.data);
    } catch (error) {
      console.error("위키정보를 가져오지 못했습니다.", error);
    }
  };

  // 위키리스트 가져오는 함수
  const fetchWikiList = async () => {
    try {
      const data = await getWikiList();
      setWikiList(data.data);
    } catch (error) {
      console.error("위키리스트를 가져오지 못했습니다.", error);
    }
  };

  // 위키본문 출력 함수
  const handleWikiTitleLink = (content: string) => {
    wikiList.forEach((wiki: Wiki) => {
      const link = `<a href="/wiki/${wiki.id}" style="color: blue;">${wiki.title}</a>`;
      const regExp = new RegExp(wiki.title, "g");
      content = content.replace(regExp, link);
    });

    return <p className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />;
  };

  useEffect(() => {
    fetchWiki();
    fetchWikiList();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{wikiInfo?.title}</h1>
      {wikiInfo && handleWikiTitleLink(wikiInfo.content)}
    </div>
  );
};

export default WikiPage;
