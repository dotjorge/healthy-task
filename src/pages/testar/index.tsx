import React, { useState, useEffect } from 'react';
import Head from 'next/head'

import { ContadorProvider } from '../../contextos/ContadorContexto';
import { DesafiosProvider } from '../../contextos/DesafiosContexto';
import Index from '../../components/Index';

import {GetServerSideProps} from 'next';

interface JSON{
  name: string;
}

interface  indexProps{
  level: number;
  xpAtual: number;
  desafiosCompletos: number;
  git:JSON;
}

export default function Home(props: indexProps) {
  return (
    <>
      <DesafiosProvider 
      nivel={props.level}  
      modo={'_debug'} 
      level={props.level}  
      xpAtual={props.xpAtual} 
      desafiosCompletos={props.desafiosCompletos}
      >
        <ContadorProvider>

          <Head>
            <title>Healthy Task - Faça tarefas de maneira saudável e produtiva</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          <Index git={props.git}/>

        </ContadorProvider>
      </DesafiosProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch('https://api.github.com/users/dotjorge');
  const json = await res.json();

  const { level_debug, xpAtual_debug, desafiosCompletos_debug } = ctx.req.cookies;
  return {
    props:{
      level: Number(level_debug),
      xpAtual: Number(xpAtual_debug),
      desafiosCompletos: Number(desafiosCompletos_debug),
      git: json
    },
  }
}