import React, { useState, useEffect } from 'react';
import Projects from '../pages/Projects';
import Weather from '../projects/Weather';
import TechBlog from '../projects/TechBlog';


export default function ProjectsContainer() {

    const projectsStyle = {
        padding: "20px",
    }
    const [currentPage, setCurrentPage] = useState('Projects');

    useEffect(() => {
        document.title = `${currentPage}`;
    });

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Weather') {
            return <Weather />;
        }
        if (currentPage === 'TechBlog') {
            return <TechBlog />;
        }
        return <Projects currentPage={currentPage} handlePageChange={handlePageChange} />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={projectsStyle} >

            {renderPage()}
        </div>
    );
}

