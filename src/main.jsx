import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { syncAdminToken } from './utils/auth';
import App from './App.jsx';
// Try importing without the full path first - npm packages should work like this:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';
import 'slick-carousel/slick/slick.css';
import 'aos/dist/aos.css';
import '@/assets/scss/main.scss';

// Component to sync admin token on mount BEFORE rendering App
const AppWithTokenSync = () => {
    const [tokenSynced, setTokenSynced] = useState(false);
    
    useEffect(() => {
        // Sync admin token to frontend Redux on app load
        console.log('🔄 Syncing admin token before app render...');
        syncAdminToken();
        // Mark as synced immediately (sync is synchronous)
        setTokenSynced(true);
        console.log('✅ Token sync complete, rendering app');
    }, []);
    
    // Wait for token sync before rendering app
    if (!tokenSynced) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <p>Loading...</p>
        </div>;
    }
    
    return <App />;
};

createRoot(document.getElementById('root')).render(<StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <AppWithTokenSync />
            </BrowserRouter>
        </PersistGate>
    </Provider>
</StrictMode>);