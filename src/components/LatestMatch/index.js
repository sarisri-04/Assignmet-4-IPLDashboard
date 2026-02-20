// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>

      <img src={competingTeamLogo} alt={competingTeam} />

      <div>
        <p>First Innings: {firstInnings}</p>
        <p>Second Innings: {secondInnings}</p>
        <p>Man Of The Match: {manOfTheMatch}</p>
        <p>Umpires: {umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
