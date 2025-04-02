import styles from "./Detail.module.css"

const Detail = ({ handleOnClose }) => {
    return (
        <div className={styles.modal}>
            <button className={styles.button} onClick={handleOnClose}>Cerrar</button>
        </div>
    )
}

export default Detail;