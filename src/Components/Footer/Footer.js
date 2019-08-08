import React from 'react';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter ,faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <Box display="flex" justifyContent="center" marginBottom="16px" marginTop="20px">
     <FontAwesomeIcon style={{fontSize: 30}} icon={faFacebook} />
     <FontAwesomeIcon style={{marginLeft: 30, fontSize: 30}} icon={faTwitter} />
     <FontAwesomeIcon style={{marginLeft: 30, fontSize: 30}} icon={faLinkedin} />
    </Box>
  )
}

export default Footer;
