import stylesLayout from "../../Layout.module.scss";
import cn from 'clsx';
import styles from "./NewWorkout.module.scss";
import Header from '../../header/Header.jsx';
import { useForm } from "react-hook-form";
import Field from "../../../UI/field/Field.jsx";
import { useNewWorkout } from "../../../../hooks/useNewWorkout.js";
import Button from "../../../UI/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const NewWorkout = () => {
    const navigate = useNavigate();
    const { error, name, options, handleSubmit: workoutHandleSubmit } = useNewWorkout();
    const { register, handleSubmit: formHandleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Обработка отправки формы
    };

    return (
        <>
            <div
                className={cn(stylesLayout.wrapper, stylesLayout.wrapper_otherPage)}
                style={{ backgroundImage: `url('/public/new-workout.jpg')`, height: 400 }}
            >
                <Header />
                <div className={styles.heading}>Создание новой тренировки</div>
            </div>
            <div className="wrapper_inner_page">
                <form onSubmit={formHandleSubmit(onSubmit)}>
                    <Field
                        error={errors?.message}
                        name="Название тренировки"
                        options={{ required: "Добавьте название" }}
                        register={register}
                        type="text"
                        placeholder="Введите название тренировки"
                    />
                    <Field
                        error={errors?.message}
                        name="Описание тренировки"
                        options={{ required: "Добавьте описание" }}
                        register={register}
                        type="text"
                        placeholder="Сколько будет подходов?"
                    />
                    <Button clickHandler={() => navigate('/new-exercise')}>Создать тренировку</Button>
                </form>
            </div>
        </>
    );
};

export default NewWorkout;
