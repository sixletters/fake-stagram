import { mergeClasses } from '@material-ui/styles';
import React, { useState } from 'react';
import useStyles from './styles';
import {TextField, Button, Typography, paper} from '@material-ui/core'


//functional component use Hooks to preserve and remember states
const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',title: '',message: '', tags: '', selectedFile: ''
    });
    const classes = useStyles();
    const handleSubmit= () => {

    }
    return (
        <paper className={classes.paper}>
            <form autocomplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Creating a memory
                </Typography>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator}
                    onChange={}
                />   
            </form>
        </paper>
    )
}


export default Form;