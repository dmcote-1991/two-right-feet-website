import React from 'react';
import ProgramCard from './ProgramCard';

const ProgramList: React.FC = () => {
    const programs = [
        { title: 'Storytime Adventures', ageRange: '3-5', description: 'Join us for fun stories and interactive activities!' },
        { title: 'Crafty Kids', ageRange: '3-7', description: 'Create fun crafts and projects with us!' },
        { title: 'Reading Explorers', ageRange: '6-8', description: 'Discover new books and make friends!' },
        { title: 'Summer Reading Challenge', ageRange: '3-8', description: 'Participate in our summer reading program!' },
    ];

    return (
        <section id="programs">
            <h2>Our Programs</h2>
            <div className="program-list">
                {programs.map((program, index) => (
                    <ProgramCard key={index} {...program} />
                ))}
            </div>
        </section>
    );
};

export default ProgramList;
