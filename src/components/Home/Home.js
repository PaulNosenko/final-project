import { useSelector } from "react-redux";
import TablePreview from "../TablePreview/TablePreview";
import { getAllTables } from "../../redux/tablesReducers";

const Home = () => {
    const allTables = useSelector(getAllTables);

    if (!allTables.length) return <h2>Loading...</h2>;

    return (
        <div>
            <h2>All tables</h2>
            {allTables.map(table => <TablePreview key={table.id} id={table.id} status={table.status}></TablePreview>)}
        </div>
    );
}

export default Home;