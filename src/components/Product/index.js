import React, { useEffect } from 'react'
import './Product.css'
import { Redirect } from 'react-router-dom'

import { Container, Grid, Typography, Button, Box } from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const Product = ({location}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        location && location.state ?
        <Container>
            <Grid container justify='space-around' alignItems="center" className="productContainer">
                <Grid item>
                    <img src={location.state.image} alt='product' />
                </Grid>
                <Grid item lg={6} md={6} sm={6}>
                    <Grid container spacing={1} className="productDetails">
                        <Grid item xs={12}>
                            <Typography variant='h6' gutterBottom>{location.state.heading}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" className="orderNowCTA" disabled={location.state.isInStock ? false : true}>Order Now</Button>
                            <Box my={1}>
                                {location.state.isInStock ?
                                <React.Fragment>
                                    <CheckCircleOutlineIcon fontSize="small" color="primary" />
                                    <Typography variant="subtitle2" display="inline" gutterBottom style={{position: "relative", bottom: "5px", left: "5px"}}>In Stock</Typography>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <CancelOutlinedIcon fontSize="small" color="error" />
                                    <Typography variant="subtitle2" display="inline" gutterBottom style={{position: "relative", bottom: "5px", left: "5px"}}>Out Of Stock</Typography>
                                </React.Fragment>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' gutterBottom style={{fontWeight: "bold"}}>&#8377;&nbsp;{(Math.round(location.state.price * 100) / 100).toFixed(2)}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' gutterBottom style={{fontWeight: "bold"}}>Quantity:&nbsp;{location.state.quantity}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' gutterBottom style={{fontWeight: "bold"}}>Brand Name:&nbsp;Golu's Dairy</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' gutterBottom style={{fontWeight: "bold"}}>Category:&nbsp;{location.state.category}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' gutterBottom style={{fontWeight: "bold"}}>{location.state.subHeading}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' align="justify" gutterBottom>{location.state.content}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container> : <Redirect to='/' />
    );
}

export default Product
