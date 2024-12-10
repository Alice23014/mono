import { Link } from "react-router-dom";

import styles from "./breadcrumbs.module.sass";

interface BreadcrumbsProps {
  textSecondBreadcrumb: string;
  urlSecondBreadcrumb: string;
  IsThridBreadcrumb?: boolean;
  textTrirdBreadcrumb?: string;
  urlThirdBreadcrumb?: string;
}
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  textSecondBreadcrumb,
  urlSecondBreadcrumb,
}) => {
  return (
    <section className={styles.breadcrumbs}>
      <div className={`container ${styles.breadcrumbsContainer}`}>
        <ul className={styles.breadcrumbsList}>
          <li className={styles.breadcrumbsItem}>
            <Link to="/">Главная</Link>
          </li>
          <li className={styles.breadcrumbsItem}>
            <Link to={`${urlSecondBreadcrumb}`}>{textSecondBreadcrumb}</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
