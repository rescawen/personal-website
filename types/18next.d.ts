import "i18next";
import en from "../src/app/translations/en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof en;
    defaultNS: "translation";
  }
}
