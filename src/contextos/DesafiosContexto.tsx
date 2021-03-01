import { createContext, ReactNode, useEffect, useState } from 'react';
import desafios from '../../desafios.json';
import Cookies from 'js-cookie';

interface Desafios {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface DesafiosContextoProps {
    level: number;
    xpAtual: number;
    xpParaUpar: number;
    desafiosCompletos: number;
    desafioAtivo: Desafios;
    subirNivel: () => void;
    comecarNovoDesafio: () => void;
    resetarDesafio: () => void;
    completarDesafio: () => void;
}

interface DesafiosProviderProps {
    children: ReactNode;
}

export const DesafiosContexto = createContext({} as DesafiosContextoProps );

export function DesafiosProvider({ children }: DesafiosProviderProps){

    const [level, setLevel] = useState(1);
    const [xpAtual, setXpAtual] = useState(32);
    const [desafiosCompletos, setDesafiosCompletos] = useState(0);
    const [desafioAtivo, setDesafioAtual] = useState(null);

    const xpParaUpar = Math.pow((level + 1) * 4, 2);


    //Notificaçao
    useEffect(() =>{
        Notification.requestPermission();
    },[])

    //Cookies
    /*
    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('xpAtual', String(xpAtual));
        Cookies.set('desafiosCompletos', String(desafiosCompletos));
      }, [level, xpAtual, desafiosCompletos])
      */

    function subirNivel(){
        setLevel(level + 1);
    }

    function comecarNovoDesafio(){
        const indexAleatorio = Math.floor(Math.random() * desafios.length);
        const desafioAtual = desafios[indexAleatorio];
        setDesafioAtual(desafioAtual);

        console.log('Novo desafio');
        console.log('desafio.length: ' + desafios.length);
        console.log('indexAleatorio: ' + indexAleatorio);


        console.log(desafioAtual.amount);

        //Notificação
        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
            new Notification('Novo desafio', {
              body: `Valendo ${desafioAtual.amount}xp`
            });
        }


    }

    function resetarDesafio(){
        setDesafioAtual(null);
    }

    function completarDesafio(){

        if(!desafioAtivo){
            return;
        }

        const { amount } = desafioAtivo;
        console.log('Amout ' + amount);

        let xpFinal = xpAtual + amount;

        if(xpFinal > xpParaUpar){
            xpFinal = xpFinal - xpParaUpar;
            subirNivel();
        }

        setXpAtual(xpFinal);
        setDesafioAtual(null);
        setDesafiosCompletos(desafiosCompletos + 1);


        //Cookies
        Cookies.set('level', String(level));
        Cookies.set('xpAtual', String(xpAtual));
        Cookies.set('desafiosCompletos', String(desafiosCompletos));

    }

    return(
        <DesafiosContexto.Provider value={{ 
            level, 
            xpAtual,
            xpParaUpar,
            desafiosCompletos,
            desafioAtivo,
            subirNivel, 
            comecarNovoDesafio,
            resetarDesafio,
            completarDesafio
            }}>
            {children}
        </DesafiosContexto.Provider>
    );
}