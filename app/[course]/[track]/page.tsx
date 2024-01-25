import TrackVersion from '@/components/TrackVersion'

interface TracksPageModel {
  courseTitle: string
  tracks: Track[]
}

export interface Track {
  title: string
  version: number
}

const TracksPage = ({ params }: { params: { course: string } }) => {
  const tracksPageData: TracksPageModel = {
    courseTitle: 'Thinking Method - Spanish',
    tracks: [
      {
        title: 'Track 1',
        version: 1,
      },
      {
        title: 'Track 1',
        version: 2,
      },
      {
        title: 'Track 1',
        version: 3,
      },
    ],
  }

  return (
    <div>
      <h1>{tracksPageData.courseTitle.toUpperCase()}</h1>
      {tracksPageData.tracks.map(({ title, version }) => (
        <span key={title}>
          <TrackVersion
            courseTitle={tracksPageData.courseTitle}
            trackTitle={title}
            version={version}
          />
        </span>
      ))}
    </div>
  )
}

export default TracksPage
