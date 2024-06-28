import { useState, useEffect } from "react";
// Remove the extra import statement below
// import { useState } from 'react';
function News() {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;
    useEffect(() => {
        fetch(`https://api.quotable.io/quotes?page=${currentPage}`)
            .then(response => response.json())
            .then(data => setNews(data.results));
    }, [currentPage]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className="IPS">
            {Array.isArray(news) && news.map((newsitem) => {
                return (
                    <div key={newsitem._id} className="main-cord">
                        <h2>Source: {newsitem.content}</h2>
                        <div className="author">
                        <p>{newsitem.author}</p>
                        </div>
                    </div>
                );
            })}
            <div className="footer">
                {[...Array(totalPages).keys()].map(page => (
                    <button key={page} onClick={() => handlePageChange(page + 1)}>
                        {page + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default News;