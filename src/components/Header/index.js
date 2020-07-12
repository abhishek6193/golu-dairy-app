import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import Location from './Location'
import './Header.css'

const Header = () => {
    return (
        <Box className="header">
            <Container>
                <Grid container justify='space-between' alignItems="center" style={{height: "80px"}}>
                    <Location />
                    <Grid item>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item style={{padding: "0", marginRight: "20px"}}>
                                <Link to="/"><img src="/logo.png" alt="Logo" /></Link>
                            </Grid>
                            <Grid item className="desktopOnly">
                                <Button>Order Now</Button>
                            </Grid>
                            <Grid item className="desktopOnly">
                                <Link to="/about" style={{textDecoration: 'none'}}><Button>About Us</Button></Link>
                            </Grid>
                            <Grid item className="desktopOnly">
                                <Link to="/farms" style={{textDecoration: 'none'}}><Button>Our Farms</Button></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Header
