import React from 'react';
import Post from './Post/Post'
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress} from '@material-ui/core'

const Posts = ({handleOpenForm, setCurrentId}) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    
    return (
       !posts.length ? <CircularProgress/> :
       <Grid className={classes.container} container alignItems="stretch" spacing={2}>
           {posts.map((post) => (
               <Grid key = {post._id} item xs={12} sm={4}>
                   <Post handleOpenForm={handleOpenForm} post={post} setCurrentId={setCurrentId}/>
                </Grid>
           ))}
       </Grid>
    )
}


export default Posts;