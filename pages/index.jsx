import Head from "next/head"
import { useState } from "react";
import { useQuery } from "react-query";
import { getLocation } from "../api/freegeoip";
import { getTime } from "../api/worldtime";
import { getRandomQuote } from "../api/quotes";
import Background from "../components/Background";
import FadeIf from "../components/interactions/FadeIf";
import SlideUpIf from "../components/interactions/SlideUpIf";
import MoreButton from "../components/MoreButton";
import MorePanel from "../components/MorePanel";
import PrimaryPanel from "../components/PrimaryPanel";
import Quote from "../components/Quote";
import Time from "../components/Time";
import MaxWidth from "../components/structural/MaxWidth";
import {
  TopThird,
  MidThird,
  BottomThird,
} from "../components/structural/Sections";

export default function Home(props) {
  const [morePanelShowing, setMorePanelShowing] = useState(false);

  const { data: timeData } = useQuery("time", getTime, {
    refetchInterval: 60 * 1000,
    initialData: {},
  });
  const { data: locationData } = useQuery("location", getLocation, {
    refetchInterval: 15 * 60 * 1000,
    initialData: {},
  });
  const { data: quoteData, refetch } = useQuery("quote", getRandomQuote, {
    refetchInterval: 3 * 60 * 1000,
    initialData: {},
  });

  return (
    <Background>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;500;800&display=swap"
          rel="stylesheet"
        />

        <title>FEM Clock</title>
        <link rel="icon" type="image/png" href="/assets/favicon-32x32.png" />
      </Head>
      <MaxWidth>
        <TopThird>
          <FadeIf predicate={morePanelShowing}>
            <Quote quoteData={quoteData} refetch={refetch} />
          </FadeIf>
        </TopThird>

        <MidThird>
          <Time
            datetime={timeData.datetime}
            abbreviation={timeData.abbreviation}
            city={locationData.city}
            region={locationData.region_code}
          />
          <MoreButton
            morePanelShowing={morePanelShowing}
            toggleMorePanelShowing={toggleMorePanelShowing(setMorePanelShowing)}
          />
        </MidThird>
        <BottomThird>
          <MorePanel
            timezone={timeData.timezone}
            day_of_year={timeData.day_of_year}
            day_of_week={timeData.day_of_week}
            week_number={timeData.week_number}
          />
        </BottomThird>
      </MaxWidth>
    </Background>
  );
}

function toggleMorePanelShowing(setShowing) {
  return function (showing) {
    return function () {
      setShowing(!showing);
    };
  };
}
