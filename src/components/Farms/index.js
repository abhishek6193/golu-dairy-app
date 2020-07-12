import React, { useEffect } from 'react'
import { Container, Grid, Typography } from '@material-ui/core';

const Farms = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Container>
            <img src="/heroImage1.jpg" alt="hero" className="heroImage" style={{width: "100%"}}/>
            <Grid container spacing={2} style={{marginTop: "10px"}}>
                <Grid item>
                    <Typography variant="body1" align="justify">In the villages of Haryana, a family of happy cows and buffalos live on a multi acres loose housing layout* farms that bear their name: Golu's Dairy. At our farms and associated farms, one is greet by our cross breed cows and Murrah buffalos, breed of cattle valued for the remarkable quality of their milk. Our farm managers and their team of experts ensure the cattle stay comfortable and happy, and have no reason to complain (not even a moo). It’s no secret that happy cattle give better milk.</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="justify">The cattle are provided with a healthy diet, ensuring the best quality milk. The cattle at Golu's Dairy farms enjoy a lifestyle like few others do, with automatic massagers to soothe them, giant fans to keep them cool all day, fogger system to reduce the shed temperature in summers and the softest beds that promise a good night’s rest after a day spent doing nothing (except well chewing).They have ruminating bays where we leave them to chew the cud, with a little encouragement from Mozart or Bach. Mother cattle have a dedicated area to bond with their little ones. And a health bay with vet on-call 24×7 for sick cattle to be nursed back to good health. Take our advice, if you want to be healthy and happy, drink our milk and live like our cattle. At Golu's Dairy farms, we ensure a proper disposal of all farm waste including dung, urine and waste fodder etc. to improve the farm hygiene and to reduce the odor problems on our dairy farms. Litter or bedding absorbs moisture, lowering the moisture content of manure and eliminating the anaerobic conditions which cause odor. The manure from cattle provides a good source of organic matter for improving soil fertility.</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="justify">We deliver directly from farm to our customers in Delhi NCR. Samples of our fresh milk are regularly checked and passed by FSSAI authorized labs for any trace of pesticides, antibiotic, chemicals and toxins. Reports are available on Golu's Dairy mobile App and anyone can check anytime. We make sure our cattle and cattle sheds are washed numerous times every day. The milking of cows is done by latest Hi Tech automatic machines and monitored the quality. Our milk products are simply pasteurized** before we deliver to our customers. We don’t add any preservatives and don’t use Growth hormone to our cattle to increase the milk productivity. In case if any of our cattle is sick, her milk is not delivered to our customers till the time she recover.</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="justify">*In loose housing, animals are kept loose in a open paddock in group of 40-50 throughout the day and night except during milking and some other specific purposes like treatment, breeding etc., when the animals are required to be tied. This housing system generally provides continuous manger along with covered standing space, open paddock which is enclosed by brick wall or railing and common water trough. A separate structure of calf pens, milking byres, calving pens, bull pens etc are also available.</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="justify">**Pasteurization was invented by a French Scientist called Louis Pasteur during the nineteenth century. Pasteur discovered that heating milk to a high temperature and then quickly cooling it before bottling or packaging it could keep it fresh for longer. Pasteurization makes sure milk is safe to drink (by killing any bacteria) and also helps to prolong its shelf life. The process of pasteurization involves heating milk to 71.7°C for at least 15 seconds (and no more than 25 seconds). Once the milk has been heated, it is then cooled very quickly to less than 3°C.</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="justify">“Golu's Dairy milk is an honest attempt to serve nutritious, chemical-free and preservative-free milk to everyone. It’s an equivalent of serving fresh whole milk from your own farm while being present in an urban living. We do not collect milk from individual farmers unlike other brands, where cattle feed, her health and milking methods are not proper.”</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Farms
