export const isCharacter = (value) => /^[a-zA-Zа-яА-ЯёЁ]{1,}$/i.test(value);

export const isPhoneNumber = (value) => /^[0-9]{12}$/i.test(value);

export const isNumber = (value) => /^[0-9]{1,}$/i.test(value);