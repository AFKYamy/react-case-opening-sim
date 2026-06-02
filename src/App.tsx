import './core/css/App.css'
import AppHeader from './core/components/AppHeader'
import CaseOpeningView from './features/Case/views/CaseOpeningView'

function App() {

    return (
        <div className="min-h-screen bg-bg text-text">
            <AppHeader />

            <main>
                <CaseOpeningView />
            </main>
        </div>
    )
}

export default App
