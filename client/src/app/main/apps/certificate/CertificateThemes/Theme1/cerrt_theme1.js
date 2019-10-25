import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './cert_theme1.css';
const Theme1=(props)=>{
    return(
        <Grid container>
        <Grid item md={8} style={{backgroundColor:"#F7FCFF",padding:"45px 25px"}}>
        <Typography variant="h5" className="brandTitle" id="certificate_details">
       <b>CERTIFICATE OF COMPLETION</b>
          </Typography>
          <Typography variant="h5" id="certificate_details">
       <b>THIS CERTIFIES THAT</b>
          </Typography>
          <Typography variant="h3" id="certificate_details" className="brandTitle">
       <b>{props.name}</b>
          </Typography>
          <Typography variant="h5" id="certificate_desc">
       <b>successfully completed the summer training program in<br></br> the domain of {props.coursename}</b>
          </Typography>
          <Grid container id="certificate_desc">
          <Grid item md={6}>
              <h2>ISSUED ON</h2>
          <Typography variant="h6">
              {props.issuedate}
          </Typography>
          </Grid>
          <Grid item md={6}>
              <h2>ISSUED BY</h2>
              <Typography variant="h6">
              {props.company}
          </Typography>
          </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} style={{backgroundColor:"mediumseagreen"}}>
            <Grid item md={12} style={{backgroundColor:"#081F2F"}} className="banner">
                <img src={require('../../image/b222.JPG')}></img>
            </Grid>
            <Grid item md={12} style={{backgroundColor:"#1BA0ED",padding:"50px"}}>
                <img src={require('../../image/b233.JPG')}></img>
            </Grid>
        </Grid>
</Grid>
    )
}
export default Theme1;