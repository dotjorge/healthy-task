import { useContext, useState } from 'react';
import { DesafiosContexto } from '../contextos/DesafiosContexto';
import styled from 'styled-components'
import { GetServerSideProps } from 'next';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Falhei = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    --cor:var(--laranja);
`

const Verde = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    --cor:var(--verde);
`
const Fundo = styled.div`

    position:absolute;
    width:100%;
    height:100%;
    //backdrop-filter:blur(5px);

    //Fundo
    &:before{
        content:'';
        width:100%;
        height:100%;
        position:absolute;
        background:var(--bg);
        opacity:.8;
        z-index:-1;
    }

    display:flex;
    align-items:center;
    justify-content:center;
    color:var(--branco);
    letter-spacing:1px;

    //Animacao
    animation:aparecer 5s ease forwards;
    @keyframes aparecer{
        0%{opacity:0;transform:scale(1.5);visibility:hidden;}
        10%{opacity:1;transform:scale(1);visibility:visible;}
        90%{opacity:1;transform:scale(1);visibility:visible;}
        100%{opacity:0;transform:scale(1.5);visibility:hidden;}
    }

    > div{
        position:relative;
        width:100%;
        max-width:400px;

        border-radius:25px;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:20px;


    }

    button{
        position:relative;
        margin-top:50px;
        font-size:25px;
        font-weight:900;
        padding:5px 20px;
        border:none;
        background:var(--cor);
        border-radius:5px;
        color:rgba(0,0,0,.3);

        cursor:pointer;
        outline:none;
        transition:.1s ease;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        opacity:.8;

        &:after{
            /*
            content:'<';
            color:var(--preto);
            margin-right:10px;
            opacity:0;
            transform:translateX(10px);
            transition:.2s ease;
            */
            margin-left:10px;
            color:var(--preto);
            content:'5';
            animation:contador 5s linear forwards;
            @keyframes contador{
                0%{content:'5';}
                20%{content:'4';}
                40%{content:'3';}
                60%{content:'2';}
                80%{content:'1';}
                100%{content:'0';}
            }

        }

        &:before{
            content:'';
            width:100%;
            height:100%;

            position:absolute;
            border-radius:5px;
            box-shadow:0 0 0px var(--cor);
            transition:.2s ease;
            z-index:-1;
            opacity:.3;

        }
        &:hover{
            opacity:1;


            &:before{
                box-shadow:0 0 20px var(--cor);
            }

        }
    }

    h1{
        font-size:150px;
        margin:0;
        color:var(--cor);
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;

    }
    h2{
        margin:0;
    }
    
    //display:none;
`

const AnimacaoUpar = styled.div `
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    font-size:400px;
    color:var(--cor);
    z-index:-1;
    opacity:.4;
    align-items:center;
    justify-content:center;
    animation: subir 1s ease forwards;

    &:before{
        content:'^';
        font-size:150px;
        margin-top:-100px;
        animation: descer 1s ease forwards;
    }
    &:after{
        content:'^';
        font-size:150px;
        margin-top:-100px;
        animation: descer 1s ease forwards;
    }

    @keyframes subir{
        from{transform:translateY(150px)}
        to{transform:translateY(50px);opacity:0;}
    }

    @keyframes descer{
        from{transform:translateY(0)}
        to{transform:translateY(50px);}
    }
`

const AnimacaoXp = styled.div `
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    font-size:400px;
    color:var(--cor);
    z-index:-1;
    opacity:.4;
    align-items:center;
    justify-content:center;
    animation: subir 1s ease forwards;

    &:before{
        content:'+';
        font-size:150px;
        margin-top:-100px;
        animation: descer 1s ease forwards;
    }
    &:after{
        content:'+';
        font-size:150px;
        margin-top:-100px;
        animation: descer 1s ease forwards;
    }

    @keyframes subir{
        from{transform:translateY(150px)}
        to{transform:translateY(50px);opacity:0;}
    }

    @keyframes descer{
        from{transform:translateY(0)}
        to{transform:translateY(50px);}
    }
`

const AnimacaoFalhei = styled.div `
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    font-size:400px;
    color:var(--cor);
    z-index:-1;
    opacity:.4;
    align-items:center;
    justify-content:center;
    animation: subirFalhei 1s ease forwards;


    @keyframes subirFalhei{
        from{transform:translateY(150px) rotate(45deg)}
        to{transform:translateY(50px) rotate(45deg);opacity:0.1;}
    }


`

export default function ModalNivelUp({...props}){
    const { level, fecharModal } = useContext(DesafiosContexto);
    return(
        <>
            <Verde>
                <Fundo {...props}>
                    <div>
                        <h1>
                        { level }
                        <AnimacaoUpar>^</AnimacaoUpar>
                        </h1>
                        <h2>
                            Parabéns!
                        </h2>
                        <span>
                            Você alcançou um novo nível.
                        </span>
                        <button onClick={()=>fecharModal()}>&lt;</button>
                    </div>
                </Fundo>
            </Verde>
        </>
    );
  };

 export function ModalXp({xp,...props}){
    const { fecharModal } = useContext(DesafiosContexto);
    return(
        <>
            <Verde>
                <Fundo {...props}>
                    <div>
                        <h1 style={{fontSize:'3.125rem'}}>
                        +{ xp }xp
                        <AnimacaoXp>+</AnimacaoXp>
                        </h1>
                        <h2>
                            Muito bom!
                        </h2>
                        <span>
                            Continue completando desafios para upar.
                        </span>
                        <button onClick={()=>fecharModal()}>&lt;</button>
                    </div>
                </Fundo>
            </Verde>
        </>
    );
  };

