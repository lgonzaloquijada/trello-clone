/** @type {import('tailwindcss').Config} */
import { green, blue, red } from 'tailwindcss/colors';

export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    colors: {
      success: green,
      primary: blue,
      danger: red,
    }
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
];
