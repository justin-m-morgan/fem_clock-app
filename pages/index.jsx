import Head from "next/head"

import { useState } from 'react'
import { Background } from "../components/Background"
import CurrentTimeZone from "../components/CurrentTimeZone"
import DayOfWeek from "../components/DayOfWeek"
import DayOfYear from "../components/DayOfYear"
import Greeting from "../components/Greeting"
import Location from "../components/Location"
import { LowerPortion } from "../components/LowerPortion"
import MoreButton from "../components/MoreButton"
import MorePanel from "../components/MorePanel"
import PrimaryPanel from "../components/PrimaryPanel"
import Quote from "../components/Quote"
import Time from "../components/Time"
import { TextBlock } from "../components/ui/TextBlock"
import WeekNumber from "../components/WeekNumber"

export default function Home({ book }) {
  const [worldTime, setWorldTime] = useState(null)

  const handleGetWorldTime = () => {
    // Client-side request are mocked by `mocks/browser.js`.
    fetch("http://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then(setWorldTime)
  }

  return (
    <Background>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;500;800&display=swap" rel="stylesheet" />

        <title>FEM Clock</title>
        <link rel="icon"
          type="image/png"
          href="/assets/favicon-32x32.png" />
      </Head>

      <PrimaryPanel>
        <Quote />

        <LowerPortion>
          <Greeting />
          <Time />
          <Location />
        </LowerPortion>
        <MoreButton />
      </PrimaryPanel>
      <MorePanel>
        <CurrentTimeZone />
        <DayOfYear />
        <DayOfWeek />
        <WeekNumber />
      </MorePanel>
    </Background>

  )
}
