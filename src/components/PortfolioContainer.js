import React, { useState } from 'react';
import Header from './Header/index';
import Footer from './Footer';
import About from './pages/About';
import Resume from './pages/Resume';
import ProjectsContainer from './pages/ProjectsContainer';
import Contact from './pages/Contact';

export default function PortfolioContainer() {

    const portfolioStyle = {
        padding: "20px",
    }
    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'ProjectsContainer') {
            return <ProjectsContainer />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={portfolioStyle}>
            
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
