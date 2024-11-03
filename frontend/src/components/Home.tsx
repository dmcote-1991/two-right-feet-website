import { useState } from 'react';
import '/src/styles.css';

const Home: React.FC = () => {
  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);

  const toggleTestimonials = () => {
    setIsTestimonialsOpen(!isTestimonialsOpen);
  };

  return (
    <section className="home">
      <h2>Two Right Feet -- Arts. Literacy. School Readiness</h2>
      <h3>Enrichment Programs for Reading Readiness. Literacy. and Language Development</h3>
      <div>
        <img src="/images/trf-home-1.png" alt="Two Right Feet Banner" className="home-1" />
      </div>
      <p>
        Two Right Feet creates highly interactive learning programs for children to explore 
        reading, literacy and language through music, motion, and books.
      </p>
      <p>
        Our program was developed in 2000 by a speech and language pathologist who also held a 
        degree in dance. Hannah Demmerle, our program director and session leader, holds a degree 
        in occupational therapy (COTA) and develops our educational programs and curriculum. Live 
        music and ASL (American Sign Language) are a few of the other highlights of Two Right 
        Feet’s enrichment programs.
      </p>
      <h3>
        Looking for more information about our reading. literacy. and language development 
        programs?</h3>
      <p>
        Visit our Program Features page to learn how we educate, engage, and entertain.
      </p>
      <div>
        <img src="/images/trf-home-2-programs-4.jpg" alt="Two Right Feet at Reggio Magnet School" className="home-2-programs-4" />
      </div>
      <label>Two Right Feet at CREC Reggio Magnet School of the Arts</label>
      <h2 className="testimonials-header" onClick={toggleTestimonials} style={{ cursor: 'pointer' }}>
        Testimonials {isTestimonialsOpen ? '▲' : '▼'} {/* Indicator for dropdown */}
      </h2>
      {isTestimonialsOpen && (
        <div className="testimonials-dropdown">
          <p>
            <b>"Interactive, Engaging Programs"</b> <br />
            <br />
            “As a librarian, I highly recommend the high-quality programming of Two Right Feet. 
            But I can also endorse them as a parent—my two young children are big fans of their 
            interactive, engaging programs. Children love the storytime elements: the stories, the 
            songs, the sign language, and the literacy games that Hannah and Garry incorporate 
            into each session. And the electric bass adds an element of “cool” that we can’t match 
            in our regular library storytimes! We include Two Right Feet as a regular part of our 
            lineup, and will continue to do so.”<br />
            <br />
              <b>– Sarah Kline Morgan</b> <br />
                Director, Branch & Children’s Services <br />
                Farmington Libraries
          </p>
          <p>
            <b>"This Dynamic Duo is a Real Delight"</b> <br />
            <br />
            “Two Right Feet came to our school, the arts academy, and brought literacy alive, 
            through music and games, to our pre- kindergarten and kindergarten students. The 
            students looked forward to this program and were captivated by it each time. Each 
            session focused on a theme and revolved around a story. The team used the other 
            activities to reinforce the concepts that they introduced to the students through the 
            story. A favorite session of mine was when they did one all about verbs. Amazing! This 
            dynamic duo is a real delight.”<br />
            <br />
            <b>– Sarah Stevenson</b> <br />
              Before and Aftercare Coordinator <br />
              CREC Museum Academy
           
          </p>
          <p>
            <b>"We Definitley Recommend Two Right Feet"</b><br />
            <br />
            “Their music and movement programs offer a rich blend of early literacy activities…In 
            tune with the developmental stages of young children, Garry and Hannah, present 
            engaging, interactive, theme-based sessions incorporating stories, sign-launguage, 
            singing and movement… Their playful celebration of singing, dancing, moving, talking, 
            signing, and reading is joy-filled. We admire the spirit of Garry and Hannah who are 
            sensitive and caring adults. They are reliable, punctual and professional. We 
            definitely recommend Two Right Feet.”<br />
            <br />
            <b>– Prosser Public Library (Children’s Department)</b>
          </p>
          <p>
            <b>“One of Our Most Well-Attended Programs”</b><br />
            <br />
            “Two Right Feet is one of our most well-attended programs and the children just love 
            it. The combination of the bass and singing captivates the children and even their 
            parents get involved! Music teaches children so many things and 2RF has the experience 
            and knowledge to bring it to life. I highly recommend 2RF to other programs looking 
            for an enriching, quality music and movement experience for young children.”<br />
            <br />
            <b>– Amy Morales</b><br />
            Director, Enfield Family Resource Center
          </p>
        </div>
      )}
    </section>
  );
};

export default Home;