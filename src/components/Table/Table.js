import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getTableById, updateTableRequest } from "../../redux/tablesReducers";
import { Button, Col, Form, Row } from "react-bootstrap";
import style from './Table.module.scss';
import { useEffect, useState } from "react";
import TableStatus from "../../enums/TableStatus";

const Table = () => {
    const { tableId } = useParams();
    const currentTable = useSelector((store) => getTableById(store, tableId));
    const [status, setStatus] = useState(currentTable?.status);
    const [peopleAmount, setPeopleAmount] = useState(currentTable?.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(currentTable?.maxPeopleAmount);
    const [bill, setBill] = useState(currentTable?.bill);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if ([TableStatus.Cleaning, TableStatus.Free].includes(status)) {
            setPeopleAmount(0);
        }
    }, [status]);

    useEffect(() => {
        if (peopleAmount && maxPeopleAmount && +peopleAmount > +maxPeopleAmount) {
            setPeopleAmount(maxPeopleAmount);
        }
    }, [maxPeopleAmount]);

    const updateTable = (e) => {
        e.preventDefault();

        const payload = {
            id: tableId,
            status,
            peopleAmount,
            maxPeopleAmount,
            bill
        }

        dispatch(updateTableRequest(payload, navigateToHome));
    }

    const navigateToHome = () => {
        navigate("/");
    }

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        if (status === TableStatus.Busy && newStatus !== TableStatus.Busy) {
            setBill(0);
        }
        setStatus(newStatus);
    };

    const handlePeopleAmountChange = (event) => {
        const newPeopleAmount = event.target.value;

        if (+newPeopleAmount > +maxPeopleAmount) {
            setPeopleAmount(maxPeopleAmount);
        } else if (+newPeopleAmount < 0) {
            setPeopleAmount(0);
        } else {
            setPeopleAmount(newPeopleAmount);
        }
    };

    const handleMaxPeopleAmountChange = (event) => {
        const newMaxPeopleAmount = event.target.value;

        if (newMaxPeopleAmount < 0) {
            setMaxPeopleAmount(0);
        } else if (+newMaxPeopleAmount > 10) {
            setMaxPeopleAmount(10);
        } else {
            setMaxPeopleAmount(newMaxPeopleAmount);
        }
    };

    const handleBillChange = (event) => {
        setBill(event.target.value);
    };

    if (!currentTable) return <Navigate to="/" />

    return (
        <div>
            <h2>Table {currentTable.id}</h2>
            <Form onSubmit={updateTable}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" className={style.formGroup}>
                        <Form.Label><strong>Status:</strong></Form.Label>
                        <Form.Select value={status} onChange={handleStatusChange}>
                            {Object.values(TableStatus).map(s => <option key={s}>{s}</option>)}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="3" className={style.formGroup}>
                        <Form.Label><strong>People:</strong></Form.Label>
                        <Form.Control type="text" value={peopleAmount} onChange={handlePeopleAmountChange} /> /
                        <Form.Control type="text" value={maxPeopleAmount} onChange={handleMaxPeopleAmountChange} />
                    </Form.Group>
                </Row>

                {
                    status === TableStatus.Busy && <Row className="mb-3">
                        <Form.Group as={Col} md="2" className={style.formGroup}>
                            <Form.Label><strong>Bill:</strong></Form.Label>
                            $ <Form.Control type="text" value={bill} onChange={handleBillChange} />
                        </Form.Group>
                    </Row>
                }


                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
}

export default Table;