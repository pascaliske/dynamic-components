/**
 * Converts the first letter of the given string to upper case.
 *
 * @param value - The string to be converted
 * @returns The string with an upper cased first letter.
 */
export function upperFirst([first, ...rest]: string): string {
    return [first.toUpperCase(), ...rest].join('')
}

/**
 * Converts the given string to camel case.
 *
 * @param value - The non camel case string for conversion
 * @returns The camel cased string
 */
export function camelCase(value: string): string {
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

/**
 * Reverses the given array without mutating it directly.
 *
 * @param array - The original array
 * @returns The reversed version of the given array.
 */
export function reverse<T = any>(array: T[]): T[] {
    return array.slice().reverse()
}
