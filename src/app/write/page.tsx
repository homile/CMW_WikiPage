"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

// import api
import { postWiki } from "../api/wikis";

// import css
import styles from "./writePage.module.css";

interface postWiki {
  title: string;
  content: string;
}

const WritePage = () => {
  const router = useRouter();

  const [wiki, setWiki] = useState<postWiki>({ title: "", content: "" });

  // 폼 제출 핸들러
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!wiki.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    try {
      const data = await postWiki(wiki);
      router.push(`/wiki/${data.data.id}`);

      setWiki({ title: "", content: "" }); // 폼 초기화
    } catch (error) {
      console.error("위키를 작성하지 못했습니다.", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setWiki((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="text" name="title" value={wiki.title} onChange={handleInputChange} className={styles.title} />
      <textarea name="content" value={wiki.content} onChange={handleInputChange} className={styles.content} />
      <div>
        <button type="reset">취소</button>
        <button type="submit">저장</button>
      </div>
    </form>
  );
};

export default WritePage;
