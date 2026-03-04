export const Analytics = () => {
  const keyInsights = [
    { name: 'Best Focus Time', data: '18.8' },
    { name: 'Best Location', data: 'Office' },
    { name: 'Average rating', data: '4.0' },
    { name: 'Total sessions', data: '81' },
  ]
  return (
    <div className="p-6 font-inter">
      <h2 className="text-2xl">Analytics</h2>
      <p className="text-main-gray text-lg">
        Deep insights into your cognitive performance
      </p>

      <div id="key-insights" className="border border-[#E5E5E5] rounded-xl p-3">
        <h3>Key insights</h3>
        <div className="flex justify-start gap-60">
          {keyInsights.map((insight) => (
            <div>
              <h4>{insight.name}</h4>
              <b>{insight.data}</b>
            </div>
          ))}

        </div>
      </div>

      <div>
        <h2>Concentration Changes Over Time</h2>
      </div>

      <div>
        <h2>30 Days Growth Curve</h2>
      </div>

      <div>
        <h2>Focus Window by Hour of Day</h2>
      </div>

      <div>
        <div>
          <h3>Location Performance</h3>
          {/* mapeo de locations */}
          <div>
            <div>
              <h4>Office</h4>
              <p>83%</p>
            </div>
            <div id="progress-bar"></div>
            <p>19 hours total</p>
          </div>
        </div>

        <div>
          <h3>Top Focus Day</h3>
          <div>
            <p>1</p>
            <p>feb 13</p>
            <p>7.1</p>
          </div>
        </div>
      </div>

      <div>
        <h3>Performance by Week Type</h3>
      </div>
    </div>
  )
}
