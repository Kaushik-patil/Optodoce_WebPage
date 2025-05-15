import React, { useState, useEffect } from 'react';
import work from '../Images/work.png';

const Page4 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          marginBottom: '20px',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {/* Text Section */}
        <div
          style={{
            flex: 1,
            paddingLeft: isMobile ? '0' : '80px',
            paddingRight: isMobile ? '0' : '20px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? '24px' : '30px',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            Our Mission
          </h1>
          <p
            style={{
              fontSize: isMobile ? '14px' : '18px',
              color: '#333',
              margin: 0,
              lineHeight: '1.5',
            }}
          >
            We believe in serving quality services which can meet customers'
            requirements. Our vision is to bring out the best in people,
            technology and processes with top-notch quality. We build customer
            experience. Our mission is to place a consistent innovation to bring
            about an ultimate crest of triumph as our service.
          </p>
        </div>

        {/* Image Section */}
        <div
          style={{
            flex: 1,
            textAlign: isMobile ? 'center' : 'right',
            width: '100%',
            maxWidth: isMobile ? '100%' : '600px',
          }}
        >
          <img
            src={work}
            alt="work"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          minHeight: '200px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft:isMobile? '20px':'100px',
          paddingRight:'20px',
          boxSizing:'border-box',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(36px, 10vw, 150px)',
            fontWeight: 'bold',
            textAlign: 'left',
            color: '#e0e0e0',
            margin: 0,
            opacity:'0.5'
          }}
        >
          MISSION
        </p>
      </div>
    </div>
  );
};

export default Page4;
