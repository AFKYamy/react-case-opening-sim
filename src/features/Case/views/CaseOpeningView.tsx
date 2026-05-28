import React from 'react'

export default function CaseOpeningView() {
    return (
        // Game
        <div>
            {/* Case Name / Info */}
            <section>
                <h1>Operation Bravo Case</h1>
                <p>The Bravo Collection</p>
            </section>

            {/* Opening section */}
            <section>
                {/* Case Picture / Roulette */}
                <div>
                    <p>Opening...</p>
                </div>

                {/* Controls */}
                <div>
                    <button>Open for $10.18</button>
                </div>
            </section>

            {/* Case Contents */}
            <section>
                {/* Skin box */}
                <div>
                    <img src="" alt="Butterfly Knife Doppler Phase 2" />
                    <p>* Butterfly Knife</p>
                    <p>Doppler Phase 2</p>
                    <p>Factory New</p>
                </div>
            </section>

            {/* Drop Odds */}
            <section>
                {/* Button opens Modal that will show odds */}
            </section>
        </div>
    )
}