export function ModalFalhei({...props}){
const { fecharModal } = useContext(DesafiosContexto);
return(
    <>
        <Falhei>
            <Fundo {...props}>
                <div>
                    <h1 style={{fontSize:'8.375rem'}}>
                    Oops...
                    <AnimacaoFalhei>:(</AnimacaoFalhei>
                    </h1>
                    <h2>
                        Dessa vez não deu
                    </h2>
                    <span>
                        Nenhum xp foi ganho.
                    </span>
                    <button onClick={()=>fecharModal()}>&lt;</button>
                </div>
            </Fundo>
        </Falhei>
    </>
);
};

  
const Nome = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    --cor:var(--branco);
`

const NomeFundo = styled.div`

    position:absolute;
    width:100%;
    height:100%;
    z-index:50;

    //backdrop-filter:blur(5px);

    //Fundo
    &:before{
        content:'';
        width:100%;
        height:100%;
        position:absolute;
        background:var(--bg);
        opacity:.8;
        z-index:-1;
    }

    color:var(--preto);
    letter-spacing:1px;

    //Animacao
    animation:aparecer .5s 1s ease forwards;
    opacity:0;transform:scale(1.5);visibility:hidden;
    @keyframes aparecer{
        0%{opacity:0;transform:translateY(-25px);visibility:hidden;}
        100%{opacity:1;transform:translateY(0);visibility:visible;}
    }

    > div {
        width: 100%;
        max-width: 1024px;
        position: relative;
        height: 100%;
        margin: 0 auto;
    }

    div > div{
        position:absolute;
        right:20px;
        top:140px;
        width:100%;
        max-width:300px;
        background:var(--verde);
        border-radius:10px;
        padding:20px;
        opacity:.9;
        
        &:after{
            content:'';
            border:20px solid transparent;
            border-bottom:20px solid var(--verde);
            position:absolute;
            top:-40px;
            right:40px;
        }


    }

    input{
        padding:15px 25px;
        border:none;
        outline:none;
        border-radius:10px;
        background:var(--branco);
        opacity:.7;
        color:var(--preto);
        margin:10px 0px;
    }

    button{
        position:relative;
        font-size:20px;
        font-weight:900;
        padding:10px 25px;
        border:none;
        background:var(--preto);
        border-radius:10px;
        color:var(--branco);
        cursor:pointer;
        outline:none;
        transition:.1s ease;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        opacity:1;
        &:hover{
            opacity:.9;
        }


        &:before{
            content:'>';
            color:var(--verde);
            margin-right:-14px;
            opacity:0;
            transition:.2s ease;
        }

        &:hover:not([disabled]):before{
            margin-right:5px;
            opacity:1;
        }


        &:disabled{
            opacity:.7;
            cursor:not-allowed;
        }

        &:disabled:hover{
            margin-bottom:12px;
            animation:campoVazio .2s ease;
        }

        @keyframes campoVazio{
            0%{transform:translateY(0%)}
            50%{transform:translateY(-5px)}
            100%{transform:translateY(0%)}
        }
        &:disabled:after{
            content:'Nome vazio.';
            position:absolute;
            left:0;
            bottom:-18px;
            font-weight:500;
            font-size:12px;
            color:var(--preto);
            opacity:0;
            transition:.2s ease;
        }

        &:disabled:hover:after{
            opacity:1;
        }
    }

    h1{
        margin:0;
        font-weight:400;
        strong{
            font-weight:700;
        }
    }

    h2{
        margin:0;
    }
    
    
`
export function ModalNome({...props}){
    const { nome, trocarNome, fecharModal } = useContext(DesafiosContexto);
    const [nomeEscolhido, setNomeEscolhido] = useState("");

    
    return(
        <>
            <Nome>
                <NomeFundo {...props}>
                    <div>
                        <div>
                            <h1>Para <strong>começar</strong>,</h1>
                            <form
                            autoComplete="off"
                            onSubmit={function (infosDoEvento) {
                            infosDoEvento.preventDefault();
                            trocarNome(nomeEscolhido);
                            }}
                            >
                                <input 
                                name="nomeUsuario"
                                type="text"
                                onChange={function (infosDoEvento) {
                                    console.log(infosDoEvento.target.value);
                                    setNomeEscolhido(infosDoEvento.target.value);
                                    }} 
                                placeholder={'Digite seu nome...'} 
                                maxLength={7}
                                ></input>
                                <button 
                                onClick={
                                    () => {
                                        }
                                } 
                                disabled={nomeEscolhido.length === 0}>Continuar</button>
                            </form>
                        </div>
                    </div>
                </NomeFundo>
            </Nome>
        </>
    );
};