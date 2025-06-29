import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";
const KEY_ID = "vjHfDE76FeIhuIX3zevKhafLGttaD44VQQGL6k3ZfzE";
import { UnsplashImage } from "../types";


interface fetchImagesResponse{
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

export async function fetchImages(query: string, page: number): Promise<fetchImagesResponse> {
  const response = await axios.get<fetchImagesResponse>(BASE_URL + "search/photos/", {
    params: { client_id: KEY_ID, query: query, page: page },
  });
  return response.data;
}
