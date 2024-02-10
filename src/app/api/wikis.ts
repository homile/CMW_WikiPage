import axios from "axios";

// import types
import { Wiki } from "@/app/types/wiki";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getWikiList = async () => {
  const response = await apiClient.get("/wikiList");

  return response.data;
};

export const getWiki = async (id: string) => {
  const response = await apiClient.get(`/wiki/${id}`);

  return response.data;
};

export const postWiki = async (newWiki: { title: string; content: string }) => {
  const response = await apiClient.post(`/wiki`, newWiki);

  return response.data;
};

export const putWiki = async (id: string, title: string, content: string) => {
  const response = await apiClient.put(`/wiki/${id}`, { id, title, content });

  return response.data;
};

export const deleteWiki = async (id: string) => {
  const response = await apiClient.delete(`/wiki/${id}`);

  return response.data;
};
