type StarRatingProps = {
  value?: 0 | 1 | 2 | 3 | 4 | 5
}

export const StarRating: React.FunctionComponent<StarRatingProps> = ({ value = 0 }) => {
  return (
    <div>
      <ul>
        <li>X</li>
        <li>X</li>
        <li>X</li>
        <li>X</li>
        <li>X</li>
      </ul>
    </div>
  )
}
