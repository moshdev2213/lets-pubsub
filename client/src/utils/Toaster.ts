import { toast, ToastContent, Id, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toaster {
    // Property to hold the toast ID
    private loaderToastId?: Id;

    // Function to show a loading toast
    loadingToast = (message: ToastContent): void => {
        this.loaderToastId = toast.loading(message, {
            autoClose: false,
            closeOnClick: true,
            pauseOnHover: false,
            theme: "dark",
            draggable: false,
        });
    }

    // Function to update the loading toast with a new message and type
    updateLoadingToast = (type: TypeOptions, message: ToastContent, afterToast?: () => void): void => {
        if (this.loaderToastId) {
            toast.update(this.loaderToastId, {
                render: message,
                position: "bottom-right",
                type: type,
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",
                onClose: afterToast,
            });
        }
    }

    // Function to dismiss the loading toast
    dismissLoadingToast = (): void => {
        if (this.loaderToastId) {
            toast.dismiss(this.loaderToastId);
        }
    };

    // Function to show a simple toast notification
    justToast = (type: TypeOptions, message: ToastContent, afterToast?: () => void): void => {
        toast(message, {
            position: "bottom-right",
            type: type,
            autoClose: 1300,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose: afterToast,
        });
    }
}

// Export the singleton instance of the Toaster class
export default new Toaster();
