//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//selectors
export const getTableById = ({tables}, tableId) => tables.find(table => table.id === tableId);
export const getAllTables = ({tables}) => tables;

//actions
//TODO

//reducer
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TABLE: {
            return statePart;
        }
        case UPDATE_TABLES: {
            return statePart;
        }
        default: {
            return statePart;
        }
    }
}

export default tablesReducer;