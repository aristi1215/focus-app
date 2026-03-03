export const Analytics = () => {
  return (
    <div>
      <h2>Analytics</h2>
      <p>Deep insights into your cognitive performance</p>

      <div id="key-insights">
        <h3>Key insights</h3>
        <div className="flex justify-evenly">
          <div>
            <h4></h4>
            <b></b>
          </div>
          <div>
            <h4></h4>
            <b></b>
          </div>
          <div>
            <h4></h4>
            <b></b>
          </div>
          <div>
            <h4></h4>
            <b></b>
          </div>
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
