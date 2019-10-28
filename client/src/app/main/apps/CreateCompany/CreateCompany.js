import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';

import OneCompany from './oneCompany/onecompany';
class CreateCompany extends Component{
    state={
        open:false,
        firstName:"",
        lastName:"",
        password:"",
        designation:"",
        companyUsername:"",
        companyName:"",
        about:"",
        yearFounded:"",
        email:"",
        
        cert_open:false
    }
    componentDidMount()
    {
      this.props.getCompanyDetail();
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
      const data={
        companyName:this.state.companyName,
        email:this.state.email,
        about:this.state.about,
        yearFounded:this.state.yearFounded,
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        password:this.state.password,
        designation:this.state.designation,
        companyUsername:this.state.companyUsername

      }
    this.props.postCompanyDetail(data);
    this.setState({
      open:false
    })
    }
    
    render()
    {
      let mapCompanydetails;
      if(this.props.companyDetails)
      {
        mapCompanydetails=this.props.companyDetails.map((company)=>{
          return <OneCompany 
          companyUsername={company.companyUsername}
          companyName={company.companyName}
          about={company.about}
          yearFounded={company.yearFounded}
          firstName={company.firstName}
          lastName={company.lastName}
          email={company.email}
          designation={company.designation}
          ></OneCompany>
        })
      }
       
        return (
          <div>
          
             
            <Button  size="large" variant="contained"
          color="primary"  onClick={this.handleClickOpen} >
          Add Company
          </Button>
   {mapCompanydetails}
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Company Detail</DialogTitle>
            <DialogContent>
              <DialogContentText>
               We are here to help you to make things move faster at good rate.Share your details with us to make a stronger bond
              </DialogContentText>
              <Grid container spacing={1}>
                  <Grid item md={6} style={{padding:"10px"}}>
                  <TextField
                autoFocus
                margin="dense"
                id="name"
                label="First name"
                type="text"
                name="firstName"
                fullWidth
                onChange={this.handleChange}
              />
                  </Grid>
                  <Grid item md={6} style={{padding:"10px"}}>
                  <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Last name"
                type="text"
                name="lastName"
                fullWidth
                onChange={this.handleChange}
              />
                  </Grid>
              </Grid>
              <Grid container spacing={1}>
                  <Grid item md={6} style={{padding:"10px"}}>
                  <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email"
                type="text"
                name="email"
                fullWidth
                onChange={this.handleChange}
              />
                  </Grid>
                  <Grid item md={6} style={{padding:"10px"}}>
                  <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                name="password"
                fullWidth
                onChange={this.handleChange}
              />
                  </Grid>
                  </Grid>
            
              <br></br>
               <TextField
                autoFocus
                margin="dense"
                id="designation"
                label="Designation"
                type="text"
                name="designation"
                fullWidth
                onChange={this.handleChange}
              />
              <br></br>
              <Grid container spacing={1}>
                  <Grid item md={6} style={{padding:"10px"}}>
                  <TextField
                autoFocus
                margin="dense"
                id="companyname"
                label="Company Name"
                type="text"
                name="companyName"
                fullWidth
                onChange={this.handleChange}
              />
                  </Grid>
                  <Grid item md={6} style={{padding:"10px"}}>
                  <TextField
                autoFocus
                margin="dense"
                id="companyUsername"
                label="Company Username"
                type="text"
                name="companyUsername"
                fullWidth
                onChange={this.handleChange}
              />
                  </Grid>
              </Grid>
               
              <br></br>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="About the company"
                type="text"
                name="about"
                fullWidth
                onChange={this.handleChange}
              />
              <br></br>
              <TextField
                autoFocus
                margin="dense"
                id="yearFounded"
                label="Year Founded"
                type="text"
                name="yearFounded"
                fullWidth
                onChange={this.handleChange}
              />
              <br></br>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} color="primary" >
                Done
              </Button>
            </DialogActions>
          </Dialog>
            
            
            
            </div>
           
            
          );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        postCompanyDetail: Actions.postCompanyDetail,
        getCompanyDetail:Actions.getCompanyDetail
    }, dispatch);
}

function mapStateToProps({createCompany})
{
    return {
        companyDetails: createCompany.company.data
    }
}

export default withReducer('createCompany', reducer)(withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCompany)));



 