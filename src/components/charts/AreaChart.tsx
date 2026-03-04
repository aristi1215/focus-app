import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

export const AreaChart = () => {
  const data = [
    { date: '2026-02-15', score: 45 },
    { date: '2026-02-16', score: 52 },
    { date: '2026-02-17', score: 48 },
    { date: '2026-02-18', score: 61 },
    { date: '2026-02-19', score: 58 },
    { date: '2026-02-20', score: 72 },
    { date: '2026-02-21', score: 68 },
    { date: '2026-02-22', score: 85 },
    { date: '2026-02-23', score: 79 },
    { date: '2026-02-24', score: 88 },
    { date: '2026-03-01', score: 82 },
    { date: '2026-03-02', score: 90 },
    { date: '2026-03-03', score: 87 },
    { date: '2026-03-04', score: 92 },
  ]

  return (
    <LineChart
      style={{
        width: '100%',
        maxWidth: '700px',
        height: '100%',
        maxHeight: '70vh',
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis dataKey="date" stroke="var(--color-text-3)" />
      <YAxis width="auto" stroke="var(--color-text-3)" />
      <Tooltip
        cursor={{
          stroke: 'var(--color-border-2)',
        }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="score"
        stroke="var(--color-chart-1)"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
        name="Focus Score"
      />
    </LineChart>
  )
}
