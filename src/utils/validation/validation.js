export const required = (value) => {
    return (value || typeof value === 'number' ? undefined : "The field is required");
}

export const maxLength = (max) => (value) => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined; 
}

export const minLength = (min) => (value) => {
    return value && value.length < min ? `Must be ${min} characters or more` : undefined;
}

export const email = (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
}