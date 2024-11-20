import React, { useEffect, useState } from 'react';
import '/src/styles.css';

const About: React.FC = () => {
  const imageFileIds = [
    { id: '673c03b5428be6c6877e84ba', alt: 'Garrett and Hannah on a ferry in the 1990s' },
    { id: '673c0432428be6c6877e84be', alt: 'Hannah performing a read-along with Garrett playing bass in the background' },
    { id: '673c0449428be6c6877e84c2', alt: 'Hannah and a class of children dancing and playing air-guitar' },
    { id: '673c0454428be6c6877e84c6', alt: 'Hannah performing a read-along with Garrett playing bass behind her' },
    { id: '673c0464428be6c6877e84ca', alt: 'Garrett, with his bass on his lap, interacting with a child' },
    { id: '673c0472428be6c6877e84ce', alt: 'Hannah teaching sign language to a class of children with Garrett playing the bass' }
  ];

  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);
  const [trfAboutImage, setTrfAboutImage] = useState<string | null>('/images/trf-about-6.jpg');

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
      }
    };

    // Check if trf-about-6.jpg loads
    const checkTrfAboutImage = () => {
      const img = new Image();
      img.src = '/images/trf-about-6.jpg';
      img.onload = () => setTrfAboutImage('/images/trf-about-6.jpg');
      img.onerror = () => setTrfAboutImage('/images/placeholder.jpg');
    };

    fetchImages();
    checkTrfAboutImage();
  }, []);

  return (
    <section className="about">
      <h2>About Us</h2>
      
      <div>
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src}
            alt={image.alt} 
            className="about-programs-photo-gallery" 
          />
        ))}
      </div>

      <h3>Our Story</h3>
      <p>
        Since its inception in 2000, Two Right Feet has provided literacy, school readiness, 
        and interactive educational reading enrichment programs for children...
      </p>
      
      <div>
        {trfAboutImage && (
          <img 
            src={trfAboutImage} 
            alt="Hannah teaching sign language to a class of children with Garrett playing the bass" 
            className="about-6" 
          />
        )}
      </div>

    </section>
  );
};

export default About;
