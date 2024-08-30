import React from "react";

const SelectionState = ({ register, errors }) => {
    const states = [
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Distrito Federal",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins",
    ];

    return (
        <div className="selection-field">
            <select
                id="state"
                {...register("state", {
                    required: true,
                })}
                style={{ borderColor: errors["state"] ? "red" : "initial" }}
            >
                <option value="">Estado *</option>
                {states.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectionState;
