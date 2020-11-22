export const getFormattedDate = () => {
    const date = new Date();
    const dateFormatted = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return dateFormatted;
}

export const unlessFormattedDate = (datePublished) => {
    const dateNow = getFormattedDate();
    const dateOfThePublication = datePublished;

    const onlyDateNow = dateNow.split('T')[0];
    const onlyDateOfThePublication = dateOfThePublication.split('T')[0];

    const onlyHoursNow = dateNow.split('T')[1];
    const onlyHoursOfThePublication = dateOfThePublication.split('T')[1];

    if (onlyDateNow.split('-')[0] === onlyDateOfThePublication.split('-')[0]) {
        if (onlyDateNow.split('-')[1] === onlyDateOfThePublication.split('-')[1]) {
            const calcDay = Number(onlyDateNow.split('-')[2]) - Number(onlyDateOfThePublication.split('-')[2])

            if (calcDay === 1) {
                return `Yesterday at ${onlyHoursOfThePublication}`;
            }
        }
    }

    if (onlyDateNow !== onlyDateOfThePublication) {
        return onlyDateOfThePublication + " at " + onlyHoursOfThePublication;
    }

    const calcHours = Number(onlyHoursNow.split('-')[0]) - Number(onlyHoursOfThePublication.split('-')[0])

    if (calcHours < 1 || calcHours > 23) {
        return onlyDateOfThePublication + " at " + onlyHoursOfThePublication;
    }

    return `${calcHours} hours ago`
}
