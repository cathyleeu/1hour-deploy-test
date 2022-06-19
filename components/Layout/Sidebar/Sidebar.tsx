import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo} />
      <div className={styles.select_group}>
        <select className={styles.learning} />
        <select className={styles.review} />
      </div>
    </div>
  )
}

export default Sidebar
