import { useState, useEffect } from "react";
import axios from "axios";
import Revenue from "./revenue";
import "../../styles/components/revenue/higherCalorieRevenues.css";

export default function LowerCalorieRevenues() {
    const [lowerCalorieRevenues, setLowerCalorieRevenues] = useState([]);
    const [update, setUpdate] = useState(false);

    const handleClick = (idx) => {
        const newRevenues = [...lowerCalorieRevenues];
        newRevenues[idx].open = !newRevenues[idx].open;
        setLowerCalorieRevenues(newRevenues);
        setUpdate(!update);
    };

    async function fetchLowerCalorieRevenues() {
        try {
            const response = await axios.get(
                "http://localhost:3000/revenue/lowerCalorieRevenues"
            );
            setLowerCalorieRevenues(response.data);
        } catch (error) {
            console.error("Erro ao buscar a receita com menor caloria:", error);
        }
    }

    useEffect(() => {
        fetchLowerCalorieRevenues();
    }, []);

    return (
        <div id="lower-calorie-revenues">
            <h1 className="title">{`Receita${
                lowerCalorieRevenues.length > 1 ? "s" : ""
            } com menor quantidade de calorias`}</h1>
            <section id="revenues-grid">
                {lowerCalorieRevenues.map((revenue, idx) => (
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
