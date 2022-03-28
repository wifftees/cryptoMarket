export const reverseString = (str: string) => str.split('').reverse().join('')

export const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1)
