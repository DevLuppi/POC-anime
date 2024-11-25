"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import AnimeCard from './components/AnimeCard.jsx';

export default function HomePage() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function fetchAnimeData() {
      try {
        const response = await fetch("https://api.jikan.moe/v4/seasons/2021/spring?sfw");
        const data = await response.json(); 
        setAnimeList(data); 
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch anime data:", error);
      }
    }

    fetchAnimeData();
  }, []);

  return (
      <div className={styles.container}>
          <AnimeCard animeData={animeList.data}>
          </AnimeCard>
    </div>
  );
}
