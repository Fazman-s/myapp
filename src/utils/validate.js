export const checkValidateData=(email, password)=>{
    const isEmailValid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email id is not valid";
    if(!isPasswordValid) return "Password is not valid, Minimum length = 8,add a capital letter,numbers and a special character. ";


    return null;
};