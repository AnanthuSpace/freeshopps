const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating); // Full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  
    return (
      <div className="flex">
        {[...Array(totalStars)].map((_, i) => (
          <span key={i}>
            {i < filledStars ? (
              <span className="text-yellow-500">★</span> // Full star
            ) : i === filledStars && hasHalfStar ? (
              <span className="text-yellow-500">☆</span> // Half star
            ) : (
              <span className="text-gray-300">★</span> // Empty star
            )}
          </span>
        ))}
      </div>
    );
  };

  export default StarRating
  