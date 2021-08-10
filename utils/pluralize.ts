export default(number: Number, singularWord: String) => {
    const text = `${number}  ${singularWord}`
    return number == 1 ? text : text+'s'
}