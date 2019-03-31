import React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Logo from './logo.jpg'

const styles = {
    img: {
        width: '8%',
        marginRight: '2rem',
    },
    back: {
        backgroundColor: '#005682',
    },
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
};

const MyAppBar = withStyles(styles)(({ classes, ...props }) => (
    <AppBar {...props} className={classes.back}>
        <img src={ Logo } className={classes.img}/>
        <Typography
            variant="title"
            color="inherit"
            className={classes.title}
            id="react-admin-title"
        />
        PARKING AERONAUTIQUE
        <span className={classes.spacer} />
    </AppBar>
));

export default MyAppBar;