const root_url = "https://worldtimeapi.org/api/ip/";

export default {
  root: root_url,
};

export function getTime() {
  return fetch(root_url).then((res) => res.json());
}
