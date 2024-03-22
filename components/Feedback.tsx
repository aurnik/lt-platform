import styles from './components.module.css'

const RULES = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eigth',
  'Ninth',
  'Tenth',
  'Other',
]

export default function Feedback() {
  return (
    <div>
      <h3>Feedback</h3>
      <ol className={styles.feedbackList}>
        {RULES.map((rule, index) => (
          <li
            key={rule}
            style={
              {
                '--border-color': `hsl(${30 * index},100%,50%)`,
              } as React.CSSProperties
            }
          >
            {rule}
          </li>
        ))}
      </ol>
    </div>
  )
}
