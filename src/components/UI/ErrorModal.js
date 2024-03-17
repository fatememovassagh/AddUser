import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css"
import {Fragment} from "react";
import reactDom from 'react-dom'

const Backdrop = (props)=>{
    return (
        <div onClick={props.onClick} className={classes.backdrop}/>
    )
}

const Layover = (props)=>{
    return(
        <Card className={classes.modal}>
            <div className={classes.header}>
                <h2>
                    {props.title}
                </h2>
            </div>
            <div className={classes.content}>
                {props.content}
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onClick}>close</Button>
            </footer>
        </Card>
    )
}
const ErrorModal = props => {
    return (
        <Fragment>
            {reactDom.createPortal(<Backdrop onClick={props.onConfirm}/> , document.getElementById('backdrop-root'))}
            {reactDom.createPortal(<Layover title={props.title} content={props.content} onClick={props.onConfirm} /> , document.getElementById('layover-root'))}
        </Fragment>
    )
}


export default ErrorModal;