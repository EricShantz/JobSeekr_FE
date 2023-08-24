import { toast } from 'react-toastify';

export const DisplayLoginIncorrect = () => {
    return toast.error('Incorrect username or password', {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    });
}
export const DisplayLoginError = () => {
    return toast.error('Something went wrong, please try again later', {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    });
}
export const DisplaySigninError = () => {
    return toast.error('Something went wrong. Please try again later', {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    });
}
export const DisplayEmailExistsError = () => {
    return toast.error('A user with that email already exists.', {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    });
}
export const DisplayPasswordResetLinkSent = () => {
    return toast.success('A link to reset your password has been sent to your email.', {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    });
}
export const DisplayNoEmailExists = () => {
    return toast.error('No user with that email was found. Please try again.', {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    });
}
export const DisplaySomethingWentWrong = () => {
    return toast.error('Something went wrong. Please try again.', {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    });
}
