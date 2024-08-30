import React from "react";

const GenderSelectField = ({ register, errors }) => {
    return (
        <div className="selection-field">
            <select
                id="gender"
                {...register("gender", {
                    required: true,
                })}
                style={{ borderColor: errors["gender"] ? "red" : "initial" }}
            >
                <option value="">Selecione o gênero *</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
                <option value="Prefiro não dizer">Prefiro não dizer</option>
            </select>
        </div>
    );
};

export default GenderSelectField;
