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

import { ContadorContexto, ContadorProvider } from '../contextos/ContadorContexto';
import { DesafiosContexto, DesafiosProvider } from '../contextos/DesafiosContexto';
import Index from '../components/Index';




export default function Home() {

  return (
    <>
      <DesafiosProvider>
        <ContadorProvider>

          <Head>
            <title>Healthy Task - Se exercite após terminar tarefas</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          <Index/>

        </ContadorProvider>
      </DesafiosProvider>
    </>
  )
}
