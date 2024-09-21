import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import axios from "axios";

export default function Header({ setData }) {
    const [daySearch, setDaySearch] = useState(false);
    const [search, setSearch] = useState("");
    const [toggleSearch, setToggleSearch] = useState(false);

    const fetchRevenueSearch = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/revenue/name/${search.toLowerCase()}`
            );
            setData((prev) => ({ ...prev, revenue: response.data }));
        } catch (error) {
            console.error("Erro ao buscar receita:", error);
        }
    };

    const fetchDaySearch = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/menu/day/${search.toLowerCase()}`
            );
            setData((prev) => ({ ...prev, menu: response.data }));
        } catch (error) {
            console.error("Erro ao buscar dia:", error);
        }
    };

    return (
        <header className="flex bg-red-600 px-3 text-white justify-between p-3">
            <h1 className="font-bold text-2xl w-1/3">Diet Chef</h1>
            <input
                className="focus:outline-none rounded px-1 w-1/3 text-black"
                placeholder={`Pesquise ${
                    daySearch ? "um dia..." : "uma receita..."
                }`}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        if (daySearch) fetchDaySearch();
                        else fetchRevenueSearch();
                    }
                }}
            />
            <button
                className="flex items-center w-1/3 justify-end font-medium text-lg"
                onClick={() => {
                    setData((prev) => ({
                        ...prev,
                        daySearch: !daySearch,
                    }));
                    setDaySearch(!daySearch);
                }}
            >
                {daySearch
                    ? "Mostrar todas as receitas"
                    : "Mostrar os menus diários"}
            </button>
        </header>
    );
}
