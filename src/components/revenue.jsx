export default function Revenue({ revenue, idx, handleClick }) {
    if (revenue)
        return (
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
                                {revenue.ingredients.map((ingredient, idx) => {
                                    if (
                                        idx ===
                                        revenue.ingredients.length - 1
                                    ) {
                                        return <span>{`${ingredient}.`}</span>;
                                    }
                                    return <p>{`${ingredient};`}</p>;
                                })}
                            </section>
                            <section className="text-sm mb-3">
                                <h2 className="text-lg mb-1 font-medium">
                                    Preparo:
                                </h2>
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
        );

    return (
        <article className="bg-gray-200 p-4 text-left w-full">
            <h1 className="font-bold text-xl text-center mb-6">
                Nenhuma receita encontrada
            </h1>
        </article>
    );
}
