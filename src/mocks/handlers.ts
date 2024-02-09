import { HttpResponse, http } from "msw";

// import types
import { Wiki } from "@/app/types/wiki";

const wikiList: Wiki[] = [
  { id: "1", title: "위키제목1", content: "위키본문1" },
  { id: "2", title: "위키제목2", content: "위키본문2" },
  { id: "3", title: "위키제목3", content: "위키본문3" },
  { id: "4", title: "위키제목4", content: "위키본문4" },
  { id: "5", title: "위키제목5", content: "위키본문5" },
  { id: "6", title: "위키제목6", content: "위키본문6" },
];

export const handlers = [
  http.get("/api/wikiList", ({ request }) => {
    return HttpResponse.json({ status: 200, data: wikiList });
  }),
];
