import "./ListUsers.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import { propsToClassKey } from "@mui/styles";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { updateUserAction } from "../action/user";





function ListUsers() {

    const dispatch = useDispatch();
    //משתנים של רידיוסר
    const users = useSelector((state) => state.users);
    // משתנים של תצוגה
    const [searchResultUser, setSearchResultUser] = useState([]);
    const [currentUser, setCurrentUser] = useState({ Id: 0, Name: "", Email: "", Password: "" });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setSearchResultUser(users);
    }, [users])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const searchUser = (text) => {
        console.log(text);
        if (text == "")
            setSearchResultUser([...users]);
        else {
            const changedUsers = [...users];
            const filteredArr = changedUsers.filter(r => r.Name.includes(text));
            setSearchResultUser(filteredArr);
        }
    }

    const saveDetails = ()=>{
        console.log(currentUser);
        dispatch(updateUserAction(currentUser));
    }

    return (
        <>

            <h1>ListUsers</h1>

            <TextField id="standard-basic" label="חיפוש" variant="standard" onChange={(e) => searchUser(e.target.value)} /><br />
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>שם המשתמש</TableCell>
                            <TableCell align="right">מייל</TableCell>
                            <TableCell align="right">סיסמא</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {searchResultUser.map((u) => (
                            <TableRow
                                key={u.Name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {u.Name}
                                </TableCell>
                                <TableCell align="right">{u.Mail}</TableCell>
                                <TableCell align="right">{u.Password}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete" onClick={() => { setCurrentUser({...u}); handleClickOpen(); }}>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>פרטי משתמש</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        בלה בלה בלה
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Name"
                        label="Name"
                        defaultValue={currentUser.Name}
                        type="string"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { currentUser.Name = e.target.value }}
                    />
                    <TextField
                        margin="dense"
                        id="Email"
                        label="Email"
                        defaultValue={currentUser.Mail}
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { currentUser.Mail = e.target.value }}
                    />
                    <TextField
                        margin="dense"
                        id="Password"
                        label="Password"
                        defaultValue={currentUser.Password}
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { currentUser.Password = e.target.value }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ביטול</Button>
                    <Button onClick={() => { saveDetails(); handleClose(); }}>אישור</Button>
                </DialogActions>
            </Dialog>
        </>
    )

}

export default ListUsers;