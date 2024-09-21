import Header from "./components/header";
import Revenues from "./components/revenues";
import LowerCalorieRevenues from "./components/lowerCalorieRevenues";
import HigherCalorieRevenues from "./components/higherCalorieRevenues";
import CheapiestRevenues from "./components/cheapiestRevenues";
import EasiestRevenues from "./components/easiestRevenues";
import MostCalorieDays from "./components/mostCalorieDays";
import LessCalorieDays from "./components/lessCalorieDays";
import Footer from "./components/footer";
import { useState, useEffect } from "react";

export default function App() {
    const [data, setData] = useState("");

    return (
        <>
            <main className="min-h-screen flex flex-col">
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
                <Footer />
            </main>
        </>
    );
}
