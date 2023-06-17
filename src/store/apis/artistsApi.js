import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const artistsApi = createApi({
  reducerPath: "artistsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://deezerdevs-deezer.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getArtist: builder.query({
      query: (name) => ({
        headers: {
          "X-RapidAPI-Key":
            "5d8f7d4714msh80f5f816d9bf418p18b9e6jsne0ececab66a5",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
        url: `/search?q=${name}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyGetArtistQuery } = artistsApi;

export { artistsApi };
