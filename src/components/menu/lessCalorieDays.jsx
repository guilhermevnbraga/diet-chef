import { useState, useEffect } from "react";
import axios from "axios";
import Day from "./day";

export default function LessCalorieDays() {
    const [lessCalorieDays, setLessCalorieDays] = useState([]);

    async function fetchLessCalorieDays() {
        try {
            const response = await axios.get(
                "http://localhost:3000/menu/lessCalorieDays"
            );
            setLessCalorieDays(response.data);
        } catch (error) {
            console.error("Erro ao buscar a receita com menor caloria:", error);
        }
    }

    useEffect(() => {
        fetchLessCalorieDays();
    }, []);

    return (
        <div className="mb-12">
            <h1 className="font-bold text-5xl text-center mb-6">{`Dia${
                lessCalorieDays.length > 1 ? "s" : ""
            } com menor quantidade de calorias`}</h1>
            <section
                className={`grid grid-flow-col grid-cols-4 gap-4 w-full p-3`}
            >
                {lessCalorieDays.map((day, idx) => (
                    <Day day={day} idx={idx} key={idx} />
                ))}
            </section>
        </div>
    );
}
