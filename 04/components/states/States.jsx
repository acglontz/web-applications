import React, { useState } from 'react';
import './States.css';

function States() {
    const [filter, setFilter] = useState('');

    const statesList = models.states();

    const filteredStates = statesList.filter((state) => state.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h2>Search for a State</h2>
            <input
                type="text"
                placeholder="Enter a state name"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />
            <p>Filter: {filter}</p>
            {filteredStates.length === 0 ? (
                <p>No matching states found.</p>
            ) : (
                <ul>
                    {filteredStates.map((state) => (
                        <li key={state}>{state}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default States;
