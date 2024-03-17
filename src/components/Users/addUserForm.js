import classes from "./addUserForm.module.css";
import React, {Fragment, useState} from 'react';
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
const AddUserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] =useState()
    const addUserHandler = (event) => {

        event.preventDefault();
        if (enteredAge.trim().length===0 || enteredUsername.trim().length === 0){
            setError({
                title:'invalid username or passwords',
                message:'Please enter username and password'
            })

            return;
        }
        if (+enteredAge < 1){
            setError({
                title:'Invalid age is entered',
                message:'Please enter the correct age ranged from 1 to 99'
            })
            return;
        }
        props.onAddUser(enteredUsername , enteredAge)
        setEnteredAge('')
        setEnteredUsername('')
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    const errorHandler = event =>{
        setError('')
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} content={error.message} onConfirm={errorHandler}/> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={enteredUsername} type="text" onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" value={enteredAge} type="number" onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
};
export default AddUserForm;