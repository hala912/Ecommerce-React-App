import {Container} from "react-bootstrap"
import styles from './styles.module.css' 
import Header from "@components/common/header"
import Footer from "@components/common/footer"
 const mainlayout = () => {
  return (
    <Container className={styles.container}>
      <Header />
      <div className={styles.wrapper}></div>
      <Footer />  
    </Container>
  )
}

export default mainlayout