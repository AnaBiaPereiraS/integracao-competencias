export const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response);
    }
    return response;
};