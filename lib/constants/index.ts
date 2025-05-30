export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "shopNest";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
  "A cozy place for all your shopping needs.";
export const APP_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT = process.env.LATEST_PRODUCTS_LIMIT ?? 4;

export const signInDefault = {
  email: "",
  password: "",
};

export const signUpDefault = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
