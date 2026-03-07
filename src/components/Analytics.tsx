import { BarChartComponent } from './charts/BarChart'
import { AreaChart } from './charts/AreaChart'
import { ResponsiveContainer } from 'recharts'

export const Analytics = () => {
  const keyInsights = [
    { name: 'Best Focus Time', data: '18.8' },
    { name: 'Best Location', data: 'Office' },
    { name: 'Average rating', data: '4.0' },
    { name: 'Total sessions', data: '81' },
  ]

  const data = [
    { date: '26-02-15', score: 45 },
    { date: '26-02-16', score: 52 },
    { date: '26-02-17', score: 48 },
    { date: '26-02-18', score: 60 },
    { date: '26-02-19', score: 55 },
    { date: '26-02-20', score: 70 },
  ]

  const growthCurve = [
    { day: 1, score: 23 },
    { day: 2, score: 35 },
    { day: 3, score: 45 },
    { day: 4, score: 50 },
    { day: 5, score: 60 },
    { day: 6, score: 65 },
    { day: 7, score: 70 },
    { day: 8, score: 75 },
    { day: 9, score: 80 },
    { day: 10, score: 85 },
    { day: 11, score: 90 },
    { day: 12, score: 92 },
    { day: 13, score: 95 },
    { day: 14, score: 100 },
    { day: 15, score: 110 },
    { day: 16, score: 120 },
    { day: 17, score: 130 },
    { day: 18, score: 140 },
    { day: 19, score: 150 },
    { day: 20, score: 160 },
    { day: 21, score: 170 },
    { day: 22, score: 180 },
    { day: 23, score: 190 },
    { day: 24, score: 200 },
    { day: 25, score: 210 },
    { day: 26, score: 220 },
    { day: 27, score: 230 },
    { day: 28, score: 240 },
    { day: 29, score: 250 },
    { day: 30, score: 290 },
  ]

  const FocusWindowByHour = [
    { hour: '00:00', score: 10 },
    { hour: '01:00', score: 20 },
    { hour: '02:00', score: 15 },
    { hour: '03:00', score: 5 },
    { hour: '04:00', score: 0 },
    { hour: '05:00', score: 0 },
    { hour: '06:00', score: 5 },
    { hour: '07:00', score: 10 },
    { hour: '08:00', score: 30 },
    { hour: '09:00', score: 50 },
    { hour: '10:00', score: 60 },
    { hour: '11:00', score: 55 },
    { hour: '12:00', score: 40 },
    { hour: '13:00', score: 35 },
    { hour: '14:00', score: 45 },
    { hour: '15:00', score: 50 },
    { hour: '16:00', score: 60 },
    { hour: '17:00', score: 70 },
    { hour: '18:00', score: 65 },
    { hour: '19:00', score: 55 },
    { hour: '20:00', score: 40 },
    { hour: '21:00', score: 30 },
    { hour: '22:00', score: 20 },
    { hour: '23:00', score: 10 },
  ]

  const locations = [
    { name: 'office', score: 83, hours: 19 },
    { name: 'home', score: 75, hours: 12 },
    { name: 'cafe', score: 65, hours: 8 },
    { name: 'library', score: 70, hours: 10 },
  ]

  const topFocusDays = [
    { date: 'feb 13', score: 7.1 },
    { date: 'feb 20', score: 6.8 },
    { date: 'feb 27', score: 6.5 },
    { date: 'mar 6', score: 6.2 },
    { date: 'mar 13', score: 6.0 },
    { date: 'mar 20', score: 5.8 },
  ]

  const performanceByWorkType = [
    { type: 'deep work', score: 85 },
    { type: 'shallow work', score: 70 },
    { type: 'meetings', score: 60 },
    { type: 'creative work', score: 90 },
    { type: 'administrative work', score: 65 },
    { type: 'learning', score: 80 },
    { type: 'research', score: 75 },
  ]

  return (
    <div className=" font-inter p-6 md:p-6 md:mx-30">
      <div className="mb-2 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-1">Analytics</h2>
        <p className="text-sm mb-4 text-gray-500 md:text-lg">
          Deep insights into your cognitive performance
        </p>
      </div>

      <div
        id="key-insights"
        className="border border-[#E5E5E5] p-3 rounded-xl md:p-6 shadow-sm"
      >
        <h3 className="font-semibold mb-3">Key insights</h3>
        <div className="grid grid-cols-2 grid-rows-2 md:grid md:grid-cols-4 md:grid-rows-1 gap-5">
          {keyInsights.map((insight) => (
            <div key={insight.name}>
              <h4 className="text-[#525252] text-[12px] md:text-sm">
                {insight.name}
              </h4>
              <p className="font-semibold text-[14px] md:text-lg">
                {insight.data}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border border-[#E5E5E5] rounded-xl shadow-sm mt-5 p-3 md:p-6 md:mt-10">
        <h3 className="mb-4 md:mb-10 md:text-lg font-semibold">
          Concentration Changes Over Time
        </h3>
        <AreaChart data={data} angle={-45} />
      </div>

      <div className="w-full border border-[#E5E5E5] rounded-xl p-6 shadow-sm mt-10">
        <h3 className="mb-4 md:mb-10 md:text-lg font-semibold">30 Days Growth Curve</h3>
        <AreaChart data={growthCurve} />
      </div>

      <div className="w-full border border-[#E5E5E5] rounded-xl p-6 shadow-sm mt-10">
        <h3 className="mb-4 md:mb-10 md:text-lg font-semibold">
          Focus Window by Hour of Day
        </h3>
        <BarChartComponent data={FocusWindowByHour} />
      </div>

      <div className="md:flex md:justify-center w-full md:gap-8 mt-8">
        <div className="mb-8 md:mb-8 border border-[#E5E5E5] rounded-xl p-6 shadow-sm w-full">
          <h3 className="mb-4 md:mb-10 md:text-lg font-semibold">Location Performance</h3>
          {locations.map((location) => (
            <div className="mb-6" key={location.name}>
              <div className="w-full flex justify-between">
                <h4 className="mb-4 md:text-lg font-semibold">{location.name}</h4>
                <p className="text-gray-600">{location.score}%</p>
              </div>
              <div
                id="progress-bar"
                className="w-full bg-gray-200 h-2.5 rounded-full"
              >
                <div
                  className="bg-black h-2.5 rounded-full"
                  style={{ width: `${location.score}%` }}
                ></div>
              </div>
              <p className="text-sm mt-3 text-gray-600">{location.hours} hours total</p>
            </div>
          ))}
        </div>

        <div className="border border-[#E5E5E5] rounded-xl p-6 shadow-sm w-full">
          <h3 className="text-[15px] mb-6 md:text-lg font-semibold">Top Focus Day</h3>
          {topFocusDays.map((day, i) => (
            <div
              className="w-full flex items-center justify-between mb-3"
              key={day.date}
            >
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full p-4 w-10 h-10 flex items-center justify-center mr-4">
                  <p className="font-semibold ">{i + 1}</p>
                </div>
                <p className="text-sm md:text-lg">{day.date}</p>
              </div>
              <p className="font-semibold text-sm md:text-lg">{day.score} h</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-[#E5E5E5] rounded-xl p-6 shadow-sm w-full mt-8">
        <h3 className="mb-6 text-sm md:text-lg font-semibold">Performance by Work Type</h3>
        <BarChartComponent data={performanceByWorkType} />
      </div>
    </div>
  )
}
