import { defineConfig } from "vitest/config";

const config = defineConfig({
    test: {
        globals: true,
        environment: "jsdom"
    }
})

export default config