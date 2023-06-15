import { useState } from "react";

export const useNewWorkout = () => {
    const [error, setError] = useState(null);
    const [name, setName] = useState("");
    const [options, setOptions] = useState({});

    const handleSubmit = (data) => {
        // Обработка отправки формы и обновление состояния по необходимости
    };

    return {
        error,
        name,
        options,
        handleSubmit,
    };
};
