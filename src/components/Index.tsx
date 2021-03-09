import React, { useContext } from "react";
import { ContadorContexto } from "../contextos/ContadorContexto";
import { DesafiosContexto } from "../contextos/DesafiosContexto";
import BarraXP from "./BarraXP";
import Botao from "./Botao";
import Contador from "./Contador";
import Corpo from "./Corpo";
import Desafio, { InicieUmCiclo, CarregandoDesafio, DarDesafio } from "./Desafios";
import Dotjorge from "./Dotjorge";
import Fundo from "./Fundo";
import Topo from "./Topo";

interface JSON{
    name: string;
  }
  
  interface  indexComponentProps{
    git:JSON;
  }

export default function Index({git}:indexComponentProps){
    
    const {
        colors,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown} = useContext(ContadorContexto);
    
      const { desafioAtivo, desafiosCompletos, level } = useContext(DesafiosContexto);
    
        
    return(
        <>
            <Fundo className={colors}>
                <Dotjorge/>
                <Topo git={git} level={level}></Topo>
                
                <Corpo style={{ flexDirection: isActive === true || desafioAtivo != null ? 'column-reverse' : ''}}>
                <Corpo.Elemento className={'animarCaindo1'}>
                <Corpo.DesafiosCompletos>
                { !isActive ? (
                    <>
                        <span>Desafios completos</span>
                        <span>{desafiosCompletos}</span>
                    </>
                    ) : (
                    <>
                        <span>Ciclo em andamento</span>
                        <span>{'<'}</span>
                    </>
                    )}
                </Corpo.DesafiosCompletos>
                
                <Corpo.SpaceBetween>
                {desafioAtivo ? (
                    <Botao 
                    disabled={true}
                    style={{
                        cursor:'not-allowed'
                    }}
                    >
                        <span>Ciclo</span>
                        <span>encerrado</span>
                    </Botao>
                ) : (
                    <>
                    { !isActive ? (
                    <Botao
                    data-teste={"iniciar"} 
                    onClick={startCountdown}
                    >
                        <span>Iniciar</span>
                        <span>tarefa</span>
                    </Botao>
                    ) : (
                    <Botao 
                    onClick={resetCountdown}
                    >
                        <span>Encerrar</span>
                        <span>tarefa</span>
                    </Botao>
                    )}
                    </>
                )}

                    <Contador/>

                </Corpo.SpaceBetween>
                </Corpo.Elemento>


                <Corpo.Elemento className={'animarCaindo2'}>

                    <Desafio>
                    { !desafioAtivo ? (
                        <>
                        { !isActive ? (
                            <>
                            <InicieUmCiclo/>
                            </>
                            ) : (
                            <>
                            <CarregandoDesafio/>
                            </>
                        )}
                        </>
                    ) : (
                        <>
                        <DarDesafio/>
                        </>
                    )}
                    </Desafio>

                </Corpo.Elemento>
                </Corpo>

                <BarraXP></BarraXP>
            </Fundo>
        </>
    );
  };
