import Header from "./components/header";
import Revenues from "./components/revenues";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
    const [revenueAmount, setRevenueAmount] = useState(0);
	const [data, setData] = useState("");

    async function fetchRevenueAmount() {
        try {
            const response = await axios.get(
                "http://localhost:3000/revenue/revenueCount"
            );
            setRevenueAmount(response.data.revenueAmount);
        } catch (error) {
            console.error("Erro ao buscar a quantidade de receitas:", error);
        }
    }

    useEffect(() => {
        fetchRevenueAmount();
    }, []);

    return (
        <>
            <main className="min-h-screen flex flex-col">
                <Header setdata={setData} />
                <Revenues data={data} />
                <Footer />
            </main>
        </>
    );
}
