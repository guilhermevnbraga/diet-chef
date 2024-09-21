import { useState, useEffect } from "react";
import axios from "axios";
import Revenue from "./revenue";
import Day from "./day";

export default function Revenues({ data }) {
    const [revenues, setRevenues] = useState([]);
    const [menu, setMenu] = useState([]);
    const [update, setUpdate] = useState(false);

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

    const handleClick = (idx) => {
        const newRevenues = [...revenues];
        newRevenues[idx].open = !newRevenues[idx].open;
        setRevenues(newRevenues);
        setUpdate(!update);
    };

    return (
        <section className={`grid grid-cols-4 gap-4 w-full p-3`}>
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
    );
}
