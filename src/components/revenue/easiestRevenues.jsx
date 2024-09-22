import { useState, useEffect } from "react";
import axios from "axios";
import Revenue from "./revenue";
import "../../styles/components/revenue/easiestRevenues.css";

export default function EasiestRevenues() {
    const [easiestRevenues, setEasiestRevenues] = useState([]);
    const [update, setUpdate] = useState(false);

    const handleClick = (idx) => {
        const newRevenues = [...easiestRevenues];
        newRevenues[idx].open = !newRevenues[idx].open;
        setEasiestRevenues(newRevenues);
        setUpdate(!update);
    };

    async function fetchEasiestRevenues() {
        try {
            const response = await axios.get(
                "http://localhost:3000/revenue/easiestRevenues"
            );
            setEasiestRevenues(response.data);
        } catch (error) {
            console.error("Erro ao buscar a receita com menor caloria:", error);
        }
    }

    useEffect(() => {
        fetchEasiestRevenues();
    }, []);

    return (
        <div id="easiest-revenues">
            <h1 className="title">{`Receita${easiestRevenues.length > 1 ? "s" : ""} mais simples`}</h1>
            <section id="revenues-grid">
                {easiestRevenues.map((revenue, idx) => (
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
