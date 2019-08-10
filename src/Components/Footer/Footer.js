import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (<div>
    <Box
    display="flex"
    justifyContent="center"
    marginBottom="16px"
    marginTop="20px"
    marginLeft="0"
    marginRight="0">
    <Typography variant="subtitle1" color="#333">Syrian Success Story | 2019</Typography>
  </Box> <Box display = "flex" justifyContent = "center" marginBottom = "16px" marginTop = "20px" > <FontAwesomeIcon style={{
    fontSize: 30
  }} icon={faFacebook}/> < FontAwesomeIcon style = {{marginLeft: 30, fontSize: 30}}icon = {
    faTwitter
  } /> <FontAwesomeIcon
    style={{
    marginLeft: 30,
    fontSize: 30
  }}
    icon={faLinkedin}/> </Box>
   </div>
  )
}

export default Footer;