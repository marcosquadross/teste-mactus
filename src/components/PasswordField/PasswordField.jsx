import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./PasswordField.css";

const PasswordField = ({ name, placeholder, register, errors, validate }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="password-field">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    style={{ borderColor: errors[name] ? "red" : "initial" }}
                    {...register(name, {
                        required: `${placeholder} é obrigatório`,
                        validate: validate,
                    })}
                />
                {showPassword ? (
                    <AiOutlineEyeInvisible
                        className="icon"
                        onClick={togglePasswordVisibility}
                    />
                ) : (
                    <AiOutlineEye
                        className="icon"
                        onClick={togglePasswordVisibility}
                    />
                )}
            </div>
            {errors[name] && (
                <p className="error-message">{errors[name].message}</p>
            )}
        </div>
    );
};

export default PasswordField;
