import React, { useEffect } from 'react'
import './Home.css'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import * as MaterialIcons from '@material-ui/icons'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { homePageData } from '../../mockData'
import ProductDetails from './ProductDetails'
import CustomerFeedback from './CustomerFeedback'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <img className="heroImage" src="/heroImage1.jpg" alt="Hero"/>
            <Container>
                <Grid container justify='center'>
                    <Grid item lg={6} sm={12}>
                        <Box my={3}>
                            <Typography variant="h5" gutterBottom align='center'>
                                Why Golu's Dairy?
                            </Typography>
                            <Typography variant="body2" gutterBottom align='center'>
                                Golu's Dairy’s milk comes from large Hi Tech farms where milk quality means farm hygiene, cattle comfort, their feed quality, automated milking process and a comprehensive testing process.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Grid container>
                {homePageData.map((data,index) => {
                const Icon = MaterialIcons[data.icon]
                return (
                    <Grid item key={index} lg={4} md={4} sm={6}>
                        <Card variant='outlined'>
                            <CardContent style={{minHeight: "304px", padding: "50px 0"}}>
                                <Typography align="center" gutterBottom>
                                    <Icon color='primary' fontSize="large" />
                                </Typography>
                                <Typography color="textSecondary" variant="subtitle1" gutterBottom align='center' style={{paddingTop: "20px", color: 'black'}}>
                                    {data.heading}
                                </Typography>
                                <Typography variant="body1" align="justify" gutterBottom className="cardContentStyle">
                                    {data.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )})}
            </Grid>
            <Container>
                <ProductDetails />
                <CustomerFeedback />
            </Container>
        </React.Fragment>
    );
}

export default Home
