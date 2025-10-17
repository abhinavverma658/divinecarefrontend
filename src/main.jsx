import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import App from './App.jsx';
// Try importing without the full path first - npm packages should work like this:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';
import 'slick-carousel/slick/slick.css';
import 'aos/dist/aos.css';
import '@/assets/scss/main.scss';

createRoot(document.getElementById('root')).render(<StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
</StrictMode>);