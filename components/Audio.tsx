import styles from './components.module.css'

interface AudioProps {
  version: number
  title: string
}

export default function Audio({ version, title }: AudioProps) {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.version}>{'v' + version}</div>
        {title}
      </div>
      <div className={styles.audioPlayer}></div>
    </div>
  )
}
