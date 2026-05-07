import React from 'react';

const ReviewSection = () => {
  return (
    <section className="g-review relative px-4 z-10">
      <div className="container mx-auto">
        <div className="logo-review">
          <div className="promo-card bg-white shadow-lg rounded p-20">
            <img 
              className="logo img-fluid invert contrast-100 brightness-150 saturate-0" 
              src="/ol.png" 
              alt="logo" 
            />
          </div>
          {/* <div className="review-box text-end">
            <img 
              className="g-review img-fluid" 
              src="/assets/google_reviews.png" 
              alt="google-review" 
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
