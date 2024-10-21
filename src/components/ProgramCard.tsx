import React from 'react';

interface ProgramCardProps {
    title: string;
    ageRange: string;
    description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, ageRange, description }) => {
    return (
        <div className="program-card">
            <h3>{title}</h3>
            <p><strong>Age Range:</strong> {ageRange}</p>
            <p>{description}</p>
        </div>
    );
};

export default ProgramCard;
