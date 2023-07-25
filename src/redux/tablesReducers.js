import { API_URL } from "../config";

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//selectors
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getAllTables = ({ tables }) => tables;

//actions
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload })
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload })
export const fetchTables = () => {
    return (dispatch) => {
        fetch(`${API_URL}/tables`)
            .then(res => res.json())
            .then(tables => dispatch(updateTables(tables)));
    }
}
export const updateTableRequest = (payload, sideEffectFn) => {
    return (dispatch) => {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }
        fetch(`${API_URL}/tables/${payload.id}`, options)
            .then(() => dispatch(updateTable(payload)))
            .then(() => sideEffectFn())
    };
}

//reducer
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TABLE: {
            return [...statePart.filter(t => t.id !== action.payload.id), action.payload];
        }
        case UPDATE_TABLES: {
            return [...action.payload];
        }
        default: {
            return statePart;
        }
    }
}

export default tablesReducer;