import React, { createContext, ReactNode, useEffect, useState } from 'react';
import desafios from '../../desafios.json';
import Cookies from 'js-cookie';
import ModalNivelUp, { ModalFalhei, ModalXp } from '../components/ModalNivelUp';

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
    modalAberto: boolean;
    desafioAtivo: Desafios;
    subirNivel: () => void;
    comecarNovoDesafio: () => void;
    resetarDesafio: () => void;
    completarDesafio: () => void;
    exibirFalhei:() => void;
    fecharModal:() => void;
    modo:string;
}

interface DesafiosProviderProps {
    children: ReactNode;
    level: number;
    nivel: number;
    xpAtual: number;
    desafiosCompletos: number;
    modo:string;
}

export const DesafiosContexto = createContext({} as DesafiosContextoProps );

export function DesafiosProvider({ children, nivel, modo, ...rest }: DesafiosProviderProps){

    const [level, setLevel] = useState(rest.level ?? 1);
    const [xpAtual, setXpAtual] = useState(rest.xpAtual ?? 0);
    const [desafiosCompletos, setDesafiosCompletos] = useState(rest.desafiosCompletos ?? 0);
    const [desafioAtivo, setDesafioAtual] = useState(null);
    const xpParaUpar = Math.pow((level + 1) * 4, 2);

    //Modais
    const [modalAberto, setModalAberto] = useState(null);
    const [modalXp, setModalXp] = useState(null);
    const [modalFalhei, setModalFalhei] = useState(null);

    //console.log("...rest:\nlevel: " + rest.level + "\n xpAtual: " + rest.xpAtual + "\nDesafiosCompletos: " + rest.desafiosCompletos);
    

    //Notificaçao
    useEffect(() =>{
        Notification.requestPermission();
    },[])

    //Cookies
    useEffect(() => {
        Cookies.set('level'+modo, String(level));
        Cookies.set('xpAtual'+modo, String(xpAtual));
        Cookies.set('desafiosCompletos'+modo, String(desafiosCompletos));
        console.log("> Salvando cookies:\nlevel: " + level + "\nxpAtual: " + xpAtual + "\ndesafiosCompletos: " + desafiosCompletos);
  }, [level, xpAtual, desafiosCompletos])
 

    function subirNivel(){
        setLevel(level + 1);

        console.log("> UPOU DE NIVEL!!")
        setModalAberto(true);
        setTimeout(function(){
            setModalAberto(null);
        }, 5 * 1000)
    }

    function comecarNovoDesafio(){
        const indexAleatorio = Math.floor(Math.random() * desafios.length);
        const desafioAtual = desafios[indexAleatorio];
        setDesafioAtual(desafioAtual);

        console.log('Novo desafio');
        console.log('desafio.length: ' + desafios.length);
        console.log('indexAleatorio: ' + indexAleatorio);

        console.log(desafioAtual.amount);

        let tipo;
        if(desafioAtual.type == 'body')
        tipo = "o corpo";
        if(desafioAtual.type == 'eye')
        tipo = "os olhos";

        //Notificação
        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
            new Notification('Novo desafio', {
              body: `Para ${tipo}: Valendo ${desafioAtual.amount}xp.`
            });
        }

    }

  
    function exibirFalhei(){
        setModalFalhei(true);
        setTimeout(function(){
            setModalFalhei(null);
        }, 5 * 1000);
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

        //Modal do Xp ganho
        setModalXp(amount);
        setTimeout(function(){
            setModalXp(null);
        }, 5 * 1000)

        setXpAtual(xpFinal);
        setDesafioAtual(null);
        setDesafiosCompletos(desafiosCompletos + 1);

    }

    function fecharModal(){
        setModalFalhei(null);
        setModalXp(null);
        setModalAberto(null);
    }

    return(
        <DesafiosContexto.Provider value={{ 
            level, 
            xpAtual,
            xpParaUpar,
            desafiosCompletos,
            desafioAtivo,
            modalAberto,
            subirNivel, 
            comecarNovoDesafio,
            resetarDesafio,
            completarDesafio,
            exibirFalhei,
            fecharModal,
            modo
            }}>
            {children}
            {modalAberto && <ModalNivelUp/>}
            {modalXp && !modalAberto && <ModalXp xp={modalXp}/>}
            {modalFalhei && <ModalFalhei/>}
        </DesafiosContexto.Provider>
    );
}