// utils/fetchImages.ts

interface ImageFile {
  id: string;
  alt: string;
}

interface Image {
  src: string;
  alt: string;
}

/**
 * Fetch multiple images based on an array of image IDs and alt texts.
 * @param imageFileIds Array of objects containing image `id` and `alt`.
 * @returns A promise resolving to an array of fetched images.
 */
export const fetchMultipleImages = async (imageFileIds: ImageFile[]): Promise<Image[]> => {
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
          return null; // Return null when image fetch fails
        }
      } catch (error) {
        console.error(`Error fetching image with ID: ${id}`, error);
        return null; // Return null in case of an error
      }
    })
  );

  // Filter out null values
  return fetchedImages.filter((img): img is Image => img !== null);
};

/**
 * Fetch a single image based on its ID.
 * @param id Image ID to fetch.
 * @param alt Alt text for the image.
 * @param fallbackSrc Fallback source if the image fails to fetch.
 * @returns A promise resolving to the fetched image or a fallback image.
 */
export const fetchSingleImage = async (
  id: string,
  alt: string,
  fallbackSrc: string
): Promise<Image> => {
  try {
    const response = await fetch(`http://localhost:5000/api/images/image/${id}`);
    if (response.ok) {
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);
      return { src: objectURL, alt };
    } else {
      console.error(`Failed to fetch image with ID: ${id}`);
      return { src: fallbackSrc, alt }; // Use fallback if fetch fails
    }
  } catch (error) {
    console.error(`Error fetching image with ID: ${id}`, error);
    return { src: fallbackSrc, alt }; // Use fallback in case of an error
  }
};
