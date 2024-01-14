
import React, { useState } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const renderContent = () => {
        // Here, you can decide what to render based on the filter
        // For example, show only text, images, or videos based on the filter
        switch (filter) {
            case 'text':
                return <p>Text content of Projects...</p>;
            case 'images':
                return <div>Images of Projects...</div>;
            case 'videos':
                return <div>Videos of Projects...</div>;
            default:
                return (
                    <div>
                        <p>Text content of Projects...</p>
                        <div>Images of Projects...</div>
                        <div>Videos of Projects...</div>
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
            <h2>Projects</h2>
            {renderContent()}
        </div>
    );
};

export default Projects;