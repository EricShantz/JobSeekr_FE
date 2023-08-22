import { toast } from 'react-toastify';

export const DisplayLoginError = () => {
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