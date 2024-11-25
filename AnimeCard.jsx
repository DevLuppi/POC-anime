import React from "react";
import styles from "./page.module.css";

export default function AnimeCard({ animeData }) {
  return (
    <div className={styles.vitrineAnimesWrapper}>
      {animeData?.map((anime) => (
        <div className={styles.card} key={anime.mal_id}>
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
          <h3>{anime.title}</h3>
          <p>{anime.synopsis}</p>
          <a href={anime.url} target="_blank" rel="noopener noreferrer">
            Ver mais
          </a>
        </div>
      ))}
    </div>
  );
}
