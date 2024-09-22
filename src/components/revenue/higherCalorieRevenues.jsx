import { useState, useEffect } from "react";
import axios from "axios";
import Revenue from "./revenue";
import "../../styles/components/revenue/higherCalorieRevenues.css";

export default function HigherCalorieRevenues() {
    const [higherCalorieRevenues, setHigherCalorieRevenues] = useState([]);
    const [update, setUpdate] = useState(false);

    const handleClick = (idx) => {
        const newRevenues = [...higherCalorieRevenues];
        newRevenues[idx].open = !newRevenues[idx].open;
        setHigherCalorieRevenues(newRevenues);
        setUpdate(!update);
    };

    async function fetchHigherCalorieRevenues() {
        try {
            const response = await axios.get(
                "http://localhost:3000/revenue/higherCalorieRevenues"
            );
            setHigherCalorieRevenues(response.data);
        } catch (error) {
            console.error("Erro ao buscar a receita com menor caloria:", error);
        }
    }

    useEffect(() => {
        fetchHigherCalorieRevenues();
    }, []);

    return (
        <div id="higher-calorie-revenues">
            <h1 className="title">{`Receita${higherCalorieRevenues.length > 1 ? "s" : ""} com maior quantidade de calorias`}</h1>
            <section id="revenues-grid">
                {higherCalorieRevenues.map((revenue, idx) => (
                    <Revenue
                        revenue={revenue}
                        idx={idx}
                        key={idx}
                        handleClick={handleClick}
                    />
                ))}
            </section>
        </div>
    );
}
