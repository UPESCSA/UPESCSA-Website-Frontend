import React, { useState, useEffect, useRef } from 'react';

const ModernTimeline = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef(null);
  const containerRef = useRef(null);

  // Sample timeline data
  const timelineData = [
    {
      id: 1,
      title: "Project Inception",
      date: "Jan 2024",
      description: "Initial planning and concept development for the new product line. Team formation and resource allocation.",
      color: "#3b82f6"
    },
    {
      id: 2,
      title: "Design Phase",
      date: "Feb 2024",
      description: "User interface design and user experience planning. Prototyping and stakeholder feedback integration.",
      color: "#8b5cf6"
    },
    {
      id: 3,
      title: "Development Start",
      date: "Mar 2024",
      description: "Backend architecture setup and frontend development initialization. Database design and API planning.",
      color: "#10b981"
    },
    {
      id: 4,
      title: "Beta Testing",
      date: "Apr 2024",
      description: "Internal testing phase with quality assurance team. Bug fixes and performance optimizations.",
      color: "#f59e0b"
    },
    {
      id: 5,
      title: "Launch Preparation",
      date: "May 2024",
      description: "Final preparations for product launch. Marketing campaigns and deployment infrastructure setup.",
      color: "#ef4444"
    },
    {
      id: 6,
      title: "Public Release",
      date: "Jun 2024",
      description: "Official product launch to the public. User onboarding and customer support systems activation.",
      color: "#06b6d4"
    }
  ];

  // Check if we need to switch to mobile layout
  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // Each detail box is 320px + 2rem margin = 352px
        // For alternating layout we need: 352px * 2 + some buffer = ~720px
        // Switch to mobile when less than 720px available
        setIsMobile(containerWidth < 720);
      }
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  // Handle scroll events on timeline
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (e.deltaY > 0) {
        // Scrolling down - select next node
        setSelectedIndex(prev => Math.min(prev + 1, timelineData.length - 1));
      } else {
        // Scrolling up - select previous node
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      }
    };

    const timelineElement = timelineRef.current;
    if (timelineElement) {
      timelineElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (timelineElement) {
        timelineElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [timelineData.length]);

  // Isolated CSS styles using CSS-in-JS approach
  const styles = `
    .timeline-isolated-container {
      all: unset !important;
      display: block !important;
      box-sizing: border-box !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
      min-height: 100vh !important;
      // background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%) !important;
      padding: 2rem !important;
      position: relative !important;
      z-index: 1 !important;
    }

    .timeline-isolated-inner {
      all: unset !important;
      display: block !important;
      max-width: 64rem !important;
      margin: 0 auto !important;
      box-sizing: border-box !important;
    }

    .timeline-isolated-title {
      all: unset !important;
      display: block !important;
      font-size: 2.25rem !important;
      font-weight: 700 !important;
      text-align: center !important;
      margin-bottom: 3rem !important;
      color: #ffffffff !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
    }

    .timeline-isolated-title-mobile {
      all: unset !important;
      display: block !important;
      font-size: 2.25rem !important;
      font-weight: 700 !important;
      text-align: left !important;
      margin-bottom: 3rem !important;
      color: #ffffffff !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
    }

    .timeline-isolated-wrapper {
      all: unset !important;
      display: block !important;
      position: relative !important;
      cursor: pointer !important;
      user-select: none !important;
      min-height: 600px !important;
      box-sizing: border-box !important;
    }

    .timeline-isolated-line {
      position: absolute !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      width: 4px !important;
      background: linear-gradient(to bottom, #cbd5e1, #94a3b8) !important;
      height: 100% !important;
      border-radius: 9999px !important;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1) !important;
    }

    .timeline-isolated-line-mobile {
      position: absolute !important;
      left: 2rem !important;
      width: 4px !important;
      background: linear-gradient(to bottom, #cbd5e1, #94a3b8) !important;
      height: 100% !important;
      border-radius: 9999px !important;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1) !important;
    }

    .timeline-isolated-item {
      position: relative !important;
      margin-bottom: 4rem !important;
      min-height: 80px !important;
      box-sizing: border-box !important;
    }

    .timeline-isolated-item-mobile {
      position: relative !important;
      margin-bottom: 8rem !important;
      min-height: 120px !important;
      box-sizing: border-box !important;
    }

    .timeline-isolated-item:last-child,
    .timeline-isolated-item-mobile:last-child {
      margin-bottom: 0 !important;
    }

    .timeline-isolated-node {
      position: absolute !important;
      left: 50% !important;
      transform: translateX(-50%) translateY(-50%) !important;
      top: 2rem !important;
      z-index: 10 !important;
    }

    .timeline-isolated-node-mobile {
      position: absolute !important;
      left: 2rem !important;
      transform: translateX(-50%) translateY(-50%) !important;
      top: 2rem !important;
      z-index: 10 !important;
    }

    .timeline-isolated-node-circle {
      width: 24px !important;
      height: 24px !important;
      border-radius: 50% !important;
      border: 4px solid white !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      box-sizing: border-box !important;
    }

    .timeline-isolated-detail-box {
      position: absolute !important;
      top: 0 !important;
      width: 320px !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      box-sizing: border-box !important;
    }

    .timeline-isolated-detail-box-left {
      right: 50% !important;
      margin-right: 2rem !important;
    }

    .timeline-isolated-detail-box-right {
      left: 50% !important;
      margin-left: 2rem !important;
    }

    .timeline-isolated-detail-box-mobile {
      position: absolute !important;
      top: 0 !important;
      width: 320px !important;
      left: 2rem !important;
      margin-left: 2rem !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      box-sizing: border-box !important;
    }

    .timeline-isolated-card {
      all: unset !important;
      display: block !important;
      background-color: white !important;
      border-radius: 1rem !important;
      padding: 1.5rem !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
      border: 1px solid #e2e8f0 !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      position: relative !important;
      box-sizing: border-box !important;
    }

    .timeline-isolated-arrow {
      position: absolute !important;
      top: 2rem !important;
      width: 0 !important;
      height: 0 !important;
      border-top: 8px solid transparent !important;
      border-bottom: 8px solid transparent !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }

    .timeline-isolated-arrow-left {
      right: 0 !important;
      transform: translateX(100%) !important;
    }

    .timeline-isolated-arrow-right {
      left: 0 !important;
      transform: translateX(-100%) !important;
    }

    .timeline-isolated-arrow-mobile {
      position: absolute !important;
      top: 2rem !important;
      left: 0 !important;
      transform: translateX(-100%) !important;
      width: 0 !important;
      height: 0 !important;
      border-top: 8px solid transparent !important;
      border-bottom: 8px solid transparent !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }

    .timeline-isolated-date-container {
      display: flex !important;
      align-items: center !important;
      margin-bottom: 0.75rem !important;
    }

    .timeline-isolated-date-dot {
      width: 12px !important;
      height: 12px !important;
      border-radius: 50% !important;
      margin-right: 0.75rem !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }

    .timeline-isolated-date {
      all: unset !important;
      font-size: 0.875rem !important;
      font-weight: 600 !important;
      color: #64748b !important;
      text-transform: uppercase !important;
      letter-spacing: 0.05em !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
    }

    .timeline-isolated-heading {
      all: unset !important;
      display: block !important;
      font-size: 1.25rem !important;
      font-weight: 700 !important;
      margin-bottom: 0.75rem !important;
      transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
    }

    .timeline-isolated-description {
      all: unset !important;
      display: block !important;
      color: #64748b !important;
      line-height: 1.6 !important;
      font-size: 0.875rem !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
      margin: 0 !important;
    }

    .timeline-isolated-instructions {
      text-align: center !important;
      margin-block-start: 8rem !important;
      color: #64748b !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
    }

    .timeline-isolated-instructions p {
      all: unset !important;
      display: block !important;
      font-size: 0.875rem !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
      color: #64748b !important;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="timeline-isolated-container" ref={containerRef}>
        <div className="timeline-isolated-inner">
          <h1 className={isMobile ? "timeline-isolated-title-mobile" : "timeline-isolated-title"}>
            Project Timeline
          </h1>
          
          <div 
            ref={timelineRef}
            className="timeline-isolated-wrapper"
          >
            {/* Main vertical line */}
            <div className={isMobile ? "timeline-isolated-line-mobile" : "timeline-isolated-line"}></div>
            
            {timelineData.map((item, index) => {
              const isSelected = selectedIndex === index;
              const isLeft = !isMobile && index % 2 === 0;
              
              return (
                <div
                  key={item.id}
                  className={isMobile ? "timeline-isolated-item-mobile" : "timeline-isolated-item"}
                >
                  {/* Timeline node */}
                  <div className={isMobile ? "timeline-isolated-node-mobile" : "timeline-isolated-node"}>
                    <div
                      className="timeline-isolated-node-circle"
                      style={{
                        backgroundColor: isSelected ? item.color : '#cbd5e1',
                        boxShadow: isSelected 
                          ? `0 0 20px ${item.color}40, 0 4px 12px rgba(0,0,0,0.15)` 
                          : '0 2px 8px rgba(0,0,0,0.1)',
                        transform: isSelected ? 'scale(1.25)' : 'scale(1)'
                      }}
                    ></div>
                  </div>
                  
                  {/* Detail box */}
                  <div
                    className={
                      isMobile 
                        ? 'timeline-isolated-detail-box-mobile'
                        : `timeline-isolated-detail-box ${
                            isLeft ? 'timeline-isolated-detail-box-left' : 'timeline-isolated-detail-box-right'
                          }`
                    }
                    style={{
                      transform: isSelected ? 'scale(1.05)' : 'scale(1)'
                    }}
                  >
                    <div
                      className="timeline-isolated-card"
                      style={{
                        boxShadow: isSelected 
                          ? `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${item.color}20` 
                          : '0 4px 12px rgba(0,0,0,0.1)',
                        border: isSelected ? `1px solid ${item.color}30` : '1px solid #e2e8f0'
                      }}
                    >
                      {/* Arrow pointing to timeline */}
                      <div
                        className={
                          isMobile
                            ? 'timeline-isolated-arrow-mobile'
                            : `timeline-isolated-arrow ${
                                isLeft ? 'timeline-isolated-arrow-left' : 'timeline-isolated-arrow-right'
                              }`
                        }
                        style={{
                          [isMobile || !isLeft ? 'borderRight' : 'borderLeft']: isSelected 
                            ? `8px solid ${item.color}20` 
                            : '8px solid #f1f5f9'
                        }}
                      ></div>
                      
                      {/* Content */}
                      <div className="timeline-isolated-date-container">
                        <div
                          className="timeline-isolated-date-dot"
                          style={{
                            backgroundColor: isSelected ? item.color : '#cbd5e1'
                          }}
                        ></div>
                        <span className="timeline-isolated-date">
                          {item.date}
                        </span>
                      </div>
                      
                      <h3 
                        className="timeline-isolated-heading"
                        style={{
                          color: isSelected ? '#0f172a' : '#334155'
                        }}
                      >
                        {item.title}
                      </h3>
                      
                      <p className="timeline-isolated-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Instructions */}
          <div className="timeline-isolated-instructions">
            <p>
              Hover over the timeline and scroll to navigate between events
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernTimeline;