// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://staging.mysummerradio.com",
  image: {
    layout: "constrained",
    objectFit: "contain",
    objectPosition: "center",
  },
});
