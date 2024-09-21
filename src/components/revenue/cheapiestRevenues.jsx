import { useState, useEffect } from "react";
import axios from "axios";
import Revenue from "./revenue";

export default function CheapiestRevenues() {
    const [cheapiestRevenues, setCheapiestRevenues] = useState([]);
    const [update, setUpdate] = useState(false);

    const handleClick = (idx) => {
        const newRevenues = [...cheapiestRevenues];
        newRevenues[idx].open = !newRevenues[idx].open;
        setCheapiestRevenues(newRevenues);
        setUpdate(!update);
    };

    async function fetchCheapiestRevenues() {
        try {
            const response = await axios.get(
                "http://localhost:3000/revenue/cheapiestRevenues"
            );
            setCheapiestRevenues(response.data);
        } catch (error) {
            console.error("Erro ao buscar a receita com menor caloria:", error);
        }
    }

    useEffect(() => {
        fetchCheapiestRevenues();
    }, []);

    return (
        <div className="mb-12">
            <h1 className="font-bold text-5xl text-center mb-6">{`Receita${
                cheapiestRevenues.length > 1 ? "s" : ""
            } com menor quantidade de ingredientes`}</h1>
            <section
                className={`grid grid-flow-col grid-cols-4 gap-4 w-full p-3`}
            >
                {cheapiestRevenues.map((revenue, idx) => (
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
