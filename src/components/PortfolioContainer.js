import React, { useState } from 'react';
import Header from './Header/index';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {

    const portfolioStyle = {
        padding: "20px",
    }
    const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'About Me') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={portfolioStyle}>
            
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
