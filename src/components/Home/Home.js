import TablePreview from "../TablePreview/TablePreview";

const Home = () => {
    //select all tables
    const allTables = [
        {
            id: '1',
            status: 'busy',
            peopleAmount: 3,
            maxPeopleAmount: 4,
            bill: 45
        },
        {
            id: '2',
            status: 'free',
            peopleAmount: 3,
            maxPeopleAmount: 4,
            bill: 45
        },
        {
            id: '3',
            status: 'reserved',
            peopleAmount: 3,
            maxPeopleAmount: 4,
            bill: 45
        },
        {
            id: '4',
            status: 'cleaning',
            peopleAmount: 3,
            maxPeopleAmount: 4,
            bill: 45
        }
    ]

    return (
        <div>
            <h2>All tables</h2>
            {allTables.map(table => <TablePreview key={table.id} id={table.id} status={table.status}></TablePreview>)}
        </div>
    );
}

export default Home;