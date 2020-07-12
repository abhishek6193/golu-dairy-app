import React, { useEffect } from 'react'
import "./About.css"
import { Container, Grid, Typography } from '@material-ui/core';

import { teamData } from "../../mockData";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Container>
            <Grid container spacing={1} className="aboutContainer">
                <Grid item>
                    <Typography variant="h6" gutterBottom>About Us</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="justify" gutterBottom>As Indians, everyone wants pure and fresh milk and other dairy products everyday. The keenness of getting fresh milk or dairy products is fundamental to our legacy and we all look back lovingly visits to our native towns and villages. However, it's seen that the quality of milk that gets delivered to our homes is far poorer to what we suppose, reconstituted with milk powder, adultrated and has questionable storage and weak cold chain.</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="justify" gutterBottom>Golu's Dairy.com engages directly with the hi tech dairy farms like our own farms, eliminating all middle men, follows ethical and process oriented production and procurement practices and invests in cold chain logistics and quality testing infrastructure and promise customers to deliver fresh & pure milk and other dairy products to their door step every morning.</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="justify" gutterBottom>Golu's Dairy.com not only delivers the high quality of fresh & pure milk but also our state-of-the-art user friendly mobile app makes our customer life easy like she order once and we deliver daily or alternate days or week days etc, an easy payment options, detailed and transparent billing and single tap order quantity change till 12 AM.</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" gutterBottom>Our Mission</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="justify" gutterBottom>Mission at Golu's Dairy.com is to deliver natural, fresh and unadulterated milk to customer doorstep every day. Natural means straight from the farm with no addition of milk powder or preservatives, no hormones or antibiotics. Fresh means that the milk reaches the consumer in 24-36 hours of milking. Unadulterated means scientific quality testing of milk for adulteration at every stage.</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" gutterBottom>Our Team</Typography>
                </Grid>
                {teamData.map((data,index) => (
                    <Grid item key={index}>
                        <Typography variant="body1" gutterBottom><strong>{data.name}</strong> - {data.message}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default About
