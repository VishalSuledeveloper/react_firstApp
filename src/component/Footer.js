import React from 'react';

const Footer =(props)=>{
    console.log(props)
    return(
        <React.Fragment>
            <center>
                <hr/>
                <h3>&copy;vsdeveloper {props.year} {props.month}</h3>
               
            </center>
        </React.Fragment>
        
    )
}
export default Footer;