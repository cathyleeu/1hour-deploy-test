import Sidebar from './Sidebar'
import styles from './Layout.module.scss'
import MainSection from './MainSection'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main_section}>{children}</div>
    </div>
  )
}

export default Layout
