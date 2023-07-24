//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//selectors
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getAllTables = ({ tables }) => tables;

//actions
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload })
export const fetchTables = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/tables')
            .then(res => res.json())
            .then(tables => dispatch(updateTables(tables)));
    }
}

//reducer
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TABLES: {
            return [...action.payload];
        }
        default: {
            return statePart;
        }
    }
}

export default tablesReducer;