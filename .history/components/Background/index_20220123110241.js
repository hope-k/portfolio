import React, {useState, useEffect} from 'react'
import styles from '../../styles/background.module.scss'

const Background = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (document.readyState !== 'loading') {
      setLoaded(true)
    }
  }, [])
    return (
        <>
        {
            loaded &&
            <div className={styles.background}></div>
        }
        </>
    )
};

export default Background;
