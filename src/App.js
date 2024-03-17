import AddUserForm from "./components/Users/addUserForm";
import UsersList from "./components/Users/usersList";
import {Fragment, useState} from "react";
function App() {
    const [usersList, setUsersList] = useState([])
    const updateUsersList = (username , userage) =>{
        setUsersList((prevState)=>{
            return [...prevState , {id:  Math.random().toString() , name:username , age:userage}]
        })
    }
    let content
    if (usersList.length>0){
        content = <UsersList users={usersList}></UsersList>
    }
    else content = ''
  return(
          <Fragment>
              <AddUserForm onAddUser={updateUsersList}></AddUserForm>
              {content}
          </Fragment>
      )
}

export default App;
