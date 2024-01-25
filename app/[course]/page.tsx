import TrackVersion from '@/components/TrackVersion'
import { Track } from './[track]/page'

interface CoursePageModel {
  title: string
  referenceTitle: string // Auto generated from the title inputted by the user by converting it to kebab-case. Used for navigation.
  tracks: Track[]
}

const TracksPage = ({ params }: { params: { course: string } }) => {
  const course: CoursePageModel = {
    title: 'Thinking Method - Spanish',
    referenceTitle: 'thinking-method-spanish',
    tracks: [
      {
        title: 'Track 1',
        version: 5,
      },
      {
        title: 'Track 2',
        version: 2,
      },
      {
        title: 'Track 3',
        version: 1,
      },
    ],
  }

  return (
    <div>
      <h1>{course.title.toUpperCase()}</h1>
      {course.tracks.map(({ title, version }) => (
        <span key={title}>
          <TrackVersion
            courseTitle={course.title}
            trackTitle={title}
            version={version}
          />
        </span>
      ))}
    </div>
  )
}

export default TracksPage
