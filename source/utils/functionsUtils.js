export const getFormattedDate = () => {
    const date = new Date();
    const dateFormatted = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return dateFormatted;
}

export const unlessFormattedDate = (datePublished) => {
    /**2020-11-21T11:53:19 */

    const dateNow = getFormattedDate();
    const dateOfThePublication = datePublished;

    const onlyDateNow = dateNow.split('T')[0];
    const onlyDateOfThePublication = dateOfThePublication.split('T')[0];
}
