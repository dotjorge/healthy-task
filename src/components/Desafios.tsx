//Contexto
import { useContext } from 'react'
import { DesafiosContexto } from '../contextos/DesafiosContexto';

import Botao from '../components/Botao';
import styled from 'styled-components'
import { ContadorContexto } from '../contextos/ContadorContexto';

const Conteudo = styled.div`

`

const Elemento = styled.div`
  padding:50px 0px;
  flex:1;
  font-size:20px;
  text-align:center;
  color:var(--cinza);
  
  transition: 1s ease all;

  & > div:first-child{
    font-size:30px;
  }

  h2{
    color:var(--verde);
    margin:0;
  }

  h3{
    color:var(--branco);
    margin:0;
    font-weight:400;
  }

  h4{
    color:var(--cinza);
    margin:0;
    font-weight:300;
  }

  img{
      margin:10px 0;
  }


  footer{
      margin-top:10px;
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:10px;

      @media only screen and (max-width: 600px) {
        & {
            //grid-template-columns: 1fr;
        }
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      padding:0 30px;
      padding-bottom:50px;
    }
  }


`

const IconeCarregando = styled.div`
//Carregando ...
position:relative;
display:flex;
justify-content:center;
flex:1;
margin:20px 0;
--cor:var(--cinza);

& > span{
  position:relative;
  width:10px;
  height:10px;
  border-radius:100%;
  margin:5px;
}

& > span:nth-child(1):after{
  position:absolute;
  content:'';
  width:100%;height:100%;
  left:0;top:0;
  background:var(--cor);
  opacity:0;
  border-radius:100%;
  animation: loading 1s infinite;
  animation-delay:0s;
}

& > span:nth-child(2):after{
  position:absolute;
  content:'';
  width:100%;height:100%;
  left:0;top:0;
  background:var(--cor);
  opacity:0;
  border-radius:100%;
  animation: loading 1s infinite;
  animation-delay:.2s;
}

& > span:nth-child(3):after{
  position:absolute;
  content:'';
  width:100%;height:100%;
  left:0;top:0;
  background:var(--cor);
  opacity:0;
  border-radius:100%;
  animation: loading 1s infinite;
  animation-delay:.4s;
}

@keyframes loading{
0%{
  opacity:0;
}

40%{
  opacity:0;
}
50%{
  opacity:1;
}
100%{
  opacity:0;
}

}
`


export default function Desafio({children, ...props}){
    return(
        <>
            <Conteudo {...props}>
                {children}
            </Conteudo>
        </>
    );
  };



export function InicieUmCiclo(){
    return(
        <>
            <Elemento>
                <div>Inicie um ciclo para receber desafios</div>
                <IconeCarregando>
                    <span></span>
                    <span></span>
                    <span></span>
                </IconeCarregando>
                <div>Avance de level completando os desafios</div>
            </Elemento>
        </>
    );
}

export function CarregandoDesafio(){
    return(
        <>
            <Elemento>
                <div style={{fontSize:'40px'}}>Carregando desafio</div>
                <IconeCarregando>
                    <span></span>
                    <span></span>
                    <span></span>
                </IconeCarregando>
                <div>Um novo desafio será dado após o termino do ciclo</div>
            </Elemento>
        </>
    );
}

export function DarDesafio(){
    const { desafioAtivo, resetarDesafio, completarDesafio } = useContext(DesafiosContexto);

    const { resetCountdown } = useContext(ContadorContexto);

    function ResetarTudo(){
        resetarDesafio();
        resetCountdown();
    }

    function Completei(){
        ResetarTudo();
        completarDesafio();
        console.log("Completei");

    }

    function Falhei(){
        ResetarTudo();
        console.log("Falhei");
    }

    return(
        <>
            <Elemento>
                <h4>Novo desafio!</h4>
                <h2>Ganhe {desafioAtivo.amount} xp</h2>
                <img src={`icons/${desafioAtivo.type}.svg`}/>
                <h3>{desafioAtivo.description}</h3>

                    <footer>

                        <Botao 
                        onClick={() => Completei()} 
                        data-mobile={"ocultar"} 
                        style={{
                        }}
                        >
                            <span>Completei</span>
                        </Botao>

                        <Botao 
                        onClick={() => Falhei()} 
                        data-mobile={"ocultar"} 
                        data-cor={'vermelho'} 
                        style={{
                        }}
                        >
                            <span>Falhei</span>
                        </Botao>

                        <Botao 
                        data-mobile={"mostrar"} 
                        style={{
                        }}
                        >
                            <span>&#10004;</span>
                        </Botao>

                        <Botao 
                        data-cor={'vermelho'} 
                        data-mobile={"mostrar"} 
                        style={{
                        }}
                        >
                            <span>&#10006;</span>
                        </Botao>

                    </footer>

            </Elemento>
        </>
    );
}
