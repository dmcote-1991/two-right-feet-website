import React from 'react';
import '../styles.css'; // Make sure you have relevant styles defined

interface ProgramsProps {
  onShowProgramList: () => void;
}

const Programs: React.FC<ProgramsProps> = ({ onShowProgramList }) => {
  // Sample data for program themes and features
  const programThemes = [
    'Music and Movement',
    'Dance and Coordination',
    'Literacy and Language Development',
    'Art and Creativity',
  ];

  const programFeatures = [
    'Interactive sessions with experienced instructors',
    'Age-appropriate activities for different groups',
    'Flexible scheduling for parents and caregivers',
    'Hands-on learning with various props and materials',
  ];

  return (
    <section className="programs">
      <h2>Programs</h2>

      <h3>Program Themes</h3>
      <ul>
        {programThemes.map((theme, index) => (
          <li key={index}>{theme}</li>
        ))}
      </ul>

      <h3>Program Features</h3>
      <ul>
        {programFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <div className="program-link">
        <p>
          Want to learn more about our program themes?{' '}
          <button onClick={onShowProgramList} className="link-button">Click here</button> to explore in detail.
        </p>
      </div>
    </section>
  );
};

export default Programs;
