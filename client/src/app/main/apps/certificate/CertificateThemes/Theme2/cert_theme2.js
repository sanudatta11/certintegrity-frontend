import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './cert_theme2.css';
const Theme2=(props)=>{
    return(
        <Grid container>
        <Grid item md={12} style={{padding:"45px 25px",margin:"0px 15px"}} className="parentDiv">
      <div style={{width:"25%",margin:"0px 36%"}}>
          <img src={require("../../image/google-logo.jpg")}></img>
      </div>
      <Typography variant="subtitle2" className="cert_details">
          This acknowledge that
      </Typography>
      <Typography variant="h4">
        {props.name}
      </Typography>
      <Typography variant="subtitle2" className="cert_details">
          has successfully completed all the requirements to be recognized as a
      </Typography>
      <Typography variant="h4" className="cert_details">
        {props.coursename}
      </Typography>
      <br></br><br></br><br></br>
      <Grid container>
          <Grid item md={6}>
          <div style={{textAlign:"left"}}>
      <Typography variant="subtitle2" className="sideDetails">
          Series id : 2515 <br></br>
          Issue Date : {props.issuedate}<br></br>
          Expiration Date:21 Aug,2025<br></br>
          Certification Id : 458BX7895 <br></br>
      </Typography>
      </div>
          </Grid>
          <Grid item md={6} justify="flex-end">
          <div  className="sideDetails">
          <p style={{fontFamily:"'Tangerine', cursive",fontSize:"3rem",borderBottom:"1px solid grey"}}>Dilip kumar</p>
         <p>CEO, GOOGLE</p>
      </div>
          </Grid>
      </Grid>
   
      
        </Grid>
</Grid>
    )
}
export default Theme2;