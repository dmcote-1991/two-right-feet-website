import { useState } from 'react';
import '../styles.css'; // Make sure you have relevant styles defined

interface ProgramsProps {
  onShowProgramList: () => void;
}

const Programs: React.FC<ProgramsProps> = ({ onShowProgramList }) => {
  const [dropdowns, setDropdowns] = useState({
    literacy: false,
    readiness: false,
    arts: false,
    settings: false
  });

  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns(prevState => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <section className="programs">
      <h1>Program Features</h1>

      <div className="dropdown">
        <h2 onClick={() => toggleDropdown('literacy')} className="program-dropdown-header">
          Literacy and Language Development {dropdowns.literacy ? '▲' : '▼'} {/* Indicator for dropdown */}
          <span className={`dropdown-arrow ${dropdowns.literacy ? 'expanded' : ''}`}></span>
        </h2>
        {dropdowns.literacy && (
          <div className="dropdown-content">
            <div>
              <img src="/images/trf-programs-1.jpg" alt="Hannah and a young boy are pointing to the book she is reading" className="programs-1" />
            </div>
            <label>Two Right Feet at Rockville Public Library</label>
            <p>Two Right Feet takes a multi-sensory approach to language and literacy. </p>
            <p>Each session features an age-appropriate book that is relevant to the selected educational theme. The 
              dramatized reading is read to live music, bringing the text to life. We find reading a book to rhythmic music 
              can increase attention span and reading retention. Throughout the book, Hannah our session leader pauses to 
              discuss:</p>
            <li>Setting</li>
            <li>Characterization</li>
            <li>Character Motives</li>
            <li>Attitudes</li>
            <li>Text Layout</li>
            <li>Punctuation Choice</li>
            <p>During the lesson, the children are introduced to basic American Sign Language (ASL). Certain vocabulary words 
              are taught in ASL, which are later used in songs, activities, or readings.</p>
            <p>Two Right Feet uses the CCSS (Common Core State Standards) in ELA (English and Learning Arts) as a curriculum 
              guide.</p>
            <p>Depending on the age, grade, and class population, letters, numbers, phonemes, parts of speech, metaphors, 
              similes, punctuation, are woven throughout the session’s activities. This also includes discussions and reviews 
              of material.</p>
            <p>In older populations, the children may:</p>
            <li>Children solve anagrams</li>
            <li>Collaborate in writing acrostic poems</li>
            <li>Engage in other creative language and writing activities</li>
          </div>
        )}
      </div>

      <div className="dropdown">
        <h2 onClick={() => toggleDropdown('readiness')} className="program-dropdown-header">
          School Readiness {dropdowns.readiness ? '▲' : '▼'} {/* Indicator for dropdown */}
          <span className={`dropdown-arrow ${dropdowns.readiness ? 'expanded' : ''}`}></span>
        </h2>
        {dropdowns.readiness && (
          <div className="dropdown-content">
            <p>Speaking and Listening Standards CCSS in ELA are used to promote appropriate classroom behavior and norms such 
              as: raising hands, not interrupting students and teachers, turn-taking, collaboration among peers and adults, 
              speaking and communicating clearly and audibly, etc (by agreed upon rules).</p>
            <p>Teambuilding games and activities are explored and processed, fostering positive classroom and life behavior.</p>
            <p>Tolerance is discussed when appropriate.</p>
            <p>Anger identification and management/ coping skills are explored.</p>

          </div>
        )}
      </div>

      <div className="dropdown">
        <h2 onClick={() => toggleDropdown('arts')} className="program-dropdown-header">
          Arts {dropdowns.arts ? '▲' : '▼'} {/* Indicator for dropdown */}
          <span className={`dropdown-arrow ${dropdowns.arts ? 'expanded' : ''}`}></span>
        </h2>
        {dropdowns.arts && (
          <div className="dropdown-content">
          <p>Two Right Feet Arts uses the K-4 State Arts Standards in music and dance as a curriculum guide.</p>
          <h3>Music - Instruments</h3>
          <div>
            <img src="/images/trf-programs-2-istock.jpg" alt="smiling children stading shoulder to shoulder playing various instruments" className="programs-2-3-istock" />
          </div>
          <p>Auditory discrimination activities and games are used to identify the sounds of different percussion 
            instruments. Band games are another highlight; children learn to mimic short musical patterns, respond to cues 
            of conductor, and use active listening skills as they play in a band. With older groups, students take turns 
            leading the group using different percussion instruments.</p>
          <h3>Music - Singing</h3>
          <p>During singing activities, children are encouraged to sing independently and in groups on pitch, in rhythm, 
            and on tempo. They learn to respond to cues of session leader and musician. In time, children begin to memorize 
            certain songs and “jump-rope-rhymes” (sing from memory). Live music is a regular feature of Two Right Feet 
            Music, led by Garrett Demmerle, our bassist, musician, and lyricist.</p>
          <h3>Dance</h3>
          <div>
            <img src="/images/trf-programs-3-istock.jpg" alt="five smiling children stretching in a fitness room preparing to dance" className="programs-2-3-istock" />
          </div>
          <p>Children demonstrate locomotor and non-locomotor movements for dance and creative movement activities. The 
            students are taught basic dance steps and are asked to contribute to the dance sequence (basic choreography). 
            Kids are given the opportunity to learn and demonstrate understanding of basic spatial concepts, accuracy in 
            moving to a beat, and identify and demonstrate basic dynamic contrasts. </p>
          </div>
        )}
      </div>



      <div className="dropdown">
        <h2 onClick={() => toggleDropdown('settings')} className="program-dropdown-header">
          Program Settings {dropdowns.settings ? '▲' : '▼'} {/* Indicator for dropdown */}
          <span className={`dropdown-arrow ${dropdowns.settings ? 'expanded' : ''}`}></span>
        </h2>

        {dropdowns.settings && (
          <div className="dropdown-content">
            <div>
              <img src="/images/trf-home-2-programs-4.jpg" alt="Two Right Feet at Reggio Magnet School" className="home-2-programs-4" />
            </div>
            <h3>Public and Private Schools: Grades PK - 3rd</h3>
            <li>Public Schools across CT and MA</li>
            <li>Montessori Method Schools</li>
            <li>Magnet, including many of Hartford’s Schools and CREC Schools</li>
            <li>Reggio Method Schools</li>
            <li>PTOs</li>
            <div>
              <img src="/images/trf-programs-5.jpg" alt="Two Right Feet at Rockville Public Library" className="programs-5" />
            </div>
            <label>Two Right Feet at Rockville Public Library</label>
            <h3>After School Programs</h3>
            <li>Public and Private Schools (See above)</li>
            <h3>Public Libraries</h3>
            <li>Children’s department</li>
            <li>Early childhood programs</li>
            <li>Grade school and homeschool programs</li>
            <h3>Family Resource Centers</h3>
            <li>Early Childhood Programs and Playgroups</li>
            <h3>Head Start Centers</h3>
            <li>Children with and without special needs</li>
            <h3>Town Departments</h3>
            <li>Youth Service Bureau</li>
            <li>Parks and Recreation Department</li>
            <li>(for children PK-3rd grade as an after school, special event, or summer program)</li>
            <h3>Dance and Fitness Centers</h3>
            <li>Mommy/Parent and Me programs</li>
            <li>Children’s Programs</li>
            <h3>Private and Independently Held Group Programs / Homeschool</h3>
            <li>Special Event Sessions and Series for private groups such as for clubs, homeschool groups, playgroups, etc</li>
            <h3>All Literacy Programs for the Current School Year Are Listed on Our Program Themes Page</h3>
          </div>
        )}
      </div>
      <div className="program-link">
        <p>
          Want to learn more about our program themes?{' '}
          <button onClick={onShowProgramList} className="link-button">Click here</button> to explore in detail.
        </p>
      </div>
      <div>
        <img src="/images/trf-about-2-programs-6.jpg" alt="Hannah performing a read-along with Garrett playing bass in the background" className="about-programs-photo-gallery" />
        <img src="/images/trf-programs-7.jpg" alt="Hannah teaching sign language during circle-time" className="about-programs-photo-gallery" />
        <img src="/images/trf-programs-8.jpg" alt="Hannah showing a class of children print-outs of instruments" className="about-programs-photo-gallery" />
        <img src="/images/trf-about-4-programs-9.jpg" alt="Hannah performing a read-along with Garrett playing bass behind her" className="about-programs-photo-gallery" />
        <img src="/images/trf-programs-10.jpg" alt="Garrett leading a call-and-response steady beat exercise" className="about-programs-photo-gallery" />
      </div>
    </section>
  );
};

export default Programs;
