const {alias} = require('react-app-rewire-alias')

module.exports = function(config, env) {
    alias({
        '@components': 'src/components',
        '@routes': 'src/routes',
        '@store': 'src/store',
        '@styles': 'src/styles',
    })(config)

    return config
}

