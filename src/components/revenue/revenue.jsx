import "../../styles/components/revenue/revenue.css";

export default function Revenue({ revenue, idx, handleClick }) {
    if (revenue)
        return (
            <button
                className="revenue-button"
                onClick={() => handleClick(idx)}
                key={idx}
            >
                <article className="revenue-article">
                    <h1 className="revenue-title">{revenue.name}</h1>
                    {revenue.open && (
                        <>
                            <section className="ingredients-section">
                                <h2 className="ingredients-title">
                                    Ingredientes:
                                </h2>
                                {revenue.ingredients.map((ingredient, idx) => {
                                    if (
                                        idx ===
                                        revenue.ingredients.length - 1
                                    ) {
                                        return (
                                            <span
                                                key={idx}
                                            >{`${ingredient}.`}</span>
                                        );
                                    }
                                    return <p key={idx}>{`${ingredient};`}</p>;
                                })}
                            </section>
                            <section className="instructions-section">
                                <h2 className="instructions-title">Preparo:</h2>
                                {revenue.instructions.map(
                                    (instruction, idx) => {
                                        if (
                                            idx ===
                                            revenue.instructions.length - 1
                                        ) {
                                            return (
                                                <span
                                                    key={idx}
                                                >{`${instruction}.`}</span>
                                            );
                                        }
                                        return (
                                            <p key={idx}>{`${instruction};`}</p>
                                        );
                                    }
                                )}
                            </section>
                        </>
                    )}
                    <p className="calories">{`Calorias: ${revenue.calories} Kcal`}</p>
                    <p className="servings">{`Serve: ${
                        revenue.servings > 1
                            ? `${revenue.servings} pessoas`
                            : `${revenue.servings} pessoa`
                    }`}</p>
                </article>
            </button>
        );

    return (
        <article className="revenue-article">
            <h1 className="revenue-title">Nenhuma receita encontrada</h1>
        </article>
    );
}
