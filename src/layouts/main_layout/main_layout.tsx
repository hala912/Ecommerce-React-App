import {Container} from "react-bootstrap"
import styles from './styles.module.css' 
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
import { Outlet } from "react-router-dom"
const MainLayout = () => {
  return (
    <Container className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <Outlet /> //to render the pages wanted here 
      </div>
      <Footer />  
    </Container>
  )
}

export default MainLayout