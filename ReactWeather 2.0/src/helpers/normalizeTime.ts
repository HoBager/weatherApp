export default function normalizeTime(time: number) {
  const date = new Date(time * 1000);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);

  return hours + ":" + minutes;
}
