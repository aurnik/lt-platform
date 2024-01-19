import Audio from './Audio'
import Feedback from './Feedback'
import Transcript from './Transcript'
import styles from './components.module.css'

interface TrackVersionProps {
  version: number
  title: string
}
export default function TrackVersion({ version, title }: TrackVersionProps) {
  return (
    <div className={styles.trackVersionContainer}>
      <Audio version={version} title={title} />
      <Transcript />
      <Feedback />
    </div>
  )
}
