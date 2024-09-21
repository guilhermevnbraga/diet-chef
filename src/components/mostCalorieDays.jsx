import { useState, useEffect } from "react";
import axios from "axios";
import Day from "./day";

export default function MostCalorieDays() {
    const [mostCalorieDays, setMostCalorieDays] = useState([]);

    async function fetchMostCalorieDays() {
        try {
            const response = await axios.get(
                "http://localhost:3000/menu/mostCalorieDays"
            );
            setMostCalorieDays(response.data);
        } catch (error) {
            console.error("Erro ao buscar a receita com menor caloria:", error);
        }
    }

    useEffect(() => {
        fetchMostCalorieDays();
    }, []);

    return (
        <div className="mb-12">
            <h1 className="font-bold text-5xl text-center mb-6">{`Dia${
                mostCalorieDays.length > 1 ? "s" : ""
            } com maior quantidade de calorias`}</h1>
            <section
                className={`grid grid-flow-col grid-cols-${
                    mostCalorieDays.length > 4 ? "4" : mostCalorieDays.length
                } gap-4 w-full p-3`}
            >
                {mostCalorieDays.map((day, idx) => (
                    <Day day={day} idx={idx} key={idx} />
                ))}
            </section>
        </div>
    );
}
