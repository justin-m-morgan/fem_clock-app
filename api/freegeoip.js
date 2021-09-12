const root_url = "https://freegeoip.app/json/"

export default {
    root: root_url

}
export function getLocation() {
    return fetch(root_url).then(res => res.json())
}