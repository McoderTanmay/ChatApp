import styles from './cover.module.css';

function Cover(props){
    
    return(
        <div className={styles.box}>{props.component}</div>
    )
}
export default Cover;