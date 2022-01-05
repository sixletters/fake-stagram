import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useDispatch } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import { getPosts } from './actions/posts'
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isForm, setForm] = React.useState(false);
    const handleOpenForm = () => {
        setForm(true);
    };

    const handleCloseForm = () => {
        setForm(false);
        setCurrentId(null);
    }
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]);

    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Fake-stagram</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <Posts handleOpenForm={handleOpenForm} setCurrentId={setCurrentId} />
                        </Grid>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={isForm}
                            onClose={handleCloseForm}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={isForm}>
                                <Form handleCloseForm={handleCloseForm} currentId={currentId} setCurrentId={setCurrentId} />
                            </Fade>
                        </Modal>
                    </Grid>
                    <Container className={classes.footer}>
                        <Button className={classes.button} onClick={handleOpenForm}>
                            Create a new post
                        </Button>
                    </Container>
                </Container>
            </Grow >
        </Container >
    )
}

export default App;