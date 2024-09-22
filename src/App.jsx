import Header from "./components/header";
import Revenues from "./components/revenue/revenues";
import LowerCalorieRevenues from "./components/revenue/lowerCalorieRevenues";
import HigherCalorieRevenues from "./components/revenue/higherCalorieRevenues";
import CheapiestRevenues from "./components/revenue/cheapiestRevenues";
import EasiestRevenues from "./components/revenue/easiestRevenues";
import MostCalorieDays from "./components/menu/mostCalorieDays";
import LessCalorieDays from "./components/menu/lessCalorieDays";
import { useState } from "react";
import "./styles/App.css";

export default function App() {
    const [data, setData] = useState("");

    return (
        <>
            <main id="main-container">
                <Header setData={setData} />
                <Revenues data={data} />
                {data.daySearch ? (
                    <>
                        <MostCalorieDays />
                        <LessCalorieDays />
                    </>
                ) : (
                    <>
                        <LowerCalorieRevenues />
                        <HigherCalorieRevenues />
                        <CheapiestRevenues />
                        <EasiestRevenues />
                    </>
                )}
            </main>
        </>
    );
}
