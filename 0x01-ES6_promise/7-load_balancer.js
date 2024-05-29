export default function loadBalancer(downloadFromChina, downloadFromUS) {
  return Promise.race([downloadFromChina, downloadFromUS]).then((i) => i);
}
