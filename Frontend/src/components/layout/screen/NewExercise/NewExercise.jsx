import { useMutation } from '@tanstack/react-query';
import { ExerciseService } from '../../../../services/exercise/exercise.service.js';
import Layout from '../../Layout.jsx';
import { useForm, Controller } from 'react-hook-form';
import Loader from '../../../UI/Loader.jsx';
import cn from 'clsx';
import Field from '../../../UI/field/Field.jsx';
import Button from '../../../UI/Button/Button.jsx';
import Alert from '../../../UI/alert/Alert.jsx';
import styles from './NewExercise.module.scss';
import { getIconPath } from './icon-path.util.js';

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back'];

const NewExercise = () => {
  const { mutate, reset, handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const { isSuccess, error, isLoading } = useMutation(['create exercise'], body => ExerciseService.create(body), {
    onSuccess: () => {
      reset();
    }
  });

  const onSubmit = data => {
    mutate(data);
  };

  return (
    <>
      <Layout bgImage='public/new-exercise.jfif' heading='Создание нового упражнения' backLink='/new-workout' />
      <div className="wrapper_inner_page">
        {error && <Alert type='error' text={error} />}
        {isSuccess && <Alert type='success' text='Упражнение создано' />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.name?.message}
            name="name"
            register={control.register}
            options={{ required: "Такое упражнение уже есть" }}
            type="text"
            placeholder="Название"
          />

          <Field
            error={errors?.times?.message}
            name="times"
            register={control.register}
            options={{
              valueIsNumber: true,
              validate: (value) => value > 0,
              required: 'Это значение уже указано'
            }}
            placeholder="Количество"
          />

 <Controller
  name='iconPath'
  control={control}
  defaultValue="" // Добавлено начальное значение
  render={({ field: { value, onChange } }) => {
    console.log(value);
    return (
      <div className={styles.images}>
        {data.map(name => (
          <img
            key={`ex img ${name}`}
            src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(name)}`}
            alt={name}
            className={cn({ [styles.active]: value === getIconPath(name) })}
            onClick={() => onChange(name)}
            draggable={false}
            height='45'
          />
        ))}
      </div>
    );
  }}
/>


          {errors?.iconPath && <div className='error'>{errors.iconPath.message}</div>}

          <Button>
            Создать
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewExercise;
