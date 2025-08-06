// src/main.tsx
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { store } from './app/stores'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)
