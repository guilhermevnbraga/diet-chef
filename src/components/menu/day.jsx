import "../../styles/components/menu/day.css";

export default function Day({ day, idx }) {
    if (day)
        return (
            <article key={idx} className="day-article">
                <h1 className="day-title">{day.day}</h1>
                <section className="meal-section">
                    <h2 className="meal-title">Café da manhã:</h2>
                    <p>{`Prato: ${day.meals.breakfast.name}`}</p>
                    <p>{`Calorias: ${day.meals.breakfast.calories} Kcal`}</p>
                    <p>{`Serve: ${
                        day.meals.breakfast.serving_size > 1
                            ? `${day.meals.breakfast.serving_size} pessoas`
                            : `${day.meals.breakfast.serving_size} pessoa`
                    }`}</p>
                </section>
                <section className="meal-section">
                    <h2 className="meal-title">Almoço:</h2>
                    <p>{`Prato: ${day.meals.lunch.name}`}</p>
                    <p>{`Calorias: ${day.meals.lunch.calories} Kcal`}</p>
                    <p>{`Serve: ${
                        day.meals.lunch.serving_size > 1
                            ? `${day.meals.lunch.serving_size} pessoas`
                            : `${day.meals.lunch.serving_size} pessoa`
                    }`}</p>
                </section>
                <section>
                    <h2 className="meal-title">Jantar:</h2>
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
        <article key={idx} className="day-article">
            <h1 className="day-title">Dia inexistente</h1>
        </article>
    );
}
