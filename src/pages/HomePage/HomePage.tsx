// import { useEffect, useState } from "react";
// import { fetchTrendingMovies } from "../../service/moviesApi";
import css from "./HomePage.module.css";
// import { Movie } from "@/types/types";

const HomePage = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getTrendingMovies = async (): Promise<void> => {
//       try {
//         const results: Movie[] = await fetchTrendingMovies();
//         setMovies(results);
//       } catch (error) {
//         setError(
//           `Failed to fetch trending movies: ${(error as Error).message}`
//         );
//       }
//     };
//     getTrendingMovies();
//   }, []);
  return (
    <div className={css.holidayTime}>
      <h1 className={css.titleHoliday}>HolidayTime</h1>
      <h2 className={css.subTitle}>Автентичний відпочинок серед українського колориту<span className={css.spanTitle}>!</span></h2>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    </div>
  );
};

export default HomePage;
