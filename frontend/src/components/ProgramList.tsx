import { useEffect, useState } from 'react';
import ProgramCard from './ProgramCard';

const ProgramList: React.FC = () => {
    const [programs, setPrograms] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/programs');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setPrograms(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const filteredPrograms = selectedCategory
        ? programs.filter((program) => program.category === selectedCategory)
        : programs;

    return (
        <section id="programs">
            <h2>Our Programs</h2>
            <p>We tailor each lesson plan to suit the population of each classroom (Grades PK& K-3rd Grade), reinforcing 
                everything from: letters, counting, words, phonemic awareness, parts of speech, colors, metaphors, and more.</p>
            <p>The Common Core State Standards (CCSS) in English and Language Arts (ELA) is used a guide for Two Right 
                Feet Program Curriculum. And, of course, all of our themes involve dancing, creative movement, a dramatic, 
                interactive reading of a selected book, songs, signing, finger-plays, and other fun musical activities.</p>

            {/* Filter Message */}
            <p className="filter-message">
                You can filter the programs by category using the dropdown below.
            </p>
            
            {/* Category Filter Dropdown */}
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                <option value="Arts & Music">Arts & Music</option>
                <option value="Health & Well-Being">Health & Well-Being</option>
                <option value="Imagination">Imagination</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Pigs">Pigs</option>
                <option value="Reading Literacy">Reading Literacy</option>
                <option value="Science & Nature">Science & Nature</option>
                <option value="Seasonal">Seasonal</option>
                <option value="Transportation">Transportation</option>
            </select>

            {/* Render filtered programs */}
            <div className="program-list">
                {filteredPrograms.map((program, index) => (
                    <ProgramCard key={index} {...program} />
                ))}
            </div>

            <p>Other educational themes we are offering this year include: ‘A Nickel For Your Thoughts’ (All about the Five 
                Senses), Exercise Theme, ‘Don’t Bug Me!’ Insect Theme, ‘Mixed Vegetables’ Theme, Sports Theme, and ‘The Five 
                Senses’ Theme.</p>
        </section>
    );
};

export default ProgramList;
