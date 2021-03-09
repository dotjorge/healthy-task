import { useContext } from 'react'
import styled from 'styled-components'
import { DesafiosContexto } from '../contextos/DesafiosContexto'


const Tudo = styled.div`
  position:fixed;
  width:100%;
  height:30px;
  bottom:0;
  padding:44px 20px 20px 20px;
  background:var(--fundoXP);
  margin:0 auto;
  display:flex;
  align-items:center;
  margin-top:100px;
  color:var(--textoXP);
  //height:120px;

  transition:.5s ease background;

`

const Barra = styled.div`
    position:relative;
    flex:1;
    background:#313131;
    border-radius:10px;
    height:10px;
    margin:0 10px;
`

const XpAtual = styled.div`
    position:absolute;
    width:50%;
    height:100%;
    left:0;
    top:0;
    color:var(--verde);
    border-radius:10px;
    background:var(--verde);

    display:flex;
    justify-content:flex-end;
    align-items:flex-end;

    transition:1s ease;

    & > span{
        width:0;
        height:0;
        overflow:visible;
        display:flex;
        align-items:flex-end;
        justify-content:center;

        & > span{
            position:relative;
            padding:10px 15px;
            border-radius:5px;
            color:var(--preto);
            font-weight:bold;
            display:flex;
            justify-content:center;
            background:var(--verde);
            transition:1s ease background;

            &:after{
                content:'';
                --tamanho:8px;
                border:var(--tamanho) solid transparent;
                border-top:var(--tamanho) solid var(--verde);
                position:absolute;
                left:calc(50% - var(--tamanho));
                bottom:calc(0px - var(--tamanho) * 2); //-20
                transition:1s ease border;
            }
        }

    }
`

export default function BarraXP(){
    const { xpAtual, xpParaUpar } = useContext(DesafiosContexto);
    const porcentoProximoLevel = Math.round((xpAtual * 100) / xpParaUpar);

    return(
        <>
            <Tudo>
                0xp
                <Barra>
                    <XpAtual style={{width:`${porcentoProximoLevel}%`}}>
                        <span>
                            <span>{xpAtual}xp</span>
                        </span>
                    </XpAtual>
                </Barra>
                {xpParaUpar}
            </Tudo>
        </>
    );
  };
