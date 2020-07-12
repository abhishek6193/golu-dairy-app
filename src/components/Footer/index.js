import React from 'react'

import { Container, Typography, Box } from '@material-ui/core'

const Footer = () => {
    return (
        <Box my={5}>
            <hr />
            <Container>
                <Typography variant="body2" align="center" alignItems="center" style={{marginTop: "30px"}}>
                    © 2020, by Golu's Dairy.com | All rights reserved
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer
