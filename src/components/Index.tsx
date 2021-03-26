import { useRouter } from 'next/router';
import Link from "next/link";
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
import { ModalNome } from "./ModalNivelUp";
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
    
      const { modo, desafioAtivo, desafiosCompletos, level, nome, trocarNome } = useContext(DesafiosContexto);

      const router = useRouter();
      const {name} = router.query;
      if(name)
      trocarNome(name);
    
        
    return(
        <>
            <Fundo className={colors}>
                <Dotjorge/>
                <Topo git={git} level={level}></Topo>
                
                <Corpo style={{ flexDirection: isActive === true || desafioAtivo != null ? 'column-reverse' : ''}}>
                <Corpo.Elemento className={'animarCaindo1'}>
                    { modo === '_debug' ? 
                    (<Corpo.AlertaVersaoTeste><div></div>Essa é uma versão para testes!
                    <Link href="/">
                    <a>
                    <button>Versão normal</button>
                    </a>
                    </Link>
                    </Corpo.AlertaVersaoTeste>) 
                    :
                    (
                    <>
                    { nome !== '' && !isActive && !desafioAtivo &&
                    <Corpo.AlertaVersaoTeste>
                        <h3>Olá {nome},</h3> seja mais produtivo e saudável hoje.
                    </Corpo.AlertaVersaoTeste>
                    }
                    </>
                    )
                    }
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
