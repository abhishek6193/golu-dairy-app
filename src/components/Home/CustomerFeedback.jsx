import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { feedbackData } from "../../mockData"

const CustomerFeedback = () => {
    return (
        <React.Fragment>
            <Grid container justify='center' style={{marginTop: "30px"}}>
                <Grid item lg={6} sm={12}>
                    <Box my={3}>
                        <Typography variant="h5" gutterBottom align='center'>
                            What our customers say
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={5} className="customerFeedback">
                {feedbackData.map((data,index) => (
                    <Grid lg={4} md={4} sm={4} item key={index}>
                        <Grid container key={index} xs={12} spacing={3} alignItems="center" className={index === feedbackData.length - 1 ? "" : "customerDetails"}>
                            <Grid item>
                                <img src={data.image} alt="customer" height="75" width="75" style={{borderRadius: "50%"}}/>
                            </Grid>
                            <Grid item lg={8} xs={6} className="customerName">
                                <Typography variant="body1" gutterBottom>{data.name}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" gutterBottom>{data.feedback}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
}

export default CustomerFeedback
