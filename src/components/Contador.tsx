import styled from 'styled-components'
//Contexto
import { useContext } from 'react'
import { ContadorContexto } from '../contextos/ContadorContexto';

const Elemento = styled.div`
  display:flex;
  align-items:center;
  font-size:50px;
  color:var(--cinza);

  & > div > span{
    background:var(--contadorFundo);
    border:10px solid var(--contadorFundo);
    margin:10px;
    border-radius:10px;
    color:var(--branco);
  }

  & > div > span:last-child{
    margin-right:0;
  }

  & > div > span > span:first-child{
    padding:0 10px;
    border-right:1px solid var(--contadorBorda);
  }
  & > div > span > span:last-child{
    padding:0 10px;
    border-left:1px solid var(--contadorBorda);
  }

  & > div:first-child{

  }
`

export default function Contador({...props}){
    const {
        minuteLeft,
        minuteRight,
        secondLeft,
        secondRight,
        startCountdown} = useContext(ContadorContexto);

    return(
        <>
            <Elemento>
                <div>
                    <span>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                    </span>
                    :
                    <span>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                    </span>
                </div>
            </Elemento>
        </>
    );

  };
