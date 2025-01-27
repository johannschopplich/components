import { defineNuxtModule, useLogger } from "@nuxt/kit";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@byjohann/ui",
    configKey: "ui",
  },
  defaults: {},
  async setup(options, nuxt) {
    const logger = useLogger("@byjohann/ui");

    // Transpile the Vue.js components
    nuxt.options.build.transpile.push("@byjohann/ui");

    // Make sure the UnoCSS Nuxt module is installed
    if (!nuxt.options.modules?.includes("@unocss/nuxt")) {
      logger.error(
        "`@byjohann/ui` requires the `@unocss/nuxt` module to be installed.",
      );
    }
  },
});
