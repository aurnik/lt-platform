import TrackVersion from '@/components/TrackVersion'

const CoursesPage = ({ params }: { params: { course: string } }) => {
  return (
    <div>
      <h1>{params.course.toUpperCase()}</h1>
      <TrackVersion title="Thinking Method - Spanish - Track 1" version={5} />
      <TrackVersion title="Thinking Method - Spanish - Track 2" version={2} />
      <TrackVersion title="Thinking Method - Spanish - Track 3" version={1} />
    </div>
  )
}

export default CoursesPage
