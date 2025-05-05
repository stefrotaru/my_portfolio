import { useState, useRef, useEffect } from 'react';

const MinimalistCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const carouselRef = useRef(null);
  
  // Set up Intersection Observer to detect when carousel is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the carousel is visible
    );
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);
  
  // Mark current image and adjacent images for loading when carousel is visible
  useEffect(() => {
    if (isVisible) {
      const imagesToLoad = {};
      // Load current image
      imagesToLoad[currentIndex] = true;
      
      // Preload next image
      const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      imagesToLoad[nextIndex] = true;
      
      // Preload previous image
      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      imagesToLoad[prevIndex] = true;
      
      setLoadedImages(prev => ({ ...prev, ...imagesToLoad }));
    }
  }, [isVisible, currentIndex, images]);
  
  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // If no images are provided, return null
  if (!images || images.length === 0) return null;
  
  return (
    <div className="relative w-full" ref={carouselRef}>
      {/* Main image display */}
      <div className="relative overflow-hidden rounded-lg">
        {isVisible && loadedImages[currentIndex] ? (
          <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <svg className="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-40 hover:bg-opacity-75 rounded-full p-2 text-gray-800 shadow-md"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-40 hover:bg-opacity-75 rounded-full p-2 text-gray-800 shadow-md"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      
      {/* Image indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-violet-400 dark:bg-orange-400' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Hidden preloader for adjacent images */}
      <div className="hidden">
        {isVisible && 
          Object.keys(loadedImages).map(index => 
            loadedImages[index] && index !== currentIndex.toString() ? 
              <img key={index} src={images[index]} alt="" loading="lazy" /> : 
              null
          )
        }
      </div>
    </div>
  );
};

export default MinimalistCarousel;