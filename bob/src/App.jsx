import React, { useState } from 'react';

function RatingComponent() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

 
  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };


  const handleSubmit = () => {
    if (selectedRating) {
      setSubmitted(true);
    }
  };

 
  if (submitted) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="bg-gray-800 text-center p-8 rounded-xl w-80">
          <div className="flex justify-center mb-4">
            <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.707-9.707a1 1 0 00-1.414 0L5 12.586V11a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 100-2H6.414l2.293-2.293a1 1 0 000-1.414zm8 0a1 1 0 00-1.414 0L13 12.586V11a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 100-2h-1.586l2.293-2.293a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-lg text-gray-200">You selected {selectedRating} out of 5</p>
          <h2 className="text-2xl font-bold text-white mt-4">Thank you!</h2>
          <p className="text-gray-400 mt-2">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl w-80 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">How did we do?</h1>
        <p className="text-gray-400 mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        
        <div className="flex justify-between mb-6">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              className={`w-12 h-12 rounded-full ${
                selectedRating === rating ? 'bg-gray-500 text-white' : 'bg-gray-700 text-gray-400'
              } focus:outline-none`}
              onClick={() => handleRatingSelect(rating)}
            >
              {rating}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!selectedRating}
          className={`w-full py-2 rounded-lg font-semibold ${
            selectedRating ? 'bg-orange-500 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default RatingComponent;
