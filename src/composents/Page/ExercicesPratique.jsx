import React, { useState, useEffect } from 'react';
import exercices from '../data/exercices';
import '../../style/Page/PartieExercice.css';
import Modal from '../autres/modal';

const ExercicePratique = () => {
    const [tentative, setTentative] = useState(0);
    const [tentativesSubExercices, setTentativesSubExercices] = useState([]);
    const [SubExerciceFinish, setSubExerciceFinish] = useState(false);
    const [xp, setXp] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [currentExerciceIndex, setCurrentExerciceIndex] = useState(() => {
        return parseInt(localStorage.getItem("NumExercice")) || 0;
    });
    const [currentSubExerciseIndex, setCurrentSubExerciseIndex] = useState(() => {
        return parseInt(localStorage.getItem("NumSubExercice")) || 0;
    });
    const [userInput, setUserInput] = useState([]);
    const [responses, setResponses] = useState({});
    const [completed, setCompleted] = useState(false);
    const [message, setMessage] = useState('');
    const [shuffledFragments, setShuffledFragments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentExercice = exercices[currentExerciceIndex];
    const sousExercices = currentExercice.sousExercices;
    const currentSubExercise = sousExercices[currentSubExerciseIndex] || null;

    useEffect(() => {
        localStorage.setItem('NumExercice', currentExerciceIndex);
        localStorage.setItem('NumSubExercice', currentSubExerciseIndex);
    }, [currentExerciceIndex, currentSubExerciseIndex]);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const startTimer = () => setIsActive(true);
    const stopTimer = () => setIsActive(false);

    useEffect(() => {
        if (currentSubExercise && currentSubExercise.type === "construction" && currentSubExercise.fragments) {
            const allFragments = [...currentSubExercise.fragments, ...currentSubExercise.incorrectFragments];
            setShuffledFragments(shuffleArray(allFragments));
        } else {
            setShuffledFragments([]);
        }
    }, [currentSubExercise]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const fragment = e.dataTransfer.getData("text/plain");
        if (!userInput.includes(fragment)) {
            setUserInput([...userInput, fragment]);
        }
        setShuffledFragments(shuffledFragments.filter(frag => frag !== fragment));
    };

    const handleDragStart = (e, fragment) => {
        e.dataTransfer.setData("text/plain", fragment);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleRemoveFragment = (fragment) => {
        setUserInput(userInput.filter(item => item !== fragment));
        setShuffledFragments([...shuffledFragments, fragment]);
    };

    const handleDuplicateFragment = (fragment) => {
        if (!userInput.includes(fragment)) {
            setUserInput([...userInput, fragment]);
        }
    };

    const calculateXp = () => {
        const baseXp = 10;
        const timePenalty = Math.max(0, seconds - 3) * 2;
        const attemptPenalty = (tentative - 1) * 2;
        return Math.max(0, baseXp - timePenalty - attemptPenalty);
    };

    const checkAnswer = () => {
        if (!SubExerciceFinish) {
            setTentative(tentative + 1);
            // Enregistrer les tentatives pour le sous-exercice actuel
            const newTentatives = [...tentativesSubExercices];
            newTentatives[currentSubExerciseIndex] = (newTentatives[currentSubExerciseIndex] || 0) + 1;
            setTentativesSubExercices(newTentatives);
        }    
        if (currentSubExercise.type === "construction") {
            const userCommand = userInput.join(" ");
            const isCorrect = currentSubExercise.solution.some(solution =>
                solution === userCommand.trim()
            );

            if (isCorrect) {
                setSubExerciceFinish(true);
                setMessage('Bien joué! Vous avez réussi ce sous-exercice.');
                setCompleted(true);
                setXp(prevXp => prevXp + calculateXp());
            } else {
                setMessage('Désolé, ce n\'est pas la bonne réponse. Essayez encore.');
            }
        } else if (currentSubExercise.type === "qcm" || currentSubExercise.type === "analyse" || currentSubExercise.type === "scenario") {
            const correctAnswer = currentSubExercise.answer;
            const userResponse = responses[currentSubExerciseIndex];
            if (userResponse === correctAnswer) {
                setSubExerciceFinish(true);
                setMessage('Bien joué! Vous avez réussi ce sous-exercice.');
                setCompleted(true);
                setXp(prevXp => prevXp + calculateXp());
            } else {
                setMessage('Désolé, ce n\'est pas la bonne réponse. Essayez encore.');
            }
        }
        if (currentSubExerciseIndex === sousExercices.length - 1){
            stopTimer();
        }
    };

    const resetExercise = () => {
        setUserInput([]);
        setResponses({});
        setCompleted(false);
        setMessage('');
        if (currentSubExercise.type !== "construction") {
            setShuffledFragments([]);
        }
    };

    const nextSubExercise = () => {
        if (currentSubExerciseIndex < sousExercices.length - 1) {
            resetExercise();
            setSubExerciceFinish(false);
            setSeconds(0); // On ne reset plus le chronomètre ici
            setCurrentSubExerciseIndex(currentSubExerciseIndex + 1);
        }
    };

    const nextExercise = () => {
        if (currentExerciceIndex < exercices.length - 1) {
            setTentative(0);
            setTentativesSubExercices([]); // Reset des tentatives pour chaque exercice
            setCurrentExerciceIndex(currentExerciceIndex + 1);
            setCurrentSubExerciseIndex(0);
            resetExercise();
            startTimer(); // Démarrer le chronomètre au début d'un nouvel exercice
        } else {
            alert("Vous avez terminé tous les exercices !");
        }
    };

    const stat = () => {
        setIsModalOpen(true);
    };

    const handleQcmSelect = (optionIndex) => {
        setResponses({ ...responses, [currentSubExerciseIndex]: optionIndex });
    };

    // Calcul du pourcentage basé sur le nombre de tentatives pour chaque sous-exercice
    const calculatePercentage = () => {
        if (tentativesSubExercices.length === 0) return 0;

        let totalScore = 0;
        for (let i = 0; i < tentativesSubExercices.length; i++) {
            const attempts = tentativesSubExercices[i] || 1;
            totalScore += (1 / attempts) * 20; // Chaque sous-exercice vaut 20%
        }
        return Math.round(totalScore);
    };

    return (
        <div className="exercice-pratique">
            <h1>Exercices Pratiques sur Git</h1>
            <h2>{currentExercice.title}</h2>
            {currentSubExerciseIndex < sousExercices.length ? (
                <>
                    <h3 dangerouslySetInnerHTML={{ __html: 
                        currentSubExercise.type === "construction" 
                            ? currentSubExercise.enonce 
                            : currentSubExercise.type === "analyse" || currentSubExercise.type === "scenario"
                                ? currentSubExercise.enonce 
                                : currentSubExercise.question}} />
                    {currentSubExercise.type === "construction" && (
                        <>
                            <div className="fragments-container">
                                {shuffledFragments.map((fragment, index) => (
                                    <span
                                        key={index}
                                        className="fragment"
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, fragment)}
                                        onClick={() => handleDuplicateFragment(fragment)}
                                    >
                                        {fragment}
                                    </span>
                                ))}
                            </div>
                            <div
                                className="drop-zone"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            >
                                {userInput.length > 0 ? (
                                    userInput.map((fragment, index) => (
                                        <span
                                            key={index}
                                            className="user-input-fragment"
                                            draggable
                                            onDragStart={(e) => handleDragStart(e, fragment)}
                                            onClick={() => handleDuplicateFragment(fragment)}
                                            onDragEnd={() => handleRemoveFragment(fragment)}
                                        >
                                            {fragment}
                                        </span>
                                    ))
                                ) : (
                                    "Glissez les fragments ici"
                                )}
                            </div>
                            <button onClick={checkAnswer}>Vérifier</button>
                        </>
                    )}
                    {(currentSubExercise.type === "qcm" || currentSubExercise.type === "analyse" || currentSubExercise.type === "scenario") && (
                        <div className="questions">
                            {currentSubExercise.options.map((option, index) => (
                                <div key={index} className="question">
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${currentExerciceIndex}-${currentSubExerciseIndex}`}
                                            checked={responses[currentSubExerciseIndex] === index}
                                            onChange={() => handleQcmSelect(index)}
                                        />
                                        {option}
                                    </label>
                                </div>
                            ))}
                            <button onClick={checkAnswer}>Vérifier</button>
                        </div>
                    )}
                    {message && <p>{message}</p>}
                    {completed && (
                        <div>
                            {currentSubExerciseIndex < sousExercices.length - 1 ? (
                                <button onClick={nextSubExercise}>Passer au sous-exercice suivant</button>
                            ) : (
                                <div>
                                    <p>Vous avez terminé cet exercice !</p>
                                    <button onClick={stat}>Passer à l'exercice suivant</button>
                                </div>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <div>
                    <p>Vous avez terminé tous les sous-exercices de cet exercice.</p>
                    <button onClick={nextExercise}>Passer à l'exercice suivant</button>
                </div>
            )}
            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    nextExercise();
                }}
                pourcentage={calculatePercentage()} // Calculer le pourcentage correct
                time={seconds}
                experience={xp}
            />
        </div>
    );
};

export default ExercicePratique;
