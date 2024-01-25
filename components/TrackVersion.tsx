import Audio from './Audio'
import Feedback from './Feedback'
import Transcript from './Transcript'
import styles from './components.module.css'

interface TrackVersionProps {
  version: number
  courseTitle: string
  trackTitle: string
}
export default function TrackVersion({ version, courseTitle, trackTitle }: TrackVersionProps) {


  return (
    <div className={styles.trackVersionContainer}>
      <Audio version={version} courseTitle={courseTitle} trackTitle={trackTitle} />
      <Transcript />
      <Feedback />
    </div>
  )
}
