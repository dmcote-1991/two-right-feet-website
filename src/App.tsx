import React from 'react';
import Header from './components/Header';
import ProgramList from './components/ProgramList';
import ContactForm from './components/ContactForm';
import './styles.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <ProgramList />
            <ContactForm />
        </div>
    );
};

export default App;
