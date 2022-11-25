import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { get_users, set_users } from "../services/DB_connection";
import usersSlice from "../storage/usersSlice";
import users from "../storage/usersSlice";
import BLANK_PROFILE from "./../assets/images/blank-profile.svg";
import {BsFillTrashFill} from "react-icons/bs";

const StyledManagementing = observer(styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
    transform: translateY(20px);

    & ul {
        padding-right: 10px;
        border-right: 1px solid white;
    }
`);

const StyledUserTableRow = styled.tr`
    cursor: pointer;
    position: relative;

    &:hover {
        opacity: 0.8;
        background-color: #0c610e;
        border-radius: 30px;
    }

    &:hover .btn-remove {
    }

    & div {
        padding-right: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    & img {
        height: 30px;
        aspect-ratio: 1;
        border-radius: 30px;
        margin-right: 10px;
    }

    & span {
        margin-right: 3px;
    }

    & .btn-remove {
        display: flex;
        justify-content: center;
        align-items: center;

        aspect-ratio: 2/1;
        border-radius: 30px;
        color: white;
    } 


    & .btn-remove:hover {
        color: red;
    }
`;

const UserCard = observer((user) => {
    const { image = BLANK_PROFILE, username, age, rank, position } = user;

    const handleSelect = (e) => {
        const _user = { ...user };
        usersSlice.currentUser = _user;
    };

    const handleDelete = (e) => {
        const _user = { ...user };
        usersSlice.users = [
            ...usersSlice.users.filter(
                (user) => JSON.stringify(user) !== JSON.stringify(_user)
            ),
        ];
    };

    return (
        <StyledUserTableRow onClick={handleSelect}>
            <td className="cell">
                <img src={image}></img>
            </td>
            <td className="cell">{username}</td>
            <td className="cell">{age}</td>
            <td className="cell">{rank}</td>
            <td className="cell">{position}</td>
            <td className="btn-remove" onClick={handleDelete} >
                <BsFillTrashFill></BsFillTrashFill>
            </td>
        </StyledUserTableRow>
    );
});

const StyledUserForm = styled.form`
    display: flex;
    flex-direction: column;

    & div {
        display: flex;
        align-items: center;
        height: 30px;
    }
    & > input {
        margin-top: 20px;
    }
    & label {
        text-align: left;
        display: inline-block;
        width: 100px;
    }
`;

const UserForm = observer(({ onSubmit, _selectedUser }) => {
    const refUserName = useRef();
    const refAge = useRef();
    const refRank = useRef();
    const refPosition = useRef();
    const refStatus = useRef();

    useEffect(() => {
        setFieldsFromUser(usersSlice.currentUser);
    }, [usersSlice.currentUser]);

    const getUserFromFields = () => {
        return {
            username: refUserName.current.value,
            age: Number(refAge.current.value),
            rank: refRank.current.value,
            position: refPosition.current.value,
            status: refStatus.current.value,
        };
    };

    const setFieldsFromUser = (user) => {
        refUserName.current.value = user?.username ?? "";
        refAge.current.value = user?.age ?? "";
        refRank.current.value = user?.rank ?? "";
        refPosition.current.value = user?.position ?? "";
        refStatus.current.value = user?.status ?? "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleAddUser = (e) => {
        const newUser = getUserFromFields();
        const indexUser = usersSlice.users.findIndex(
            (user) => JSON.stringify(user) === JSON.stringify(newUser)
        );
        if (indexUser === -1) usersSlice.users.push(newUser);
        else {
            console.log("User with next parameters exists");
        }
    };

    const handleChangeUser = () => {
        const newUser = getUserFromFields();

        usersSlice.setSelectedUser(newUser);
    };

    const handleSaveUsers = () => {
        const _users = [...usersSlice.users];
        set_users(_users);
    };

    const handleDiscardChanges = () => {
        const _users = get_users();
        usersSlice.users = _users;
    };

    return (
        <StyledUserForm onSubmit={handleSubmit}>
            <div>
                <label>ПІБ</label>
                <input ref={refUserName}></input>
            </div>
            <div>
                <label>Вік</label>
                <input ref={refAge} />
            </div>
            <div>
                <label>Звання</label>
                <input ref={refRank} />
            </div>
            <div>
                <label>Посада</label>
                <input ref={refPosition} />
            </div>
            <div>
                <label>Стан</label>
                <input ref={refStatus} />
            </div>
            <div>
                <input type="button" value="Додати" onClick={handleAddUser} />
                <input
                    type="button"
                    value="Змінити"
                    onClick={handleChangeUser}
                />
                <input
                    type="button"
                    value="Зберегти"
                    onClick={handleSaveUsers}
                />
                <input
                    type="button"
                    value="Відхилити зміни"
                    onClick={handleDiscardChanges}
                />
            </div>
        </StyledUserForm>
    );
});

const Managementing = observer(() => {
    return (
        <StyledManagementing id="managementing">
            {!users.users || users.users.length === 0 ? (
                <div>Поки немає користувачів</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Профіль</th>
                            <th>Ім'я</th>
                            <th>Вік</th>
                            <th>Звання</th>
                            <th>Посада</th>
                            <th>Додатково</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.users?.map((user) => (
                            <UserCard {...user} key={JSON.stringify(user)} />
                        ))}
                    </tbody>
                </table>
            )}
            <UserForm />
        </StyledManagementing>
    );
});
export default Managementing;
