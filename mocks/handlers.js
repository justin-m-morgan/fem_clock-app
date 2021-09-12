import { rest } from 'msw'
import quotes from "../api/quotes"
import worldtime from "../api/worldtime"
import freegeoip from "../api/freegeoip"
import worldclock_get from "./responses/worldtimeapi_get.json"
import freegeoip_get from "./responses/freegeoip_get.json"
import quotes_get from "./responses/quotes_get.json"

export const handlers = [
  rest.get(worldtime.root, (_req, res, ctx) => {
    return res(
      ctx.json(worldclock_get)
    )
  }),
  rest.get(freegeoip.root, (_req, res, ctx) => {
    return res(
      ctx.json(freegeoip_get)
    )
  }),
  rest.get(quotes.random, (_req, res, ctx) => {
    return res(
      ctx.json(pickRandom(quotes_get))
    )
  }),
  rest.get("*", () => {})
]


function pickRandom(object) {
  let list = object.results
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}