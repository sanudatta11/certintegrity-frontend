import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Theme1 from './CertificateThemes/Theme1/cerrt_theme1';
import Theme2 from './CertificateThemes/Theme2/cert_theme2';
import './CertificateApp.css';

class Certificate extends Component{
    state={
        open:false,
        name:"",
        email:"",
        coursename:"",
        company:"",
        duration:"",
        issuedate:"",
        themeOption:0,
        cert_open:false
    }
    
    handleClickOpen=()=>{
        this.setState({
            open:true
        })
    }
    handleClose=()=>{
        this.setState({
            open:false
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=()=>{
        if(this.state.name)
        {
            console.log(this.state)
        }
       this.setState({
          open:false,
          cert_open:true 
       })
    }
    renderSwitch(themeOption)
    {
      switch (themeOption) {
        case 0:
          return <Theme1
           name={this.state.name} 
           email={this.state.email}
           coursename={this.state.coursename}
           duration={this.state.duration}
           issuedate={this.state.issuedate}
           company={this.state.company}
           ></Theme1>
        
        case 1:
          return<Theme2
          name={this.state.name} 
          email={this.state.email}
          coursename={this.state.coursename}
          duration={this.state.duration}
          issuedate={this.state.issuedate}
          company={this.state.company}></Theme2>
        
        default:
          return <h1>Nothing to render</h1>
        
      }
    }
    render()
    {
      
       
        return (
          <div>
          {this.state.cert_open?
            
            //true case showing cert
            <div style={{margin:"45px"}}>
    <Grid container>
        <Grid item md={3} style={{backgroundColor:"#3C4252"}}>
           <div >
           
          {/* working in card  */}
          <div className="certificate_themes">
           <div className="card" onClick={()=>{this.setState({
            themeOption:0
          })}}>
            <div className="header">
                 <img src="https://placeimg.com/200/130/animals" style={{width:"100%",height:"100%"}} alt="theme1"></img>
            </div>
          <div className="container">
          <p>Theme 1</p>
          </div>
          </div>
          <div className="card" onClick={()=>{this.setState({
            themeOption:1
          })}}>
            <div className="header">
                 <img src="https://placeimg.com/200/130/nature" style={{width:"100%",height:"100%"}} alt="theme1"></img>
            </div>
          <div className="container">
          <p>Theme 2</p>
          </div>
          </div>
          <div className="card" onClick={()=>{this.setState({
            themeOption:2
          })}}>
            <div className="header">
                 <img src="https://placeimg.com/200/130/arch" style={{width:"100%",height:"100%"}} alt="theme1"></img>
            </div>
          <div className="container">
          <p>Theme 3</p>
          </div>
          </div>
          <div className="card" onClick={()=>{this.setState({
            themeOption:3
          })}}>
            <div className="header">
                 <img src="https://placeimg.com/200/130/animals" style={{width:"100%",height:"100%"}} alt="theme1"></img>
            </div>
          <div className="container" onClick={()=>{this.setState({
            themeOption:4
          })}}>
          <p>Theme 4</p>
          </div>
          </div>
          <div className="card" onClick={()=>{this.setState({
            themeOption:3
          })}}>
            <div className="header">
                 <img src="https://placeimg.com/200/130/animals" style={{width:"100%",height:"100%"}} alt="theme1"></img>
            </div>
          <div className="container">
          <p>Theme 2</p>
          </div>
          </div>
              </div>
           </div>
        </Grid>
        <Grid item md={9}>
            
             {this.renderSwitch(this.state.themeOption)}
             
        </Grid>
    </Grid>
</div>
            
            
            :<div>
             
            <Button  size="large" variant="contained"
          color="secondary"  onClick={this.handleClickOpen} style={{margin:"18% 40%"}}>
            Generate Your Certificate
          </Button>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Certificate Detail</DialogTitle>
            <DialogContent>
              <DialogContentText>
               Provide us with the correct data.So,that we can help you in generating your desired certificate
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                name="email"
                fullWidth
                onChange={this.handleChange}
              />
              <br></br>
               <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                name="name"
                fullWidth
                onChange={this.handleChange}
              />
              <br></br>
               <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Course Name"
                type="text"
                name="coursename"
                fullWidth
                onChange={this.handleChange}
              />
              <br></br>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Company Name"
                type="text"
                name="company"
                fullWidth
                onChange={this.handleChange}
              />
              <br></br>
              <Grid container spacing={1}>
                  <Grid item md={6} style={{padding:"10px"}}>
                  <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Issue Date"
                type="text"
                name="issuedate"
                fullWidth
                onChange={this.handleChange}
              />
                  </Grid>
                  <Grid item md={6} style={{padding:"10px"}}>
                  <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Duration"
                type="text"
                name="duration"
                fullWidth
                onChange={this.handleChange}
              />
                  </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
            
            
            
            </div>}
            </div>
            
          );
    }
}
export default Certificate;


 