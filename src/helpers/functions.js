export const FirstCharacterToUpperCase = (text) => {
    const toUpper = (word) => word[0].toUpperCase() + word.slice(1);
    return (
        text.split(' ')
        .map(word => toUpper(word))
        .join(' ')
    )
}