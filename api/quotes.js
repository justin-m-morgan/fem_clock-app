const root_url = "http://api.quotable.io"
const all = "/quotes"
const random = "/random"

export default {
    root: root_url,
    all: root_url + all,
    random: root_url + random
}

export function getRandomQuote() {
    return fetch(root_url + random).then(res => res.json())
}