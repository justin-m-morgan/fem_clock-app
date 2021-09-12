import Head from "next/head"

import { useQuery} from "react-query"
import { getLocation } from "../api/freegeoip"
import { getTime } from "../api/worldtime"
import { getRandomQuote } from "../api/quotes"
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
import WeekNumber from "../components/WeekNumber"

export default function Home(props) {
  const { data: timeData } = useQuery('time', getTime, {refetchInterval: (60 * 1000)}) 
  const { data: locationData } = useQuery('location', getLocation, {refetchInterval: (15 * 60 * 1000)}) 
  const { data: quoteData, refetch} = useQuery('quote', getRandomQuote, {refetchInterval: (3 * 60 * 1000)})

  return (
    
    <Background>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;500;800&display=swap" rel="stylesheet" />

        <title>FEM Clock</title>
        <link rel="icon"
          type="image/png"
          href="/assets/favicon-32x32.png" />
      </Head>

      <PrimaryPanel>
        <Quote quoteData={quoteData} refetch={refetch} />
        <LowerPortion>
          <Greeting datetime={timeData?.datetime}/>
          <Time datetime={timeData?.datetime} abbreviation={timeData?.abbreviation}/>
          <Location city={locationData?.city} region_code={locationData?.region_code} />
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
