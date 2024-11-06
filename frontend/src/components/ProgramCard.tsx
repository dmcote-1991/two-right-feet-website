interface ProgramCardProps {
    title: string;
    category: string;
    description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, category, description }) => {
    return (
        <div className="program-card">
            <h3>{title}</h3>
            <p className="category">{category}</p>
            <p>{description}</p>
        </div>
    );
};

export default ProgramCard;
