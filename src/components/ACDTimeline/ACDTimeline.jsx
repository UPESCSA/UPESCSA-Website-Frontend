import React, { useState, useRef, useEffect } from 'react';
import './ACDTimeline.css';

const Timeline = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dropdownLeft, setDropdownLeft] = useState(-88);
  const [hasHovered, setHasHovered] = useState(true);
  const [showDropdown, setShowDropdown] = useState(true);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  const timelineData = [
    {
      title: 'Explore',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.',
      icon: 'explore'
    },
    {
      title: 'Plan',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.',
      icon: 'border_style'
    },
    {
      title: 'Production',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.',
      icon: 'format_shapes'
    },
    {
      title: 'Review',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.',
      icon: 'rate_review'
    },
    {
      title: 'Ship',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluttatum praesentium.',
      icon: 'important_devices'
    }
  ];

  useEffect(() => {
    // Set initial position for first item
    if (itemRefs.current[0]) {
      const firstItemLeft = itemRefs.current[0].getBoundingClientRect().left;
      const containerLeft = timelineRef.current.getBoundingClientRect().left;
      setDropdownLeft(firstItemLeft - containerLeft - 88);
    }
  }, []);

  const handleMouseEnter = (index, event) => {
    if (index !== selectedIndex) {
      const item = itemRefs.current[index];
      if (item && timelineRef.current) {
        const itemLeft = item.getBoundingClientRect().left;
        const containerLeft = timelineRef.current.getBoundingClientRect().left;
        const newLeft = itemLeft - containerLeft - 88;
        
        setSelectedIndex(index);
        setDropdownLeft(newLeft);
        
        if (!hasHovered) {
          setHasHovered(true);
          setShowDropdown(true);
        }
      }
    }
  };

  const handleMouseLeave = () => {
    // Optional: Hide dropdown on mouse leave
    // setShowDropdown(false);
    // setHasHovered(false);
  };

  const handleItemClick = (index) => {
    // For mobile/touch devices
    if (window.innerWidth <= 900) {
      setSelectedIndex(index);
      const item = itemRefs.current[index];
      if (item && timelineRef.current) {
        const itemLeft = item.getBoundingClientRect().left;
        const containerLeft = timelineRef.current.getBoundingClientRect().left;
        const newLeft = itemLeft - containerLeft - 88;
        setDropdownLeft(newLeft);
      }
    }
  };

  return (
    <section className="timeline-main-wrapper">
      <div className="timeline-container">
        <h1 className="timeline-title">Timeline</h1>
        <div 
          className="timeline-wrapper" 
          ref={timelineRef}
          onMouseLeave={handleMouseLeave}
        >
          <div className="timeline-track"></div>
          
          {timelineData.map((item, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={`timeline-item ${index === selectedIndex ? 'selected' : ''}`}
              onMouseEnter={(e) => handleMouseEnter(index, e)}
              onClick={() => handleItemClick(index)}
            >
              <div className="timeline-dot"></div>
            </div>
          ))}
          
          {showDropdown && (
            <div 
              className="timeline-dropdown"
              style={{ left: `${dropdownLeft}px` }}
            >
              <div className="dropdown-inner">
                <div className="dropdown-content">
                  <div className="content-wrapper">
                    <h2>{timelineData[selectedIndex].title}</h2>
                    <p>{timelineData[selectedIndex].content}</p>
                    <div className="hexagon"></div>
                    <span className="material-icons">{timelineData[selectedIndex].icon}</span>
                  </div>
                </div>
                <div className="dropdown-arrow"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;