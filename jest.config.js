module.exports = {
    testEnvironment: 'node',

    setupFilesAfterEnv: [
        'jest-extended',
        './utils/customMatchers.js'
    ],

    transform: {
        '^.+\\.js$': 'babel-jest'
    },

    testMatch: [
        '**/__tests__/**/*.js',
        '**/?(*.)+(spec|test).js'
    ]
}
