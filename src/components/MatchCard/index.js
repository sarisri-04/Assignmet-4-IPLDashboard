// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  const statusClass = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-card">
      <img src={competingTeamLogo} alt={competingTeam} className="match-logo" />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p className={statusClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
