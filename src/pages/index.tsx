import React, { useState, useEffect } from 'react';
import Head from 'next/head'

import { ContadorProvider } from '../contextos/ContadorContexto';
import { DesafiosProvider } from '../contextos/DesafiosContexto';
import Index from '../components/Index';

import {GetServerSideProps} from 'next';

interface  indexProps{
  level: number;
  xpAtual: number;
  desafiosCompletos: number;
}

export default function Home(props: indexProps) {

  console.log(props);

  return (
    <>
      <DesafiosProvider 
      nivel={props.level}  
      level={props.level}  
      xpAtual={props.xpAtual} 
      desafiosCompletos={props.desafiosCompletos}
      >
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {  level, xpAtual, desafiosCompletos } = ctx.req.cookies;
  return {
    props:{
      level: Number(level),
      xpAtual: Number(xpAtual),
      desafiosCompletos: Number(desafiosCompletos)
    }
  }
}