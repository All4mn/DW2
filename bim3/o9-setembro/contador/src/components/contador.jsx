import styles from "./contador.module.css"

export default function Contador(){
    return(
        <div className={styles.container}>
          <h1>Contador</h1>
          <div >0</div>
          <div >
            <button >-</button>
            <button >+</button>
          </div>
          <button >Reset</button>
        </div>
      )
}