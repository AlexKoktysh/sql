/* eslint-disable no-undef */
module.exports = function async(api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        env: {
            production: {
                plugins: ["react-native-paper/babel"],
            },
        },
    };
};
