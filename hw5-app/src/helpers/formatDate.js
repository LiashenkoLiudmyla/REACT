export const formatDateToMonthYear = (date) => {
    const dateParts = date.split('/');

    let formattedDate = []

    let month = dateParts[0];
    const year = dateParts[2].slice(-2);

    if(month.length === 1){
        month = `0${month}`
    }

    formattedDate.push(month, year)

    return formattedDate.join('/')
};

export const formatDateToDayMonth = (date) => {
    const dateParts = date.split('/');

    let formattedDate = []

    let month = dateParts[0];
    let day = dateParts[1];

    if(month.length === 1){
        month = `0${month}`
    };

    if(day.length === 1){
        day = `0${day}`
    }

    formattedDate.push(day, month)

    return formattedDate.join('.')
};