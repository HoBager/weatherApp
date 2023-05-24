export default function (list: string[], cityName: string) {
  return list.some((currentCity) => currentCity === cityName);
}
