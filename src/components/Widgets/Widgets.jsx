import React from 'react';
import { Container, Grid } from '@mui/material';
import { AiOutlineBgColors, AiOutlineDesktop, AiOutlineEuroCircle, AiOutlineEnvironment } from 'react-icons/ai';
import Widget from './Widget/Widget';

function Widgets() {
    return (
        <div className='Widgets'>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Widget
                            name="Booking"
                            value="281"
                            revenue="+24%"
                            bgColor="bg-black"
                            icon={<AiOutlineBgColors className='Icon' />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Widget
                            name="Total Users"
                            value="5,451"
                            revenue="+3%"
                            bgColor="bg-blue"
                            icon={<AiOutlineDesktop className='Icon' />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Widget
                            name="Revenue"
                            value="34K"
                            revenue="+7%"
                            bgColor="bg-green"
                            icon={<AiOutlineEuroCircle className='Icon' />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Widget
                            name="Followers"
                            value="91"
                            revenue="+11%"
                            bgColor="bg-red"
                            icon={<AiOutlineEnvironment className='Icon' />}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Widgets