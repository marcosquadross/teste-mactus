import { useForm } from "react-hook-form";
import InputField from "../../components/InputField/InputField";
import GenderSelectField from "../../components/SelectionField/GenderSelectField";
import SelectionState from "../../components/SelectionState/SelectionState";

import "./RegisterUser.css";
import PasswordField from "../../components/PasswordField/PasswordField";

export default function Register() {
    // Inicializa o hook useForm com o modo "onChange" para validação ao digitar    
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm({ mode: "onChange" });

    const handleRegister = (data) => {
        alert("Cadastro realizado com sucesso!");
        alert(JSON.stringify(data));
        console.log(data);
    };

    // Observa os valores dos campos de senha e confirmação de senha
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    return (
        <div className="Register">
            <div className="container">
                <form onSubmit={handleSubmit(handleRegister)}>
                    <h2>Cadastro</h2>
                    <InputField
                        register={register}
                        type="text"
                        name="name"
                        placeholder="Nome Completo *"
                        errors={errors}
                    />
                    <InputField
                        register={register}
                        type="email"
                        name="email"
                        placeholder="E-mail *"
                        errors={errors}
                    />
                    <InputField
                        register={register}
                        type="date"
                        name="birthdate"
                        placeholder="Data de Nascimento *"
                        errors={errors}
                    />
                    <InputField
                        register={register}
                        type="tel"
                        name="phone"
                        placeholder="Telefone *"
                        errors={errors}
                    />
                    <InputField
                        register={register}
                        type="cep"
                        name="cep"
                        placeholder="CEP *"
                        errors={errors}
                    />
                    <InputField
                        register={register}
                        type="text"
                        name="city"
                        placeholder="Cidade *"
                        errors={errors}
                    />
                    <SelectionState register={register} errors={errors} />
                    <InputField
                        register={register}
                        type="text"
                        name="street"
                        placeholder="Rua *"
                        errors={errors}
                    />
                    <InputField
                        register={register}
                        type="text"
                        name="number"
                        placeholder="Número *"
                        errors={errors}
                        validate={(value) => {
                            if (
                                value < 0 ||
                                !Number.isInteger(Number(value)) ||
                                isNaN(value)
                            ) {
                                return "Valor inválido";
                            }
                            return true;
                        }}
                    />

                    <GenderSelectField register={register} errors={errors} />
                    <PasswordField
                        name="password"
                        placeholder="Senha *"
                        register={register}
                        errors={errors}
                    />
                    <PasswordField
                        name="confirmPassword"
                        placeholder="Confirme a Senha *"
                        register={register}
                        errors={errors}
                        validate={(value) =>
                            value === password || "As senhas não coincidem"
                        }
                    />

                    <p>* Todos os campos são obrigatórios </p>
                    <div className="accept-terms">
                        <input
                            id="termsAccepted"
                            type="checkbox"
                            name="termsAccepted"
                            {...register("termsAccepted", {
                                required: true,
                            })}
                        />
                        <label>Eu aceito os termos e condições</label>
                    </div>

                    <button
                        type="submit"
                        disabled={!isValid || password !== confirmPassword}
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
