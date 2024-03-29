import { createContext, ReactNode, useState, useEffect, useContext } from 'react';
import { DesafiosContexto } from '../contextos/DesafiosContexto';

interface ContadorContextoProps {
    colors: string;
    minuteLeft: string;
    minuteRight: string;
    secondLeft: string;
    secondRight: string;
    isActive: boolean;
    hasFinished: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface ContadorProviderProps {
    children: ReactNode;
}

export const ContadorContexto = createContext({} as ContadorContextoProps );

let countdownTimeout: NodeJS.Timeout;

export function ContadorProvider({ children }: ContadorProviderProps){

    const { modo, comecarNovoDesafio } = useContext(DesafiosContexto);
    console.log(modo);
    //Countdown
    const [colors, setColors] = useState('');
    const [isActive, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    //25 minutos no index e 0.06 no modo debug
    let countdownMinutes;
    if(modo === '_debug')
    countdownMinutes = 0.1;
    else
    countdownMinutes = 25;

    const [time, setTime] = useState(countdownMinutes * 60);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        console.log("Countdown iniciado!");
        setActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setActive(false);
        setTime(countdownMinutes * 60);
    }

    useEffect(() => {

    if(isActive)
    setColors('green');
    else
    setColors('');

    //Rodando
    if(isActive && time > 0){
        countdownTimeout = setTimeout(() =>{
        setTime(time - 1);
        console.log("minuteLeft: "+minuteLeft);
    }, 1000);

        //Perto de acabar (menor que 10min)
        if(Number(minuteLeft) < 1){
            if(modo !== '_debug')
            setColors('orange');
        }

        //Perto de acabar (menor que 4seg)
        if(Number(secondRight) < 4){
            if(modo === '_debug')
            setColors('orange');
        }

    }

    else if(isActive && time === 0){
        setActive(false);
        setHasFinished(true);
        comecarNovoDesafio();
    }

    }, [isActive, time])

    return(
        <ContadorContexto.Provider value={{ 
            colors,
            isActive,
            hasFinished,
            minuteLeft,
            secondLeft,
            minuteRight,
            secondRight,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </ContadorContexto.Provider>
    );
}
