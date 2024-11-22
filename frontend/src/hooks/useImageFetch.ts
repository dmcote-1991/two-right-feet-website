// Custom hook for fetching individual images

import { useState, useEffect } from 'react';

interface Image {
  src: string;
  alt: string;
}

interface ImageFetchOptions {
  fallbackSrc: string;
  alt: string;
}

const useImageFetch = (id: string, options: ImageFetchOptions) => {
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/images/image/${id}`);
        if (response.ok) {
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          setImage({ src: objectURL, alt: options.alt });
        } else {
          console.error(`Failed to fetch image with ID: ${id}`);
          setImage({ src: options.fallbackSrc, alt: options.alt });
        }
      } catch (error) {
        console.error(`Error fetching image with ID: ${id}`, error);
        setImage({ src: options.fallbackSrc, alt: options.alt });
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [id, options]);

  return { image, isLoading };
};

export default useImageFetch;
