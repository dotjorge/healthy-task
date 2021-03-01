import React, { useState, useEffect } from 'react';
import BarraXP from "../components/BarraXP";
import Botao from '../components/Botao';
import Corpo from "../components/Corpo";
import Fundo from "../components/Fundo";
import Topo from "../components/Topo";
import Desafio, { CarregandoDesafio, DarDesafio, InicieUmCiclo } from "../components/Desafios";
import Head from 'next/head'
import Contador from '../components/Contador';


//Contexto
import { useContext } from 'react'
import { ContadorContexto } from '../contextos/ContadorContexto';
import { DesafiosContexto } from '../contextos/DesafiosContexto';


export default function Home() {

  const {
    colors,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown} = useContext(ContadorContexto);

  const { desafioAtivo, desafiosCompletos, level } = useContext(DesafiosContexto);


  return (
    <>

      <Head>
        <title>Healthy Task - Se exercite após terminar tarefas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Fundo className={colors}>
        <Topo level={level}></Topo>
        
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
                <span>Novo ciclo iniciado</span>
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
  )
}
