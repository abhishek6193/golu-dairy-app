import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { productsData } from "../../mockData"

const ProductDetails = () => {
    return (
        <React.Fragment>
            <Grid container justify='center'>
                <Grid item lg={6} sm={12}>
                    <Box my={3}>
                        <Typography variant="h5" gutterBottom align='center'>
                            Our Products
                        </Typography>
                        <Typography variant="body2" gutterBottom align='center'>
                            We produce Fresh Milk and other Dairy Products
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box m={3}>
                {productsData.map((data,index) => (
                    <Grid container key={index} justify="space-evenly" alignItems="center">
                        <Grid item>
                            <img src={data.image} alt="product" height="175" width="175" />
                        </Grid>
                        <Grid item lg={7} md={7} sm={7}>
                            <Box>
                                <Link to={{
                                    pathname: '/product',
                                    state: data
                                }} style={{textDecoration: 'none', color: 'black'}}>
                                    <Typography variant="h6" gutterBottom className="productName">{data.heading}</Typography>
                                </Link>
                                <Typography variant="subtitle2" gutterBottom className="productSubtitle">{data.subHeading}</Typography>
                                <Typography variant="body2" align="justify" gutterBottom style={{margin: "20px 0"}}>{data.content}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Box>
            <Box>
                <Grid container justify="center">
                    <Grid item>
                        <img src="/vegetables.jpg" alt="Vegetable" style={{width: "100%"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" gutterBottom className="vegetableHeading">Fresh Fruits and Vegetables by Golu's Dairy</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align="justify" gutterBottom style={{margin: "20px 0"}}>Fresh fruits and Vegetables established the base of daily food consumption in our daily life. However, it’s not everyone’s cup of tea to access fresh fruits and vegetables due to different aspects. If we talk about current farming methods that involve toxicants to storage systems and logistics, many sellers land up with rotten raw foods or chemical-based food with other radicals. Golu's Dairy has now turned the scene around with offering fresh potato, tomato, carrots, onions, and other vegetables from their online platform at your doorstep with complete safety and hygiene. While delivering fruits and vegetables to your home, our main concern is to deliver the fresh vegetables to your doorstep with applying excellent quality of packaging. Now coming to our customer’s priority that is the quality and pricing of the products, you can compare the quality and pricing of our fruits & vegetables with other portals in the market or your local subziwalas. We at Golu's Dairy, cautiously pick your foodstuffs, meticulously clean them and pack them using the best packaging material available before delivering them to you. Shop for your vegetables and fruits online now from the comfort of your couch and get your order delivered at your doorstep within a stipulated time. Save time, money, and efforts, by completing your routine shopping online at Golu's Dairy.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default ProductDetails
