import styles from  '../../styles/topnav.module.css';

export default function TopNav(){
    return (
        <>
            <div className={styles.topnav}>
                <img className={styles.logo} src="./stackline_logo.svg" alt="Logo"/>
            </div>
        </>
    )
}