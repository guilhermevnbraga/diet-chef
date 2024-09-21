import { useState, useEffect } from "react";
import axios from "axios";
import Revenue from "./revenue";
import Day from "../menu/day";

export default function Revenues({ data }) {
    const [revenues, setRevenues] = useState([]);
    const [menu, setMenu] = useState([]);
    const [update, setUpdate] = useState(false);

    const handleClick = (idx) => {
        const newRevenues = [...revenues];
        newRevenues[idx].open = !newRevenues[idx].open;
        setRevenues(newRevenues);
        setUpdate(!update);
    };

    const fetchRevenues = async () => {
        try {
            const response = await axios.get("http://localhost:3000/revenue");
            setRevenues(response.data);
        } catch (error) {
            console.error("Erro ao buscar receitas:", error);
        }
    };

    const fetchMenu = async () => {
        try {
            const response = await axios.get("http://localhost:3000/menu");
            setMenu(response.data);
        } catch (error) {
            console.error("Erro ao buscar menu:", error);
        }
    };

    useEffect(() => {
        fetchRevenues();
        fetchMenu();
    }, []);

    useEffect(() => {
        if (data.revenue) setRevenues(data.revenue);
        if (data.menu) setMenu(data.menu);
    }, [data]);

    return (
        <div className="mb-12">
            <h1 className="font-bold text-5xl text-center mb-6">
                {data.daySearch ? "Menu" : "Todas as Receitas"}
            </h1>
            <section className="grid grid-cols-4 gap-4 w-full p-3">
                {data.daySearch ? (
                    menu.length > 0 ? (
                        menu.map((day, idx) => (
                            <Day day={day} idx={idx} key={idx} />
                        ))
                    ) : (
                        <Day />
                    )
                ) : revenues.length > 0 ? (
                    revenues.map((revenue, idx) => (
                        <Revenue
                            revenue={revenue}
                            idx={idx}
                            handleClick={handleClick}
                            key={idx}
                        />
                    ))
                ) : (
                    <Revenue />
                )}
            </section>
        </div>
    );
}
