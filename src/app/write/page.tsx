"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// import api
import { getWiki, postWiki, putWiki } from "@/app/api/wikis";

// import css
import styles from "./writePage.module.css";

// import types
import { Wiki, typePostWiki } from "@/app/types/wiki";

const WritePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(searchParams).get("wikiId");

  const [wikiInfo, setWikiInfo] = useState<Wiki>({ id: "", title: "", content: "" });
  const [wiki, setWiki] = useState<typePostWiki>({ title: "", content: "" });

  // 위키정보 가져오는 함수
  const fetchWiki = async () => {
    if (queryParams) {
      try {
        const data = await getWiki(queryParams);
        setWikiInfo(data.data);
        setWiki({ title: data.data.title, content: data.data.content });
      } catch (error) {
        console.error("위키정보를 가져오지 못했습니다.", error);
      }
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!wiki.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (queryParams) {
      handleUpdateWiki();
    } else {
      handleNewWiki();
    }
  };

  // 위키 생성 함수
  const handleNewWiki = async () => {
    try {
      const data = await postWiki(wiki);
      router.push(`/wiki/${data.data.id}`);

      setWiki({ title: "", content: "" });
    } catch (error) {
      console.error("위키를 작성하지 못했습니다.", error);
    }
  };

  // 위키 수정 함수
  const handleUpdateWiki = async () => {
    try {
      const data = await putWiki(wikiInfo.id, wiki.title, wiki.content);
      router.push(`/wiki/${data.data.id}`);

      setWiki({ title: "", content: "" });
      setWikiInfo({ id: "", title: "", content: "" });
    } catch (error) {
      console.error("위키를 수정하지 못했습니다.", error);
    }
  };

  // 위키 입력 함수
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setWiki((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchWiki();
  }, []);

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="text" name="title" value={wiki.title} onChange={handleInputChange} className={styles.title} />
      <textarea name="content" value={wiki.content} onChange={handleInputChange} className={styles.content} />
      <div>
        <button type="reset" onClick={() => router.back()}>
          취소
        </button>
        <button type="submit">{queryParams ? "수정" : "작성"}</button>
      </div>
    </form>
  );
};

export default WritePage;
