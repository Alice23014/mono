import { FormComponent } from "../../../shared/UI/form/form";
import styles from "./contact.module.sass"

export const Contact = () =>{
    return (
      <section className={styles.contact} id="contact">
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.contactInfo}>
            <a className={styles.contactInfoPhone} href="tel:89034679851">
              8 (903) 467 98 51
            </a>
            <a
              className={styles.contactInfoEmail}
              href="mailto:info@monevac.ru"
            >
              info@monevac.ru
            </a>
            <p className={styles.contactInfoText}>
              Полное наименование: <br />
              Общество с ограниченной ответственностью «МОНЕВАК» Сокращенное
              наименование: ООО «МОНЕВАК»
            </p>
            <p className={styles.contactInfoGrey}>
              ИНН: 3448050610 <br />
              КПП: 344801001 <br />
              ОКПО: 67354285 <br />
              ОКАТО: 18401000000 <br />
              ОГРН: 1103461002480 <br />
              Код по ОКВЭД: 51.70 <br />
              <br />
              Банк: Филиала «Ростовский» ОАО «Альфа-Банк» г Ростов на Дону{" "}
              <br />
              БИК: 046015207 <br />
              к/с: 30101810500000000207 <br />
              р/с: 40702810926090000003 <br />
              <br />
              Юридический адрес: 400080, Волгоградская обл. г. Волгоград ул.
              <br />
              Командира Рудь,14А, офис 13 <br />
              Почтовый адрес: 400080, Волгоградская обл. г. Волгоград ул.
              <br />
              Командира Рудь, 14А, офис 13
            </p>
          </div>
          <div className={styles.contactForm}>
            <h2 className={styles.contactFormTitle}>Оставлись вопросы?</h2>
            <FormComponent></FormComponent>
          </div>
        </div>
      </section>
    );
}