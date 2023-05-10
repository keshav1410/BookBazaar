import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../CSS/Crousal.css";

const Crousal = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src="/assets/ExtraImages/book.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      style={{ height: "80vh", width: "100%", objectFit: "cover" }}
    />,
    <img
      src="/assets/crousal/books.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      style={{ width: "100%" }}
    />,
    <img
      src="/assets/crousal/vinyl-records.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <AliceCarousel
        mouseTracking
        items={items}
        disableDotsControls
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
      />
    </div>
  );
};

export default Crousal;
