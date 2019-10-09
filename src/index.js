import SuiButton from "./components/SuiButton";

export default {
    // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("sui-button", SuiButton);
  }
};
