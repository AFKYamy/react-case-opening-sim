import { useState } from 'react'
import './core/css/App.css'
import AppHeader, { type AppView } from './core/components/header/AppHeader'
import CaseOpeningView from './features/Case/views/CaseOpeningView'
import InventoryView from './features/Inventory/views/InventoryView'

function App() {
    const [activeView, setActiveView] = useState<AppView>("case");

    return (
        <div className="min-h-screen bg-bg text-text">
            <AppHeader activeView={activeView} onNavigate={setActiveView} />

            <main>
                {activeView === "case" ? <CaseOpeningView /> : <InventoryView />}
            </main>
        </div>
    )
}

export default App
