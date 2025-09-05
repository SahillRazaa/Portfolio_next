import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
};

interface ToastProps {
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
}

export const ShowToast = ({ type, title, message }: ToastProps) => {
  const content = (
    <div>
      <strong>{title}</strong>
      <div>{message}</div>
    </div>
  );

  switch (type) {
    case 'success':
      toast.success(content, toastOptions);
      break;
    case 'error':
      toast.error(content, toastOptions);
      break;
    case 'info':
      toast.info(content, toastOptions);
      break;
    case 'warning':
      toast.warning(content, toastOptions);
      break;
    default:
      toast(content, toastOptions);
  }
};