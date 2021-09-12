const root_url = "http://worldtimeapi.org/api/ip"

export default {
    root: root_url
}

export function getTime() {
    return fetch(root_url).then(res => res.json())
}