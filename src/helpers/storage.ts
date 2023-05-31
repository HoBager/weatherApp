import { IStats } from "../store/slices/statistics";

const STORAGE_KEYS = {
  LAST_CITY: "lastCity",
  FAVORITE_CITIES: "favoriteCities",
  STATS: "stats",
};

const storage = {
  getLastCity() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEYS.LAST_CITY) ?? "Moscow"
      );
    } catch (error) {
      console.log(error);
      return "Moscow";
    }
  },
  setLastCity(list: string) {
    try {
      return localStorage.setItem(STORAGE_KEYS.LAST_CITY, JSON.stringify(list));
    } catch (error) {
      console.log(error);
    }
  },
  getFavoriteCities() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEYS.FAVORITE_CITIES) ?? "[]"
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  setFavoriteCities(list: string[]) {
    try {
      return localStorage.setItem(
        STORAGE_KEYS.FAVORITE_CITIES,
        JSON.stringify(list)
      );
    } catch (error) {
      console.log(error);
    }
  },
  setStatistics(stats: IStats) {
    try {
      return localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    } catch (error) {
      console.log(error);
    }
  },
  getStatistics(): IStats {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.STATS) ?? "{}");
    } catch (error) {
      console.log(error);
      return {};
    }
  },
};

export default storage;
