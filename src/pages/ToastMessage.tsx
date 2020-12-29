import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default () => (
    <ToastContainer
        position="bottom-right"
        autoClose={ 5000 }
        hideProgressBar={ false }
        newestOnTop
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss={ false }
        draggable
        pauseOnHover
    />
)
