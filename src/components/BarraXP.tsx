import { useContext } from 'react'
import styled from 'styled-components'
import { DesafiosContexto } from '../contextos/DesafiosContexto'


const Tudo = styled.div`
  position:fixed;
  width:100%;
  height:40px;
  bottom:0;
  padding:50px 20px 20px 20px;
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



    & > span{
        position:absolute;
        width:20px;
        right:calc(0px - 10px);
        display:flex;
        justify-content:center;
        margin-top:-30px;

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
                            {xpAtual}xp
                        </span>
                    </XpAtual>
                </Barra>
                {xpParaUpar}
            </Tudo>
        </>
    );
  };
