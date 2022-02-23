export const CommentStars = ({ data }) => {
  let result = [];
  for (let i = 5; i > 0; i--) {
    result.push(<span className={`raiting__star ${data === i ? "raiting__star_active" : ""}`}>
      {`${i} ${i > 1 ? "звезды" : "звезда"}`}
    </span>)
  }
  return result
}