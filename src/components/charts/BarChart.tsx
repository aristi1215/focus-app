import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts'

export const BarChartComponent = ({
  data,
  angle,
}: {
  data: { [key: string]: string | number }[]
  angle?: number
}) => {
  if (!data || data.length === 0) return null

  return (
    <BarChart
      style={{ width: '100%', maxHeight: '30rem', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis angle={angle} dataKey={Object.keys(data[0])[0]} />
      <YAxis width="auto" stroke="black" />
      <Tooltip />
      <Bar
        dataKey={Object.keys(data[0])[1]}
        fill="black"
        isAnimationActive={true}
      />
    </BarChart>
  )
}
