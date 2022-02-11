import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props: any) => {
  const addUserHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <Card classes={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
