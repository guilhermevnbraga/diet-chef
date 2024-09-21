import { useState, useEffect } from "react";
import axios from "axios";

export default function Revenues({ data }) {
    const [revenues, setRevenues] = useState([]);
    const [update, setUpdate] = useState(false);

    const fetchRevenues = async () => {
        try {
            const response = await axios.get("http://localhost:3000/revenue");
            setRevenues(response.data);
        } catch (error) {
            console.error("Erro ao buscar receitas:", error);
        }
    };

    useEffect(() => {
        fetchRevenues();
    }, []);

    useEffect(() => {
        if (data.revenue) setRevenues(data.revenue);
    }, [data]);

    const handleClick = (idx) => {
        const newRevenues = [...revenues];
        newRevenues[idx].open = !newRevenues[idx].open;
        setRevenues(newRevenues);
        setUpdate(!update);
    };

    return (
        <section className="grid grid-cols-5 gap-4 w-full p-3">
            {revenues.map((revenue, idx) => (
                <button
                    className="h-full flex"
                    onClick={() => handleClick(idx)}
                    key={idx}
                >
                    <article
                        key={revenue.id}
                        className="bg-gray-200 p-4 text-left w-full"
                    >
                        <h1 className="font-bold text-xl text-center mb-6">
                            {revenue.name}
                        </h1>
                        {revenue.open && (
                            <>
                                <section className="text-sm mb-3">
                                    <p className="text-lg mb-1">
                                        Ingredientes:
                                    </p>
                                    {revenue.ingredients.map(
                                        (ingredient, idx) => {
                                            if (
                                                idx ===
                                                revenue.ingredients.length - 1
                                            ) {
                                                return (
                                                    <span>{`${ingredient}.`}</span>
                                                );
                                            }
                                            return <p>{`${ingredient};`}</p>;
                                        }
                                    )}
                                </section>
                                <section className="text-sm mb-3">
                                    <p className="text-lg mb-1">Preparo:</p>
                                    {revenue.instructions.map(
                                        (instruction, idx) => {
                                            if (
                                                idx ===
                                                revenue.instructions.length - 1
                                            ) {
                                                return (
                                                    <span>{`${instruction}.`}</span>
                                                );
                                            }
                                            return <p>{`${instruction};`}</p>;
                                        }
                                    )}
                                </section>
                            </>
                        )}
                        <p className="text-sm">{`Calorias: ${revenue.calories} Kcal`}</p>
                        <p className="text-sm">{`Serve: ${
                            revenue.servings > 1
                                ? `${revenue.servings} pessoas`
                                : `${revenue.servings} pessoa`
                        }`}</p>
                    </article>
                </button>
            ))}
        </section>
    );
}
