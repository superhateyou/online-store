export const CommentStars = ({ data, id }) => {
  let result = [];
  for (let i = 5; i > 0; i--) {
    result.push(<span key={`star_${id}_${i}`}
      className={`raiting__star ${data === i ? "raiting__star_active" : ""}`}>
      {`${i} ${i > 1 ? "звезды" : "звезда"}`}
    </span>)
  }
  return result
}