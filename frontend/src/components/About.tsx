import React, { useState, useEffect } from 'react';
import '/src/styles.css';

const About: React.FC = () => {
  const imageFileIds = [
    { id: '673c03b5428be6c6877e84ba', alt: 'Garrett and Hannah on a ferry in the 1990s' },
    { id: '673c0432428be6c6877e84be', alt: 'Hannah performing a read-along with Garrett playing bass in the background' },
    { id: '673c0449428be6c6877e84c2', alt: 'Hannah and a class of children dancing and playing air-guitar' },
    { id: '673c0454428be6c6877e84c6', alt: 'Hannah performing a read-along with Garrett playing bass behind her' },
    { id: '673c0464428be6c6877e84ca', alt: 'Garrett, with his bass on his lap, interacting with a child' },
  ];

  const mainAboutImageFileId = { id: '673c0472428be6c6877e84ce', alt: 'Hannah teaching sign language to a class of children with Garrett playing the bass' }

  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);
  const [mainAboutImage, setMainAboutImage] = useState<{ src: string; alt: string } | null>(null);

  // Loading states
  const [isImagesLoading, setIsImagesLoading] = useState(true);
  const [isMainImageLoading, setIsMainImageLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await Promise.all(
          imageFileIds.map(async ({ id, alt }) => {
            const response = await fetch(`http://localhost:5000/api/images/image/${id}`);
            if (response.ok) {
              const blob = await response.blob();
              const objectURL = URL.createObjectURL(blob);
              return { src: objectURL, alt };
            } else {
              console.error(`Failed to fetch image with ID: ${id}`);
              return null;
            }
          })
        );
        setImages(fetchedImages.filter((img): img is { src: string; alt: string } => img !== null));
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsImagesLoading(false);
      }
    };

    // Fetch main about image
    const fetchMainAboutImage = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/images/image/${mainAboutImageFileId.id}`);
        if (response.ok) {
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          setMainAboutImage({ src: objectURL, alt: mainAboutImageFileId.alt });
        } else {
          console.error(`Failed to fetch main about image`);
          setMainAboutImage({ src: '/images/trf-home-2-programs-4.jpg', alt: 'Fallback image' });
        }
      } catch (error) {
        console.error('Error fetching main about image:', error);
        setMainAboutImage({ src: '/images/trf-home-2-programs-4.jpg', alt: 'Fallback image' });
      } finally {
        setIsMainImageLoading(false);
      }
    };

    fetchImages();
    fetchMainAboutImage();
  }, []);

  return (
    <section className="about">
      <h2>About Us</h2>
      
      <div>
        {isImagesLoading ? (
          <p>Loading images...</p> // Display a loading message while images are being fetched
        ) : (
          images.length > 0 ? (
            images.map((image, index) => (
              <img 
                key={index}
                src={image.src}
                alt={image.alt} 
                className="about-programs-photo-gallery" 
              />
            ))
          ) : (
            <p>No images available.</p> // Fallback message if images could not be fetched
          )
        )}
      </div>

      <h3>Our Story</h3>
      <p>
        Since its inception in 2000, Two Right Feet has provided literacy, school readiness, 
        and interactive educational reading enrichment programs for children...
      </p>
      
      <div>
        {isMainImageLoading ? (
          <p>Loading main image...</p>
        ) : (
          mainAboutImage ? (
            <img 
              src={mainAboutImage.src} 
              alt={mainAboutImage.alt} 
              className="about-6" 
            />
          ) : (
            <p>Main image is unavailable.</p>
          )
        )}
      </div>

    </section>
  );
};

export default About;
