import { HttpResponse, http } from "msw";

// import types
import { Wiki } from "@/app/types/wiki";

let wikiList: Wiki[] = [
  { id: "1", title: "위키제목1", content: "위키본문1" },
  { id: "2", title: "위키제목2", content: "위키본문2" },
  { id: "3", title: "위키제목3", content: "위키본문3" },
  { id: "4", title: "위키제목4", content: "위키본문4" },
  { id: "5", title: "위키제목5", content: "위키본문5 위키제목2" },
  { id: "6", title: "위키제목6", content: "위키본문6" },
];

export const handlers = [
  http.get("/api/wikiList", ({ request }) => {
    return HttpResponse.json({ status: 200, data: wikiList });
  }),

  http.get("/api/wiki/:id", async ({ request, params }) => {
    const { id } = params;

    const wiki = wikiList.find((wiki) => wiki.id === id);

    if (!wiki) {
      return HttpResponse.json({ status: 404 });
    }

    return HttpResponse.json({ status: 200, data: wiki });
  }),

  http.post("/api/wiki", async ({ request, params }) => {
    const newWiki: any = await request.json();

    let lastId = wikiList.at(-1)?.id ?? "1";
    newWiki["id"] = `${Number(lastId) + 1}`;

    wikiList = [...wikiList, newWiki];

    return HttpResponse.json({ status: 201, data: newWiki });
  }),

  http.put("/api/wiki/:id", async ({ request, params }) => {
    const { id } = params;

    const wikiIndex = wikiList.findIndex((wiki) => wiki.id === id);

    if (wikiIndex < 0) {
      return HttpResponse.json({ status: 404 });
    }

    const inputWiki: any = await request.json();

    const updatedWiki = { ...wikiList[wikiIndex], ...inputWiki };
    wikiList[wikiIndex] = updatedWiki;

    return HttpResponse.json({ status: 201, data: updatedWiki });
  }),

  http.delete("/api/wiki", ({ request }) => {
    return HttpResponse.json({ status: 201 });
  }),
];
