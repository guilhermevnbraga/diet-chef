import { useState, useEffect } from "react";
import axios from "axios";
import Day from "./day";
import "../../styles/components/menu/mostCalorieDays.css";

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
        <div className="most-calorie-days">
            <h1 className="title">{`Dia${
                mostCalorieDays.length > 1 ? "s" : ""
            } com maior quantidade de calorias`}</h1>
            <section className="grid-section">
                {mostCalorieDays.map((day, idx) => (
                    <Day day={day} idx={idx} key={idx} />
                ))}
            </section>
        </div>
    );
}
