import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ExpositionContext = createContext();

const ExpositionProvider = ({ children, tableaux }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExposing, setIsExposing] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const [manualExposingPath, setManualExposingPath] = useState("");

    const navigate = useNavigate();

    const moveForward = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1 < tableaux.length ? prevIndex + 1 : prevIndex);
    };

    const moveBack = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex);
    };

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        const tableauId = tableaux[currentIndex]?.name;
        if (tableauId) {
            setManualExposingPath(`/details/${tableauId}`);
        }
    }, [currentIndex, tableaux]);

    useEffect(() => {
        if (hasMounted) {
            if (isExposing) {
                navigate(manualExposingPath);
            } else {
                navigate('/');  // Navigate to the main menu if the exposition is stopped
            }
        }
    }, [isExposing, hasMounted, navigate, manualExposingPath]);

    return (
        <ExpositionContext.Provider value={{ currentIndex, isExposing, setCurrentIndex, setIsExposing, moveForward, moveBack, setManualExposingPath, tableaux }}>
            {children}
        </ExpositionContext.Provider>
    );
};

export { ExpositionContext, ExpositionProvider };
