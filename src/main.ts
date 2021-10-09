import App from "./App.vue";
import routes from "./routes";
import viteSSR from "vite-ssr";

export default viteSSR(App, { routes });
