import { useState } from "react"
import styles from "./loader.module.css"

export default function Loader(){
    const [loadingState, setLoadingState] = useState(false)

    return(
        <div className={styles.loaderHero}>
            <div className={styles.loader}></div>
        </div>
    )
}