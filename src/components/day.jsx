export default function Day({ day, idx }) {
    if (day)
        return (
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
        );

    return (
        <article key={idx} className="bg-gray-200 p-4 text-left w-full">
            <h1 className="font-bold text-xl text-center mb-6">
                Dia inexistente
            </h1>
        </article>
    );
}
