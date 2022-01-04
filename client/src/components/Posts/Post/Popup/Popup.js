import React from 'react';
import useStyles from './styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import moment from 'moment';
import Fade from '@material-ui/core/Fade';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../../actions/posts'


const Popup = ({ post, openPopup, handleClose }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openPopup}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openPopup}>
                <Card className={classes.card}>
                    <CardMedia className={classes.media} image={post.selectedFile} title="{post.title}" />
                    <div className={classes.overlay}>
                        <Typography variant="h6">{post.creator}</Typography>
                        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                    </div>
                    <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                        <ThumbUpAltIcon fontSize="small" />
                        &nbsp; Like &nbsp;
                        {post.likeCount}
                    </Button>
                    <Button size="small" color="primary" onClick={(event) => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                </CardActions>
                </Card>
            </Fade>
        </Modal>
    )

}

export default Popup