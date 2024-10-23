import React from 'react';

interface ProgramCardProps {
    title: string;
    description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description }) => {
    return (
        <div className="program-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ProgramCard;
