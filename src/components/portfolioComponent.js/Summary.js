
import React, { useState } from 'react';

const Summary = () => {
    const [filter, setFilter] = useState('all');

    const renderContent = () => {
        // Here, you can decide what to render based on the filter
        // For example, show only text, images, or videos based on the filter
        switch (filter) {
            case 'text':
                return <p>Text content of Summary...</p>;
            case 'images':
                return <div>Images of Summary...</div>;
            case 'videos':
                return <div>Videos of Summary...</div>;
            default:
                return (
                    <div>
                        <p>Text content of Summary...</p>
                        <div>Images of Summary...</div>
                        <div>Videos of Summary...</div>
                    </div>
                );
        }
    };

    return (
        <div>
            <div className="filter-tabs">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('text')}>Text</button>
                <button onClick={() => setFilter('images')}>Images</button>
                <button onClick={() => setFilter('videos')}>Videos</button>
            </div>
            <h2>Summary</h2>
            {renderContent()}
        </div>
    );
};

export default Summary;