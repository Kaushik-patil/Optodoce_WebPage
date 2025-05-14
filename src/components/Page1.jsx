import React from 'react'
import Image10 from '../Images/Image10.png';
import Image11 from '../Images/Image11.png';
import Image12 from '../Images/Image12.png';
import Image13 from '../Images/Image13.png';
import Image14 from '../Images/Image14.png';
import Image15 from '../Images/Image15.jpg';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

const Page1 = () => {
  return (
    <>
      <style>
        {`
          @media (max-width: 1024px) {
  .main-container {
    height: auto;
  }

  .top-section {
    flex-direction: column;
    min-width: 100%;
    max-height: none;
    align-items: center;
  }

  .left-profile,
  .right-image {
    margin-top: 20px;
    width: 80px !important;
    height: 80px !important;
  }

  .center-content {
    padding: 10px !important;
    min-width: unset;
    width: 100%;
    max-height: none;
  }

  .headline-text p {
    font-size: 2.5rem !important;
  }

  .description-text {
    max-width: 100% !important;
    font-size: 14px !important;
  }

 .bottom-section {
    flex-direction: column;
  }

  .bottom-left,
  .bottom-right {
    width: 100%;
  }

   display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;

  .bottom-left p {
    font-size: 14px;
  }


  
  .bottom-left button {
    font-size: 12px;
  }
    
  .bottom-right > div {
  position: relative;
  overflow: hidden;
}

.bottom-right img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  min-height: 180px;
}

  .tags-container {
    flex-direction: column;
    align-items: center;
    gap: 8px !important;
  }
}

.main-container {
  width: 100%;
  box-sizing: border-box;
}
  
@media (max-width: 768px) {
  .top-section {
    flex-wrap: nowrap; /* Prevent wrapping */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

 .left-profile,
  .right-image {
    width: 80px !important;
    height: 80px !important;
  }

  .center-content {
    padding: 10px !important;
    flex: 1;
  }

  .headline-text p {
    font-size: 1.5rem !important;
  }
}

  .description-text {
    font-size: 14px !important;
    padding: 0 10px;
  }
.bottom-section {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: auto;
  gap: 20px;
  box-sizing: border-box;
}

.bottom-left,
.bottom-right {
  width: 50%;
  box-sizing: border-box;
  padding: 20px;
}

.bottom-right {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.bottom-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  display: block;
}
}



@media (max-width: 480px) {
  .headline-text p {
    font-size: 1.8rem !important;
    line-height: 1.2;
  }

  .description-text {
    font-size: 12px !important;
    padding: 0 10px;
  }

  .left-profile,
  .right-image {
    width: 60px !important;
    height: 60px !important;
    margin-top: 10px;
  }

  .center-content {
    gap: 10px !important;
  }

  .bottom-left p {
    font-size: 14px !important;
  }

  .bottom-left button {
    font-size: 12px !important;
  }

  .bottom-section {
    padding: 10px 0;
  }

  .tags-container {
    gap: 6px !important;
  }

  .tags-container button {
    font-size: 12px !important;
    padding: 4px 10px !important;
  }
}



        `


        }
      </style>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh', width: '100%', background: 'black' }}>
  <div style={{ width: '100%', maxWidth: '1400px', padding: '20px', boxSizing: 'border-box' }} className="main-container">


          {/* upper */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              padding: '20px',
              boxSizing: 'border-box',
              gap: '20px',
              color: 'white',
            }}
            className="top-section"
          >

            <div
              style={{
                width: '200px',
                // minWidth: '80px',
                height: '200px',
                marginTop: '150px',
                marginRight: '0',
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
              }}
              className="left-profile"
            >
               <img src={Image14} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 

              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                padding: '20px',
                gap: '20px',
                minWidth: '300px',
                boxSizing: 'border-box',
                maxHeight: '560px',
              }}
              className="center-content"
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '20px',
                  gap: '20px',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ textAlign: 'center' }} className="headline-text">
                  <p style={{ fontSize: '70px', margin: 0 }}>
                    <span>Best AI Content Platform</span>
                    <br />
                    <span style={{ color: '#6A41FB' }}>Image </span>
                    <span
                      style={{
                        background: 'linear-gradient(to right, #6A41FB, #F49957)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                      }}
                    >
                      Generate
                    </span>
                  </p>
                </div>

                <div
                  style={{
                    textAlign: 'center',
                    maxWidth: '80%',
                    margin: '0 auto',
                    fontSize: '16px',
                    lineHeight: '1.5',
                  }}
                  className="description-text"
                >
                  <p style={{ margin: 0 }}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '20px',
                  gap: '16px',
                  boxSizing: 'border-box',
                }}
              >
                <SearchBar />

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 20px',
                    backgroundColor: 'black',
                    borderRadius: '8px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                  className="tags-container"
                >
                  <p style={{ margin: 0, fontSize: '18px' }}>Popular tags:</p>
                  {['Creative', 'Sport', 'Animation', 'Fantasy'].map((tag) => (
                    <button
                      key={tag}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        backgroundColor: '#343435',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '14px',
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                width: '10%',
                minWidth: '100px',
                height: '250px',
                marginTop: '10%',
                marginRight: '5%',
                flexShrink: 0,
              }}
              className="right-image"
            >
              <img src={Image15} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '100px' }} />
            </div>
          </div>



          {/* lower */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            height: '700px',
            width: '100%',
            boxSizing: 'border-box'
          }} className="bottom-section">

            <div style={{
              height: '100%',
              width: '50%',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              padding: '16px',
              boxSizing: 'border-box',
              flex: 1
            }} className="bottom-left">

              <div style={{
                height: '100%',
                overflow: 'hidden',
                borderRadius: '30px'
              }}>
                <img
                  src={Image13}
                  alt="Creative"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '30px'
                  }}
                />
              </div>

              <div style={{
                height: '50%',
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <p style={{
                  color: 'white',
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  We're passionate about empowering creatives with the tools <br />
                  they need to&nbsp;
                  <span style={{ color: '#6A41FB' }}>bring</span>&nbsp;
                  <span style={{
                    background: 'linear-gradient(to right, #6A41FB, #F49957)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}>their</span>&nbsp;
                  <span style={{ color: '#F49957' }}>vision</span>&nbsp;
                  to life — that's why we've <br /> developed
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  marginTop: '16px'
                }}>
                  <div style={{
                    background: 'linear-gradient(to right, #6A41FB, #F49957)',
                    width: '120px',
                    height: '40px',
                    borderRadius: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <button style={{
                      color: 'white',
                      background: 'transparent',
                      border: 'none',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}>Get Started</button>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                    <p style={{ color: 'white', margin: 0 }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>100k+</span> Happy Customers
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div style={{
              display: 'grid',
              height: '700px',
              width: '50%',
              paddingLeft: '20px',
              boxSizing: 'border-box',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '10px'
            }} className="bottom-right">
              <div style={{ gridRow: '1/2', gridColumn: '1/3', overflow: 'hidden' }}>
                <img src={Image10} alt="img10" style={{
                  width: '95%',
                  height: '95%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  display: 'block'
                }} />
              </div>
              <div style={{ gridRow: '1/2', gridColumn: '3/5', overflow: 'hidden' }}>
                <img src={Image11} alt="img11" style={{
                  width: '95%',
                  height: '95%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  display: 'block'
                }} />
              </div>
              <div style={{ gridRow: '2/3', gridColumn: '1/5', overflow: 'hidden' }}>
                <img src={Image12} alt="img12" style={{
                  width: '95%',
                  height: '95%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  display: 'block'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page1;
