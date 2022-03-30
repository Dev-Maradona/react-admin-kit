import { Container, Grid } from '@mui/material';
import React from 'react';

import { Navbar, Widgets, Projects, Overview } from './components';

import './App.scss';

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Widgets />
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={8}>
                        <Projects />
                    </Grid>
                    <Grid item lg={4}>
                        <Overview />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default App