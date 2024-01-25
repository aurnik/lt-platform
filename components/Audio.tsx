import Link from 'next/link'
import styles from './components.module.css'
import kebabCase from 'just-kebab-case';

interface AudioProps {
  version: number
  courseTitle: string
  trackTitle: string
}

export default function Audio({ version, courseTitle, trackTitle }: AudioProps) {
  const link = kebabCase(courseTitle) + '/' + kebabCase(trackTitle);
  
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.version}>{'v' + version}</div>
        <Link href={link}>{courseTitle} {trackTitle}</Link>
      </div>
      <div className={styles.audioPlayer}></div>
    </div>
  )
}
