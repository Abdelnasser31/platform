import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import Link from '@material-ui/core/Link'
function Footer() {
  return (<div>
    <Box
    display="flex"
    justifyContent="center"
    marginBottom="16px"
    marginTop="20px"
    marginLeft="0"
    marginRight="0">
    <Typography variant="subtitle1" color="#333">Syrian Success Story | { new Date().getFullYear()}</Typography>
  </Box> <Box display = "flex" justifyContent = "center" marginBottom = "16px" marginTop = "20px" > 
  <Link href="https://www.facebook.com/SyrianSuccessStory" color="inherit" target='_blank' rel="noreferrer">  
  <FontAwesomeIcon style={{
    fontSize: 30
  }} icon={faFacebook}/> </Link>
<Link href="https://twitter.com/SyrianSStory" color="inherit" target='_blank' rel="noreferrer"> 
  <FontAwesomeIcon style = {{marginLeft: 30, fontSize: 30}} icon = {
    faTwitter
  } /> </Link>
  <Link href="https://www.linkedin.com/company/syrian-success-story" color="inherit" target='_blank' rel="noreferrer"> 
  <FontAwesomeIcon
    style={{
    marginLeft: 30,
    fontSize: 30
  }}
    icon={faLinkedin}/></Link> </Box>
   </div>
  )
}

export default Footer;