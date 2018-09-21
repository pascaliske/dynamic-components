/**
 * Converts the first letter of the given string to upper case.
 *
 * @param value - The string to be converted
 * @returns - The string with an upper cased first letter.
 */
export function upperFirst([first, ...rest]: string): string {
    return [first.toUpperCase(), ...rest].join('')
}

/**
 * Converts the given string to camel case.
 * @param value
 */
export function camelCase(value: string) {
    const divider = (chars = ['-', '_', '.', ' ']) => {
        for (const char of chars) {
            if (value.includes(char)) {
                return char
            }
        }
    }

    return value.split(divider()).reduce((result, word, index) => {
        return result + (word ? (index ? upperFirst(word.toLowerCase()) : word.toLowerCase()) : '')
    }, '')
}
