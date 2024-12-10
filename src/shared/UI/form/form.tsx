import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { useState } from "react";
import { useHookFormMask } from "use-mask-input";
import { isPhone } from "../../helpers/is-phone";
import { isName } from "../../helpers/is-name";

import cn from "classnames";

import styles from "./form.module.sass";

interface Form {
  name: string;
  phone: string;
  message: string;
  consent: boolean;
}

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Form>();

  const registerWithMask = useHookFormMask(register);

  const [consentChecked, setConsentChecked] = useState(false);
  const phoneValue = watch("phone");
  const nameValue = watch("name");

  const submit: SubmitHandler<Form> = (data) => {
    console.log("Form submitted:", data);
    reset();
    setConsentChecked(false);
  };

  const onError = (errors: FieldErrors<Form>) => {
    console.log("Form errors:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(submit, onError)}
      action=""
      className={styles.form}
    >
      <div className={styles.formField}>
        <input
          id="name"
          className={styles.formInput}
          type="text"
          {...register("name", { required: true, validate: isName })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        <label
          htmlFor="name"
          className={cn(styles.formLabel, {
            [styles.filled]: nameValue,
          })}
        >
          Ваше имя
        </label>
        {errors.name && <span>Является обязательным полем</span>}
      </div>
      <div className={styles.formField}>
        <input
          id="phone"
          type="text"
          className={styles.formInput}
          {...registerWithMask("phone", "+7 (999) 999 99 99", {
            required: true,
            validate: isPhone,
          })}
          aria-invalid={errors.phone ? "true" : "false"}
        />
        <label
          htmlFor="phone"
          className={cn(styles.formLabel, {
            [styles.filled]: phoneValue,
          })}
        >
          Ваш телефон
        </label>
        {errors.phone && <span>Является обязательным полем</span>}
      </div>
      <div className={cn(styles.formField, styles.formTextarea)}>
        <textarea
          className={styles.formInput}
          id="textarea"
          {...register("message")}
        ></textarea>
        <label htmlFor="textarea" className={styles.formLabel}>
          Ваше сообщение
        </label>
      </div>
      <div className={styles.formCheckbox}>
        <input
          className={styles.formCheckboxInput}
          type="checkbox"
          {...register("consent", { required: true })}
          checked={consentChecked}
          onChange={(e) => setConsentChecked(e.target.checked)}
        />
        <p className={styles.formCheckboxText}>
          Я подтверждаю свое согласие с политикой в отношении
          <strong> обработки персональных данных</strong>
        </p>
      </div>
      <button className={styles.formSubmit} type="submit">
        Задать вопрос
      </button>
    </form>
  );
};
