
import React, { useState } from 'react';

const Education = () => {
    const [filter, setFilter] = useState('all');

    const renderContent = () => {
        // Here, you can decide what to render based on the filter
        // For example, show only text, images, or videos based on the filter
        switch (filter) {
            case 'text':
                return <p>Text content of Education...</p>;
            case 'images':
                return <div>Images of Education...</div>;
            case 'videos':
                return <div>Videos of Education...</div>;
            default:
                return (
                    <div>
                        <p>Text content of Education...</p>
                        <div>Images of Education...</div>
                        <div>Videos of Education...</div>
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
            <h2>Education</h2>
            {renderContent()}
        </div>
    );
};

export default Education;