import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import styles from "./Thumbnail.module.scss";
import { forwardRef } from "react";

export const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div ref={ref} className={`${styles.thumbnail} ${styles.thumbnail__hover}`}>
      <Image
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        width={1920}
        height={1080}
        className={styles.thumbnail__image}
      />
      <div className={styles.thumbnail__description}>
        <p className={styles.thumbnail__description__overview}>
          {result.overview}
        </p>
        <h2 className={styles.thumbnail__description__title}>
          {result.title || result.original_name}
        </h2>
        <p
          className={`${styles.thumbnail__description__info} ${styles.thumbnail__hover}`}
        >
          {`${result?.media_type?.toUpperCase()} | ${
            result?.release_date || result?.first_air_date
          } | `}
          <ThumbUpIcon
            className={styles.thumbnail__description__info__thumbsUp}
          />
          {result?.vote_count}
        </p>
      </div>
    </div>
  );
});
