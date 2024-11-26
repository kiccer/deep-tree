import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils'

function msg ({ expected, received }) {
    return () => [
        `${matcherHint('.toEqualCustom')}\n`,
        '预期值:',
        `  ${printExpected(expected)}`,
        '接收到:',
        `  ${printReceived(received)}`
    ].join('\n')
}

expect.extend({
    toEqualCustom (received, expected) {
        return {
            message: msg({ received, expected }),
            pass: this.equals(received, expected)
        }
    }
})
