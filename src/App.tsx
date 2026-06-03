import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import './core/css/App.css'
import AppHeader from './core/components/header/AppHeader'
import { availableCases } from './data/cases'
import CaseOpeningView from './features/Case/views/CaseOpeningView'
import InventoryView from './features/Inventory/views/InventoryView'

const defaultCasePath = `/case/${availableCases[0].id}`;

function CaseOpeningRoute() {
    const { caseId } = useParams();

    return <CaseOpeningView key={caseId} />;
}

function App() {
    return (
        <div className="min-h-screen bg-bg text-text">
            <AppHeader />

            <main>
                <Routes>
                    <Route path="/" element={<Navigate replace to={defaultCasePath} />} />
                    <Route path="/case" element={<Navigate replace to={defaultCasePath} />} />
                    <Route path="/case/:caseId" element={<CaseOpeningRoute />} />
                    <Route path="/inventory" element={<InventoryView />} />
                    <Route path="*" element={<Navigate replace to={defaultCasePath} />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
