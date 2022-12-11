const getInitialState = () => {
    return {
        recipies: [],
        filteredRecipies: [],
        categories: [],
        user: null,
        users: [],
        filteredUsers: [],
        message:""
    };
}

//{ type:"GET_RECIPIES", payload:[]}


export const reducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case "GET_RECIPIES": {
            const listRecipies = action.payload;
            return {
                ...state,
                recipies: listRecipies,
                filteredRecipies: listRecipies
            }
        }
        case "FILTER_RECIPIES_BY_CATEGORY": {
            //קבלת נתונים מהאקשן    
            const categories = action.payload;
            const category = categories.category;
            const subCategory = categories.subCategory;
            //עדכון מידע בסטייט נעשה בצורה הבאה
            let copiedRecipies = [...state.recipies]
            copiedRecipies = copiedRecipies.filter(r => r.category == category);
            if (subCategory != null)
                copiedRecipies = copiedRecipies.filter(r => r.subCategory == subCategory);
            return {
                ...state,
                filteredRecipies: copiedRecipies,
            }
        }
        case "GET_USERS": {
            const listUsers = action.payload;
            return {
                ...state,
                users: listUsers,
                filteredUsers: listUsers
            }
        }
        case "GET_CATEGORIES": {
            return {
                ...state,
                categories: action.payload
            }
        }
        case "USER_LOGGED_IN": {
            return {
                ...state,
                user: action.payload
            }
        }
        case "USER_LOGGED_OUT": {

        }
        case "UPDATE_USER": {
            const user = action.payload.user; //האובייקט שאני רוצה לעדכן
            const modifiedUsers = [...state.users]; //שכפול של המערך שאותו צריך לעדכן
            const index = modifiedUsers.findIndex(u => u.Id == user.Id); //מוצאת את האינדקס של המשתמש ששיניתי בדאטה בייס
            modifiedUsers[index]={...user}; //החלפת המשתמש הלא מעודכן במשתמש המעודכן
            return{
                ...state,
                users:modifiedUsers
            }
        }
        case "UPDATE_MESSAGE":{
            const txt = action.payload;
            return{
                ...state,
                message:txt
            }
        }

        default: {
            return state;
        }
    }
}


