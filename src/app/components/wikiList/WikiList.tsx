"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// import api
import { getWikiList } from "@/app/api/wikis";

// import components
import WikiCard from "../wikiCard/WikiCard";

// import css
import styles from "./wikiList.module.css";

// import types
import { Wiki } from "@/app/types/wiki";

const ITEMS_PER_PAGE = 5;

const WikiList = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

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

  const handlePagenation = (pageNum: number) => {
    const params = new URLSearchParams(searchParams);
    if (pageNum) {
      params.set("page", String(pageNum));
    } else {
      params.delete("page");
    }
    push(`${pathname}?${params.toString()}`);
  };

  // 현재 페이지 쿼리 파라미터에서 가져옴
  const pageParam = searchParams.get("page");
  const currentPage = pageParam !== null ? parseInt(pageParam) : 1;

  // 현재 페이지 위키 리스트 계산
  const currentWikis = wikiList.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(wikiList.length / ITEMS_PER_PAGE);

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
        {currentWikis.map((wiki: Wiki) => {
          return <WikiCard key={wiki.id} wiki={wiki} />;
        })}
      </div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => handlePagenation(pageNum)}
          style={{ fontWeight: pageNum === currentPage ? "bold" : "normal" }}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
};

export default WikiList;
