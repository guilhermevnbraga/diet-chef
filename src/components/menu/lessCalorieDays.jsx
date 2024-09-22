import { useState, useEffect } from "react";
import axios from "axios";
import Day from "./day";
import "../../styles/components/menu/lessCalorieDays.css";

export default function LessCalorieDays() {
    const [lessCalorieDays, setLessCalorieDays] = useState([]);

    async function fetchLessCalorieDays() {
        try {
            const response = await axios.get("http://localhost:3000/menu/lessCalorieDays");
            setLessCalorieDays(response.data);
        } catch (error) {
            console.error("Erro ao buscar a receita com menor caloria:", error);
        }
    }

    useEffect(() => {
        fetchLessCalorieDays();
    }, []);

    return (
        <div className="less-calorie-days">
            <h1 className="title">{`Dia${lessCalorieDays.length > 1 ? "s" : ""} com menor quantidade de calorias`}</h1>
            <section className="grid-section">
                {lessCalorieDays.map((day, idx) => (
                    <Day day={day} idx={idx} key={idx} />
                ))}
            </section>
        </div>
    );
}
