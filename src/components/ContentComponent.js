import React from 'react';

const ContentComponent = ({ filter }) => {
    const renderContentBasedOnFilter = () => {
        switch (filter) {
            case 'text':
                return <div>Text Content</div>;
            case 'images':
                return <div>Image Content</div>;
            case 'videos':
                return <div>Video Content</div>;
            default:
                return <div>All Content</div>;
        }
    };

    return (
        <div>
            {renderContentBasedOnFilter()}
        </div>
    );
};

export default ContentComponent;