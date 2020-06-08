import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Card,
    Box,
    CardContent,
    CardMedia,
    CardActionArea,
    Typography,
    Modal,
    Backdrop,
    Fade
} from '@material-ui/core';

const backColor = "#0d47a1 ";
const useStyles = makeStyles((theme) => ({
    card : {
        height: "550px",
        backgroundColor: backColor
    },
    imageMedia: {
        clipPath: 'polygon(0 0, 100% 0%, 100% 86%, 0% 100%)',
        backgroundColor: backColor,
        height: "337px"
    },
    textArea: {
        backgroundColor: backColor
    },
    paper: {
        maxWidth: 400,
        maxHeight: 400,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const WhiteTextTypography = withStyles({
    root: {
        color: "#fafafa"
    }
})(Typography);
export default function CustomCard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClick = () => {
        handleOpen();

    }

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Box boxShadow={3}>
            <Card className={classes.card}>
                    <CardActionArea onClick={handleClick}>
                        <div className={classes.textArea}>
                            <CardMedia
                                className={classes.imageMedia}
                                component="img"
                                alt={props.pictureAlt} title={props.pictureTitle}
                                image={props.picture}
                            />
                        </div>
                        <CardContent className={classes.textArea} >
                            <WhiteTextTypography gutterBottom variant="h5" component="h2">
                                {props.pictureTitle}
                            </WhiteTextTypography>
                            <WhiteTextTypography variant="body2" color="textSecondary" component="p">
                                {props.pictureText}
                            </WhiteTextTypography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div onClick={handleClose} className={classes.paper}>
                        <img className={classes.paper} alt={props.pictureAlt} title={props.pictureTitle} src={props.picture} />
                    </div>
                </Fade>
            </Modal>
        </React.Fragment>
    );
}