import InputMask from "react-input-mask";
import "./InputField.css";
const InputField = ({
    type,
    name,
    placeholder,
    register,
    errors,
    validate,
}) => {

    let mask =
        type === "tel"
            ? "(99) 999999999"
            : type === "date"
            ? "99/99/9999"
            : type === "cep"
            ? "99999-999"
            : "";

    const validateData = (value) => {
        if (!value) {
            return `${placeholder} é obrigatório`;
        }
        
        if (type === "date") {
            const currentDate = new Date();
            const [day, month, year] = value.split("/").map(Number);

            const selectedDate = new Date(year, month - 1, day);

            if (year > 1000) {
                if (day < 1 || day > 31 || month < 1 || month > 12) {
                    return "Data inválida";
                } else if (
                    isNaN(selectedDate.getTime()) ||
                    selectedDate > currentDate
                ) {
                    return "Data inválida";
                }
            }
        } else if (type === "tel") {
            const onlyNumbers = value.replace(/\D/g, "");
            if (onlyNumbers.length < 10) {
                return "Número de telefone inválido";
            }
        } else if (type === "cep") {
            const onlyNumbers = value.replace(/\D/g, "");
            if (onlyNumbers.length !== 8) {
                return "CEP inválido";
            }
        }

        return true;
    };

    return (
        <div className="input-field">
            {mask ? (
                <InputMask
                    mask={mask}
                    placeholder={placeholder}
                    style={{
                        borderColor: errors[name] ? "red" : "initial",
                    }}
                    {...register(name, {
                        required: true,
                        validate: validateData,
                    })}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    style={{
                        borderColor: errors[name] ? "red" : "initial",
                    }}
                    {...register(name, {
                        required: true,
                        validate: validate,
                    })}
                />
            )}
            {errors[name] && (
                <p className="error-message">{errors[name].message}</p>
            )}
        </div>
    );
};

export default InputField;
