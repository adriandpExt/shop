interface SingleProductRatingProps {
  rating: string[];
}

export const SingleProductRating = (props: SingleProductRatingProps) => {
  const { rating } = props;

  const renderStars = () => {
    const maxStars = 5;
    const filledStars = rating.length;
    const emptyStars = maxStars - filledStars;

    const stars = [];

    if (stars.length === 0) {
      return <p className="text-4xl text-gray-400">No rating</p>;
    }

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <span key={i} className="star filled text-4xl text-orange-400">
          &#9733;
        </span>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={filledStars + i} className="star text-4xl text-gray-400">
          &#9734;
        </span>
      );
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default SingleProductRating;
