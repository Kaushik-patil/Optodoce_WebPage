

import React from "react";
import { Stepper, Step, StepLabel, Typography, Button, Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    color: 'orange', 
                },
                completed: {
                    color: 'orange', 
                },
                active: {
                    color: 'orange', 
                }
            },
        },
    },
});

const MyComponent = () => {
   
    const steps = [
        { title: "Step 1", description: "LET’S HAVE A CUP OF COFFEE:" },
        { title: "Step 2", description: "PLAN FOR THE SUCCESS:" },
        { title: "Step 3", description: "QUALITY SOLUTIONS:" },
        { title: "Step 4", description: "YOUR DREAMOUR GOAL:" },
    ];

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="column"
                gap={2}
                padding={2}
                justifyContent="center"
                alignItems="center"
                sx={{ height: '1200px' }} 
            >
                
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '150px',
                        width:'80vw'
                    }}
                >
                    
                    <Typography
                        variant="h6"
                        sx={{
                            color: "black",
                            zIndex: 1,
                            position: 'relative',
                            fontWeight:'bold',
                            marginTop:'50px',
                            fontSize:'22px'
                        }}
                    >
                        What do we do to remember for?
                    </Typography>

                   
                    <Typography
                        variant="h1"
                        sx={{
                            color: "grey",
                            opacity: 0.2,
                            position: 'absolute',
                            bottom: 0,
                            fontSize: '120px',
                            lineHeight: '1',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        What we Do
                    </Typography>
                </Box>


                {/* div2 */}
                <Box>
                    <Typography variant="body1" sx={{ marginBottom: 1 ,textAlign:'center'}}>
                       To connect smart actions and execute it with laser-like focus is our success mantra.  Exploring client’s business for online exposure is an ultimately worthy goal for <br />us. We want to be a voice of client’s success.
                    </Typography>
                    
                </Box>

                {/* div3 */}
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Button variant="contained" color="primary" style={{background: 'linear-gradient(to right, #6A41FB, #F49957)', borderRadius:'35px',width:'200px'}}>
                        Click Me
                    </Button>
                </Box>

                {/* div4 - Material UI Stepper */}
                <Box sx={{ height: '600px',marginTop:'100px',marginLeft:'50px'}}> 
                    <Stepper activeStep={0} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepLabel>
                                    <Typography variant="h6">{step.title}</Typography>
                                </StepLabel>
                                <Typography  style={{fontSize:'22px'}} variant="body2" sx={{ paddingLeft: 2 }}>
                                    {step.description}
                                </Typography>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default MyComponent;
