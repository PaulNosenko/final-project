import { Button, Card } from "react-bootstrap";
import style from "./TablePreview.module.scss";
import { Link } from "react-router-dom";

const TablePreview = (props) => {
    return (
        <div className={style.card}>
            <h3>Table {props.id}</h3>
            <h5 className={style.cardSubtitle}><strong>Status:</strong> <span className={style.cardStatus}>{props.status}</span></h5>
            <Link to={`/tables/${props.id}`} className={style.cardLink}><Button>Show more</Button></Link>
        </div>
    );
}

export default TablePreview;