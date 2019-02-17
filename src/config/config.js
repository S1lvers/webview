/**
 * Keys for switching state of project's routes:
 * DEV - development
 * PROD - production
 */

var environment = "PROD";

const config = {
    "PROD": require("./prod")
}

export default config[environment].default;