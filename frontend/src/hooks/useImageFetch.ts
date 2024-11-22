// Custom hook for fetching individual images

import { useState, useEffect } from 'react';

interface Image {
  src: string;
  alt: string;
}

const useImageFetch = (imageId: string, fallbackSrc = '/images/trf-home-1.png', fallbackAlt = 'Fallback image') => {
  const [image, setImage] = useState<Image | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/images/image/${imageId}`);
        if (response.ok) {
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          setImage({ src: objectURL, alt: fallbackAlt });
        } else {
          console.error(`Failed to fetch image with ID: ${imageId}`);
          setImage({ src: fallbackSrc, alt: fallbackAlt });
        }
      } catch (error) {
        console.error(`Error fetching image with ID: ${imageId}`, error);
        setImage({ src: fallbackSrc, alt: fallbackAlt });
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [imageId, fallbackSrc, fallbackAlt]);

  return { image, isLoading };
};

export default useImageFetch;
