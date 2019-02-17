var config = function() {
    let env = "production";
    let host = "";
    let urls = {
        "home":                         host + "/",
    };

    return {urls: urls, env: env};
}();

export default config;