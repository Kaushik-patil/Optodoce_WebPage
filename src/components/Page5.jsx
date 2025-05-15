import React from 'react'

const Page5 = () => {
  const steps = [
    {
      number: "01",
      title: "LET’S HAVE A CUP OF COFFEE:",
      description: "Initiate a meeting to understand the requirements and goals of the client.",
    },
    {
      number: "02",
      title: "PLAN FOR THE SUCCESS:",
      description: "We analyze, design, develop and test the whole project with eagle vision.",
    },
    {
      number: "03",
      title: "QUALITY SOLUTIONS:",
      description: "For us, the quality solution is what brings clients success & exposure together.",
    },
    {
      number: "04",
      title: "YOUR DREAMOUR GOAL:",
      description: "We discover & innovate your dream with a look & feel, experience.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "16px",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* div1 */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: '150px',
          textAlign: 'center',
          width: '100%',
          boxSizing: "border-box",
          overflow: 'hidden',

        }}
      >
        <h2
          style={{
            color: "black",
            zIndex: 1,
            position: "absolute",
            fontWeight: "bold",
            width: 'auto',
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "clamp(10px, 3vw, 22px)",
            margin: '0',
            textAlign: "center",
            whiteSpace: "normal",
            maxWidth: "90%",
          }}
        >
          What do we do to remember for?
        </h2>

        <h1
          style={{
            color: "grey",
            opacity: 0.2,
            position: "absolute",
            fontSize: "clamp(60px,10vw,120px)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            lineHeight: "1",
            whiteSpace: "nowrap",
            margin: 0,
            zIndex: 0,
            textAlign: "center",

          }}
        >
          WHAT WE DO
        </h1>
      </div>

      {/* div2 */}
      <div style={{ maxWidth: "1200px", padding: "0 16px", textAlign: "center", color: "#878787" }}>
        <p >
          To connect smart actions and execute it with laser-like focus is our
          success mantra. Exploring client’s business for online exposure is an
          ultimately worthy goal for
          us. We want to be a voice of client’s success.
        </p>
      </div>

      {/* div3 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          width: "100%",
        }}
      >
        <button
          style={{
            background: "linear-gradient(to right, #EF8431, #E71A86)",
            borderRadius: "35px",
            width: "clamp(150px, 40vw, 200px)",
            height: "clamp(40px, 6vh, 50px)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "clamp(14px, 2.5vw, 18px)",
          }}
        >
          GET IN TOUCH
        </button>
      </div>

      {/* div4 - Stepper */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "5vh",
          minWidth: "300px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                position: "relative",
                minHeight: "25vh",
                width: "100%",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexDirection: 'row',
              }}
            >
              {/* Left side */}
              <div
                style={{
                  width: "30%",
                  minWidth: "200px",
                  paddingRight: "2vw",
                  textAlign: "right",
                  boxSizing: "border-box",


                }}
              >
                {!isEven ? (
                  <div
                    style={{
                      fontFamily: "Londrina Outline",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "6vw",
                      color: "#707070",
                      opacity: 0.5,
                      position: "relative",
                      top: "-2vh",
                    }}
                  >
                    {step.number}
                  </div>
                ) : (
                  <>
                    <h1
                      style={{
                        fontSize: "1.5vw",
                        fontWeight: 600,
                        color: "#231F20",
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h1>
                    <div style={{ position: "relative" }}>
                      <p
                        style={{
                          position: "absolute",
                          right: "0",
                          top: "0",
                          width: "100%",
                          color: "#878787",
                          textAlign: "right",
                          direction: "rtl",
                          fontSize: "1vw",
                          margin: "5px 0 20px auto",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Center circle and line */}
              <div
                style={{
                  width: "80px",
                  minWidth: "60px",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#fff",
                    border: "2px solid #707070",
                    borderRadius: "50%",
                    zIndex: 1,
                    marginTop: "5px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      background: "linear-gradient(to right, #EF8431, #E71A86)",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "12%",
                      left: "12%",
                    }}
                  ></div>

                </div>
                {index !== steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "3px",
                      height: "150px",
                      backgroundColor: "#707070",
                      zIndex: 0,
                    }}
                  />
                )}
              </div>

              {/* Right side */}
              <div
                style={{
                  width: "30%",
                  minWidth: "200px",
                  paddingLeft: "2vw",
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                {isEven ? (
                  <div
                    style={{
                      fontFamily: "Londrina Outline",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "6vw",
                      color: "#707070",
                      opacity: 0.5,
                      position: "relative",
                      top: "-2vh",
                    }}
                  >
                    {step.number}
                  </div>
                ) : (
                  <>
                    <h1
                      style={{
                        fontSize: "1.5vw",
                        fontWeight: 600,
                        color: "#231F20",
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h1>
                    <p
                      style={{
                        width: "100%",
                        color: "#878787",
                        textAlign: "left",
                        fontSize: "1vw",
                        margin: "5px 0 20px 0",
                      }}
                    >
                      {step.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>




      {/* Vision-div */}
      <div
        style={{
          backgroundColor: 'white',

          padding: "0 16px",
          height: '20vh',
          width: '100%',
          minHeight: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '0px',
          marginBottom: '0px',
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Div 5 */}
        <p
          style={{
            width: '100%',
            fontSize: 'clamp(60px, 10vw, 300px)',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#e0e0e0',
            margin: 0,
            lineHeight: "1",
            paddingLeft: 'calc(50% - 300px)',
            whiteSpace: "nowrap",
            opacity: '0.5',

          }}
        >
          VISION
        </p>
      </div>
    </div>
  );
};

export default Page5