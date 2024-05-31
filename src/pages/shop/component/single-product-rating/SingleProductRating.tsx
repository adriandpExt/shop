interface SingleProductRatingProps {
  rating: number; // Changed from string[] to number
  onChange?: (rating: number) => void; // Optional callback function for handling rating changes
}

export const SingleProductRating = (props: SingleProductRatingProps) => {
  const { rating, onChange } = props;

  const renderStars = () => {
    const maxStars = 5;

    const stars = [];

    for (let i = 0; i < maxStars; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i < rating ? "filled" : ""} text-4xl ${
            i < rating ? "text-orange-400" : "text-gray-400"
          }`}
          onClick={() => onChange && onChange(i + 1)}
        >
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default SingleProductRating;
