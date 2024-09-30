function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  let quizReaction;
  const percentage = Math.ceil((points / totalPoints) * 100);
  if (totalPoints > 90) quizReaction = "🥇";
  if (totalPoints >= 80 && percentage < 100) quizReaction = "👏🏼";
  if (totalPoints >= 50 && percentage < 80) quizReaction = "🙃";
  if (totalPoints >= 0 && percentage < 50) quizReaction = "🤔";
  if (totalPoints === 0) quizReaction = "🤦🏽‍♂️";
  return (
    <>
      <p className="result">
        <span> {quizReaction}</span> You scored <strong> {points} </strong> out
        of {totalPoints} ({percentage}%)
      </p>
      <p className="highscore">HighScore : {highScore} points</p>
      <button className="btn" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
