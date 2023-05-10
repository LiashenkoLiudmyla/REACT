export const getProperCardLogo = (cardType, visaLogo, masterCardLogo) => {
    return cardType === 'visa' ? visaLogo : masterCardLogo
};