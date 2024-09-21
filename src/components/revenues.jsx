import { useState, useEffect } from "react";
import axios from "axios";

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
        console.log(data);
        console.log(menu);
    }, [data]);

    const handleClick = (idx) => {
        const newRevenues = [...revenues];
        newRevenues[idx].open = !newRevenues[idx].open;
        setRevenues(newRevenues);
        setUpdate(!update);
    };

    return (
        <section className={`grid grid-cols-${data.daySearch ? '4' : '5'} gap-4 w-full p-3`}>
            {data.daySearch
                ? menu.map((day, idx) => (
                      <article key={idx} className="bg-gray-200 p-4 text-left w-full">
                          <h1 className="font-bold text-xl text-center mb-6">
                              {day.day}
                          </h1>
                          <section className="mb-3 shadow-[0_3px_0_0_rgba(0,0,0,0.1)]">
                              <h2 className="text-lg mb-1 font-medium">Café da manhã:</h2>
                              <p>{`Prato: ${day.meals.breakfast.name}`}</p>
                              <p>{`Calorias: ${day.meals.breakfast.calories} Kcal`}</p>
                              <p>{`Serve: ${
                                  day.meals.breakfast.serving_size > 1
                                      ? `${day.meals.breakfast.serving_size} pessoas`
                                      : `${day.meals.breakfast.serving_size} pessoa`
                              }`}</p>
                          </section>
                          <section className="mb-3 shadow-[0_3px_0_0_rgba(0,0,0,0.1)]">
                              <h2 className="text-lg mb-1 font-medium">Almoço:</h2>
                              <p>{`Prato: ${day.meals.lunch.name}`}</p>
                              <p>{`Calorias: ${day.meals.lunch.calories} Kcal`}</p>
                              <p>{`Serve: ${
                                  day.meals.lunch.serving_size > 1
                                      ? `${day.meals.lunch.serving_size} pessoas`
                                      : `${day.meals.lunch.serving_size} pessoa`
                              }`}</p>
                          </section>
                          <section>
                              <h2 className="text-lg mb-1 font-medium">Jantar:</h2>
                              <p>{`Prato: ${day.meals.dinner.name}`}</p>
                              <p>{`Calorias: ${day.meals.dinner.calories} Kcal`}</p>
                              <p>{`Serve: ${
                                  day.meals.dinner.serving_size > 1
                                      ? `${day.meals.dinner.serving_size} pessoas`
                                      : `${day.meals.dinner.serving_size} pessoa`
                              }`}</p>
                          </section>
                      </article>
                  ))
                : revenues.map((revenue, idx) => (
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
                                          <h2 className="text-lg mb-1 font-medium">
                                              Ingredientes:
                                          </h2>
                                          {revenue.ingredients.map(
                                              (ingredient, idx) => {
                                                  if (
                                                      idx ===
                                                      revenue.ingredients
                                                          .length -
                                                          1
                                                  ) {
                                                      return (
                                                          <span>{`${ingredient}.`}</span>
                                                      );
                                                  }
                                                  return (
                                                      <p>{`${ingredient};`}</p>
                                                  );
                                              }
                                          )}
                                      </section>
                                      <section className="text-sm mb-3">
                                          <h2 className="text-lg mb-1 font-medium">
                                              h2reparo:
                                          </h2>
                                          {revenue.instructions.map(
                                              (instruction, idx) => {
                                                  if (
                                                      idx ===
                                                      revenue.instructions
                                                          .length -
                                                          1
                                                  ) {
                                                      return (
                                                          <span>{`${instruction}.`}</span>
                                                      );
                                                  }
                                                  return (
                                                      <p>{`${instruction};`}</p>
                                                  );
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
