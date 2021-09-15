import Head from "next/head"
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getLocation } from "../api/freegeoip";
import { getTime } from "../api/worldtime";
import { getRandomQuote } from "../api/quotes";
import Background from "../components/Background";
import FadeIf from "../components/interactions/FadeIf";
import SlideUpIf from "../components/interactions/SlideUpIf";
import MoreButton from "../components/MoreButton";
import MorePanel from "../components/MorePanel";
import Quote from "../components/Quote";
import Time from "../components/Time";
import MaxWidth from "../components/structural/MaxWidth";
import {
  TopThird,
  MidThird,
  BottomThird,
} from "../components/structural/Sections";
import { Glassy } from "../components/ui/Glassy";
import { isNightCheck, parseDateString } from "../data/datetimes";

export default function Home(props) {
  const [morePanelShowing, setMorePanelShowing] = useState(false);
  const [isNight, setIsNight] = useState(false);

  const { data: timeData } = useQuery("time", getTime, {
    refetchInterval: 60 * 1000,
    initialData: {
      datetime: false,
      abbreviation: false,
      timezone: false,
      day_of_week: false,
      day_of_year: false,
      week_number: false,
    },
  });
  const { data: locationData } = useQuery("location", getLocation, {
    refetchInterval: 15 * 60 * 1000,
    initialData: {
      city: false,
      region_code: false,
    },
  });
  const { data: quoteData, refetch } = useQuery("quote", getRandomQuote, {
    refetchInterval: 3 * 60 * 1000,
  });

  useEffect(() => {
    isNightCheck(parseDateString(timeData.datetime))
      ? setIsNight(true)
      : setIsNight(false);
  }, [timeData]);

  return (
    <div data-theme={isNight ? "dark" : "light"}>
      <Background isNight={isNight}>
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

        <TopThird>
          <MaxWidth>
            <FadeIf predicate={morePanelShowing}>
              <Quote quoteData={quoteData} refetch={refetch} />
            </FadeIf>
          </MaxWidth>
        </TopThird>
        <SlideUpIf predicate={morePanelShowing}>
          <MaxWidth>
            <MidThird>
              <Time
                datetime={timeData.datetime}
                abbreviation={timeData.abbreviation}
                city={locationData.city}
                region={locationData.region_code}
                isNight={isNight}
                toggleNightMode={toggleNightMode(setIsNight)}
              />
              <MoreButton
                morePanelShowing={morePanelShowing}
                toggleMorePanelShowing={toggleMorePanelShowing(
                  setMorePanelShowing
                )}
              />
            </MidThird>
          </MaxWidth>

          <BottomThird>
            <Glassy isNight={isNight}>
              <MaxWidth>
                <MorePanel
                  timezone={timeData.timezone}
                  day_of_year={timeData.day_of_year}
                  day_of_week={timeData.day_of_week}
                  week_number={timeData.week_number}
                  isNight={isNight}
                />
              </MaxWidth>
            </Glassy>
          </BottomThird>
        </SlideUpIf>
      </Background>
    </div>
  );
}

function toggleMorePanelShowing(setShowing) {
  return function (showing) {
    return function () {
      setShowing(!showing);
    };
  };
}

function toggleNightMode(setIsNight) {
  return function (isNight) {
    return function () {
      setIsNight(!isNight);
    };
  };
}
