import { Navigate, Route, Routes } from 'react-router-dom'
import './core/css/App.css'
import AppHeader from './core/components/header/AppHeader'
import CaseOpeningView from './features/Case/views/CaseOpeningView'
import InventoryView from './features/Inventory/views/InventoryView'

function App() {
    return (
        <div className="min-h-screen bg-bg text-text">
            <AppHeader />

            <main>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/case" />} />
                    <Route path="/case" element={<CaseOpeningView />} />
                    <Route path="/inventory" element={<InventoryView />} />
                    <Route path="*" element={<Navigate replace to="/case" />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
