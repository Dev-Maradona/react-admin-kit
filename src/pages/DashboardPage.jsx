import React from 'react';
import {Container, Grid} from '@mui/material';
import {Widgets, Projects, Overview, Footer} from '../components';

function DashboardPage() {
    return (
        <>
            <Widgets />
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={8} md={6} sm={12} xs={12}>
                        <Projects />
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Overview />
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </>
    )
}

export default DashboardPage