import { useState, useEffect } from "react";
import axios from "axios";
import Revenue from "./revenue";

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
        <div className="mb-12">
            <h1 className="font-bold text-5xl text-center mb-6">{`Receita${
                easiestRevenues.length > 1 ? "s" : ""
            } mais simples`}</h1>
            <section
                className={`grid grid-flow-col grid-cols-${
                    easiestRevenues.length > 4
                        ? "4"
                        : easiestRevenues.length
                } gap-4 w-full p-3`}
            >
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
