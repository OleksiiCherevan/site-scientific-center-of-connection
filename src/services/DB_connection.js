// const EXAMPLE_USER = {
//     username,
//     age,
//     rank,
//     position,
//     user_status
// }

const STORAGE_VALUE = "users"

export const set_users = (users) => {
    const string_users = JSON.stringify(users); 
    localStorage.setItem(STORAGE_VALUE, string_users);
}

export const get_users = () => {
    const string_users = localStorage.getItem(STORAGE_VALUE);
    if (!string_users || string_users?.length === 0)
        return []
    return JSON.parse(string_users);
} 


// function add (user) {
//     users = get_users
// }
