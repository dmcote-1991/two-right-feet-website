// Utility funtion for fetching multiple images

interface ImageFile {
  id: string;
  alt: string;
}

interface Image {
  src: string;
  alt: string;
}

export const fetchMultipleImages = async (imageFileIds: ImageFile[], fallbackSrc = '/images/trf-home-1.png'): Promise<Image[]> => {
  const fetchedImages = await Promise.all(
    imageFileIds.map(async ({ id, alt }) => {
      try {
        const response = await fetch(`http://localhost:5000/api/images/image/${id}`);
        if (response.ok) {
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          return { src: objectURL, alt };
        } else {
          console.error(`Failed to fetch image with ID: ${id}`);
          return { src: fallbackSrc, alt };
        }
      } catch (error) {
        console.error(`Error fetching image with ID: ${id}`, error);
        return { src: fallbackSrc, alt };
      }
    })
  );

  return fetchedImages.filter((img): img is Image => img !== null);
};