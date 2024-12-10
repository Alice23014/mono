import { Breadcrumbs } from "../views/components/breadcrumbs/breadcrumbs";
import { Contact } from "../views/components/contact/contact";
import { Map } from "../views/components/map/map";

export const Contacts = () => {
  return (
    <>
      <Breadcrumbs
        textSecondBreadcrumb={"Контакты"}
        urlSecondBreadcrumb={"/"}
      />
      <Contact />
      <Map />
    </>
  );
};
