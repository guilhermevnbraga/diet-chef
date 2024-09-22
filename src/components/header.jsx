import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import "../styles/components/header.css";

export default function Header({ setData }) {
    const [daySearch, setDaySearch] = useState(false);
    const [search, setSearch] = useState("");

    const fetchRevenueSearch = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/revenue${
                    search && `/name/${search.toLowerCase()}`
                }`
            );
            setData((prev) => ({ ...prev, revenue: response.data }));
        } catch (error) {
            console.error("Erro ao buscar receita:", error);
        }
    };

    const fetchDaySearch = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/menu${
                    search && `/day/${search.toLowerCase()}`
                }`
            );
            setData((prev) => ({ ...prev, menu: response.data }));
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao buscar dia:", error);
        }
    };

    return (
        <header id="header-container">
            <h1 id="app-name">Diet Chef</h1>
            <section id="search-container">
                <MagnifyingGlassIcon className="icon" />
                <input
                    id="search-input"
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
            </section>
            <section id="button-container">
                <button
                    className="toggle-button"
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
            </section>
        </header>
    );
}
