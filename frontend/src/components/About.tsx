import '/src/styles.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <div>
        <img src="/images/trf-about-1.jpg" alt="Garrett and Hannah on a ferry in the 1990s" className="about-programs-photo-gallery" />
        <img src="/images/trf-about-2-programs-6.jpg" alt="Hannah performing a read-along with Garrett playing bass in the background" className="about-programs-photo-gallery" />
        <img src="/images/trf-about-3.jpg" alt="Hannah and a class of children dancing and playing air-guitar" className="about-programs-photo-gallery" />
        <img src="/images/trf-about-4-programs-9.jpg" alt="Hannah performing a read-along with Garrett playing bass behind her" className="about-programs-photo-gallery" />
        <img src="/images/trf-about-5.jpg" alt="Garrett, with his bass on his lap, intertacting with a child" className="about-programs-photo-gallery" />
      </div>
      <h3>Our Story</h3>
      <p>
        Since its inception in 2000, Two Right Feet has provided literacy, school readiness, 
        and interactive educational reading enrichment programs for children. Our founder and 
        curriculum developer, Susan, obtained degrees in dance and speech therapy. While Susan 
        was working in a Head Start program her husband Garrett, a bass player, volunteered his 
        time providing live music for Susan’s sessions. The response from the kids was positive! 
        With encouragement from teachers in the Head Start staff, Two Right Feet was born.
      </p>
      <div>
        <img src="/images/trf-about-6.jpg" alt="Hannah teaching sign language to a class of children with Garrett playing the bass" className="about-6" />
      </div>
      <p>
      Since our start we’ve been joined by our daughter Hannah who shares her mom’s passion for 
      dance and enjoys using what she’s learned studying occupational therapy (COTA). After Susan 
      passed away in 2012, Hannah took over the full time role of program director, developer, 
      and session leader.<br />
      Two Right Feet has expanded to provide reading enrichment for children ages preschool - 3rd 
      grade in venues such as:
      </p>
      <ul>
        <li>Libraries</li>
        <li>Public & Private Schools</li>
        <li>Preschools</li>
        <li>Family Resource Centers</li>
        <li>Montessori Schools</li>
        <li>Children's Rehabilitation Centers</li>
        <li>Head Start Programs</li>
      </ul>
      <p>
        We do regularly scheduled visits or single events depending on your needs. 
        We are flexible!<br />
        See one of our programs on YouTube or contact us for more information.
      </p>
      <h3>Our Reading and Literacy Programs have traveled to CT, MA, and NY</h3>
      <h4>Public Libraries</h4>
      <ul>
        <li>Prosser Public Library (both branches in Bloomfield)</li>
        <li>Rockville Public Library</li>
        <li>Ellington Public Library</li>
        <li>Bristol Public Library</li>
        <li>Canton Public Library</li>
        <li>Farmington Public Library</li>
        <li>Stafford Public Library</li>
        <li>Willimantic Public Library</li>
        <li>Joshua Hyde Public Library</li>
        <li>Clapp Memorial Library</li>
        <li>Agawam Public Library</li>
        {/* Add more */}
      </ul>
      <h4>Public & Private Schoools / Preschools</h4>
      <ul>
        <li>CREC Reggio Magnet School of the Arts</li>
        <li>CREC Ana Grace Academy of the Arts</li>
        <li>CREC Greater Hartford Academy of the Arts</li>
        <li>Willimantic Public Schools (all elementary schools)</li>
        <li>Maple Street School (Vernon, CT)</li>
        <li>La Petite Academy</li>
        <li>Annie Fisher Montessori Magnet School</li>
        <li>Batchelder Elementary School</li>
        <li>Betances Elementary School</li>
        <li>Hartford Preschool Magnet School</li>
        <li>Wintonbury Early Childhood Magnet School</li>
        <li>Orange Avenue Elementary School</li>
        <li>Small Wonders Montessori School</li>
        <li>Noah Wallace Elementary School</li>
        <li>Bright Horizons Preschools</li>
        <li>Tolland Cooperative Preschool</li>
        <li>and much more!</li>
      </ul>
      <h4>FRCs (Family Resource Centers) and Head Start Centers</h4>
      <ul>
        <li>Enfield FRC</li>
        <li>Vernon FRC</li>
        <li>Stafford FRC</li>
        <li>several Hartford FRCs</li>
        <li>Windham FRC</li>
        <li>Windsor FRC</li>
        <li>East Windsor FRC</li>
        <li>Bristol FRC</li>
        <li>Enfield Head Start Center</li>
        <li>Springfield Head Start Center</li>
        <li>Port Chester Head Start Center (NY)</li>
      </ul>
      <p>
      We are also proud members of Hartford Performs, providing Arts Integrated and Arts Focused 
      programs in the Hartford Public School District (grades K-3).
      </p>
    </section>
  );
};

export default About;