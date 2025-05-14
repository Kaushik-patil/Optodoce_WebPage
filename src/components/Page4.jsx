import React from 'react';
import work from '../Images/work.png';

const Page4 = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Div 1 */}
      <div
        style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          height: window.innerWidth <= 768 ? 'auto' : '50vh',
          justifyContent: 'space-between',
          alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          marginBottom: '20px',
        }}
      >
        {/* Div 3 */}
        <div
          style={{
            flex: 1,
            paddingRight: window.innerWidth <= 768 ? '0' : '20px',
            paddingLeft: window.innerWidth <= 768 ? '0' : '100px',
            width: window.innerWidth <= 768 ? '100%' : '50vw',
            marginBottom: window.innerWidth <= 768 ? '20px' : 0,
          }}
        >
          <h1
            style={{
              fontSize: window.innerWidth <= 768 ? '24px' : '30px',
              fontWeight: 'bold',
            }}
          >
            Our Mission
          </h1>
          <p
            style={{
              fontSize: window.innerWidth <= 768 ? '14px' : '18px',
              color: '#333',
              margin: 0,
            }}
          >
            We believe in serving quality services which can meet customers'
            requirements. Our vision is to bring out the best in people,
            technology and processes with top-notch quality. We build customer
            experience. Our mission is to place a consistent innovation to bring
            about an ultimate crest of triumph as our service.
          </p>
        </div>

        {/* Div 4 */}
        <div
          style={{
            flex: 1,
            textAlign: window.innerWidth <= 768 ? 'center' : 'right',
            maxWidth: '900px',
            maxHeight: '400px',
          }}
        >
          <img
            src={work}
            alt="work"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </div>
      </div>

      {/* Div 2 */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          height: '30vh', 
          minHeight: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Div 5 */}
        <p
          style={{
            width: '100%',
            fontSize: 'clamp(36px, 10vw, 150px)', 
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#e0e0e0',
            margin: 0,
          }}
        >
          Mission
        </p>
      </div>
    </div>
  );
};

export default Page4;
