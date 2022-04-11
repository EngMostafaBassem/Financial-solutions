import React from 'react'
import styles from './index.module.css'
const Heading=()=>{
    return(
        <h1 className={styles['head']}>
            <span className={styles['sub-head1']}> Financial</span> 
            <span className={styles['sub-head2']}> Solutions</span>
        </h1>
    )

}
export default  Heading