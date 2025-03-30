import React, { useState, useEffect, useRef } from 'react';
import './Featured.css';
import { featuredItems } from './FeaturedItems';

const Featured = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(4);
  const [activeFilter, setActiveFilter] = useState('all'); // Add filter state
  const sectionRef = useRef(null);

  featuredItems.sort((a, b) => {
    // First sort by pinned status
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    // Then sort by date for items with the same pinned status
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 968) {
        setDisplayCount(3);
      } else {
        setDisplayCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter items based on activeFilter
  const filteredItems = activeFilter === 'all' 
    ? featuredItems 
    : featuredItems.filter(item => item.type === activeFilter);

  const visibleItems = showAll 
    ? filteredItems 
    : filteredItems.slice(0, displayCount);
    
  const hasMoreItems = filteredItems.length > displayCount;

  const handleViewToggle = () => {
    // If we're showing all items and about to collapse, scroll to the top of the section
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(!showAll);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false); // Reset to show limited items when changing filter
    
    // Scroll to top of section when changing filter
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="featured section" id="featured" ref={sectionRef}>
      <h2 className="section__title">Featured</h2>
      <span className="section__subtitle">Certifications & Social Updates</span>

      {/* Add filter buttons */}
      <div className="featured__filters">
        <button 
          className={`featured__filter-btn ${activeFilter === 'all' ? 'active-filter' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button 
          className={`featured__filter-btn ${activeFilter === 'achievement' ? 'active-filter' : ''}`}
          onClick={() => handleFilterChange('achievement')}
        >
          Certifications
        </button>
        <button 
          className={`featured__filter-btn ${activeFilter === 'social' ? 'active-filter' : ''}`}
          onClick={() => handleFilterChange('social')}
        >
          Social Updates
        </button>
      </div>

      <div className="featured__container container grid">
        {visibleItems.map((item) => (
          <article className="featured__card" key={item.id}>
            <div className="featured__image">
              <img src={item.image} alt={item.title} />
              <div className="featured__platform">
                <i className={`uil ${item.type === 'social' ? 'uil-share-alt' : 'uil-award'
                  }`}></i>
                {item.platform}
              </div>
              {item.pinned && (
                <div className="featured__pin">
                  <i className="uil uil-bookmark"></i>
                </div>
              )}
            </div>
            <div className="featured__content">
              <h3 className="featured__title">{item.title}</h3>
              <span className="featured__date">{item.date}</span>
              <a href={item.link} target="_blank" rel="noreferrer" className='featured__button'> View
                <i className='bx bx-right-arrow-alt featured__button-icon'></i>
              </a>
            </div>
          </article>
        ))}
      </div>

      {hasMoreItems && (
        <div className="featured__view-more">
          <button
            className="featured__view-more-btn"
            onClick={handleViewToggle}
          >
            {showAll ? 'Show Less' : 'View More'}
            <i className={`bx ${showAll ? 'bx-chevron-up' : 'bx-chevron-down'} featured__view-more-icon`}></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default Featured;
