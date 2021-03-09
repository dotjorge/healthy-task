import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Tudo = styled.div`
  position:relative;
  width:100%;
  padding:0 20px;
  //overflow:hidden;
  transition:1s ease background;

  max-height:var(--ocultarTopo);

  //Pattern
  background-color: var(--verde);
  --fundoItself:var(--verde);
  --pattern:var(--verdeEscuro);

  //Padrão

  /*
  background: radial-gradient(circle, transparent 20%, var(--fundoItself) 20%, var(--fundoItself) 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, var(--fundoItself) 20%, var(--fundoItself) 80%, transparent 80%, transparent) 50px 50px, linear-gradient(var(--pattern) 4px, transparent 4px) 0 -2px, linear-gradient(90deg, var(--pattern) 4px, var(--fundoItself) 4px) -2px 0;
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
 */


`


const BoxShadow = styled.div`
  position:absolute;
  width:100%;height:100%;
  left:0;top:0;
  overflow:hidden;
  z-index:-1;
  box-shadow:0 0 50px var(--verde);
  opacity:.4;
`

const Padrao = styled.div`
  position:absolute;
  width:100%;height:100%;
  left:0;top:0;
  overflow:hidden;
  z-index:-1;

  &:before{
    content:'';
    position:absolute;
    width:100%;height:200px;
    left:0;top:0;
    transform:translateY(-100px);

    background: radial-gradient(circle, transparent 20%, var(--fundoItself) 20%, var(--fundoItself) 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, var(--fundoItself) 20%, var(--fundoItself) 80%, transparent 80%, transparent) 50px 50px, linear-gradient(var(--pattern) 4px, transparent 4px) 0 -2px, linear-gradient(90deg, var(--pattern) 4px, var(--fundoItself) 4px) -2px 0;
    background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
    animation: padrao 2s infinite linear;

    @keyframes padrao{
      0%{transform:translateY(-100px)}
      100%{transform:translateY(0)}
    }
  }
  

  //Degrade do topo
  /*
  &:after{
    content:'';
    position:absolute;
    width:100%;height:100%;
    left:0;top:0;
    background:linear-gradient(var(--fadeTop),var(--verde))no-repeat;
  }
  */

`

const Setas = styled.div`
  &:before{
    content:'';
    width:0;
    height:0;
    --tamanho:20px;
    border:var(--tamanho) solid transparent;
    border-top:var(--tamanho) solid var(--verde);
    position:absolute;
    left:calc(50% - var(--tamanho));
    bottom:calc(var(--tamanho) - var(--tamanho) - var(--tamanho) - var(--tamanho));

    transition:1s ease border;
  }

  &:after{
    content:'';
    width:0;
    height:0;
    --tamanho:10px;
    border:var(--tamanho) solid transparent;
    border-top:var(--tamanho) solid var(--setaCinza);
    position:absolute;
    left:calc(50% - var(--tamanho));
    bottom:calc(var(--tamanho) - var(--tamanho) - var(--tamanho) - var(--tamanho) + 0px);

    transition:1s ease border;
  }
`

const SetaCima = styled.div`
  &:before{
    content:'';
    width:0;
    height:0;
    --tamanho:16px;
    border:var(--tamanho) solid transparent;
    border-bottom:var(--tamanho) solid var(--verde);
    position:absolute;
    left:calc(50% - var(--tamanho));
    top:calc(var(--tamanho) - var(--tamanho) - var(--tamanho) - var(--tamanho));

    transition:1s ease border;

  }

  &:after{
    content:'';
    width:0;
    height:0;
    --tamanho:8px;
    border:var(--tamanho) solid transparent;
    border-bottom:var(--tamanho) solid var(--setaCinza);
    position:absolute;
    left:calc(50% - var(--tamanho));
    top:calc(var(--tamanho) - var(--tamanho) - var(--tamanho) - var(--tamanho) + 0px);

    transition:1s ease border;
    opacity:.5;
  }
`

const Elemento = styled.div`
  width:100%;
  max-width:1024px;
  margin:0 auto;
  display:flex;
  padding:10px 0;

  color:var(--branco);

  @media only screen and (max-width: 800px) {
    & {
      //flex-direction:column;
      padding-top:10px;
    }
  }
  
`

const BemVindo = styled.div`
  display:none;
  margin-right:40px;
  font-weight:100;
  font-size:30px;
  letter-spacing: 2px;

  div:first-child{
    font-weight:200;
    font-size:45px;
    letter-spacing: 2px;

  }

  @media only screen and (max-width: 800px) {
    & {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity:.5;
      transform:scale(.7);

      display:none;
    }
    div:first-child{
      margin-right:10px;
    }
  }

`

const Logo = styled.div`
  font-size:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:var(--preto);
  cursor:pointer;

  & > span{
    position:relative;
    width:55px;
    height:55px;
    border-radius:50%;
    background:linear-gradient(45deg,#0c0c0c,rgba(0,0,0,.5));
    color: var(--verde);
    margin-right:10px;
    transition:.2s ease margin,.2s ease color;
  }

  &:hover > span{
    background:linear-gradient(45deg,var(--verde),rgba(255,255,255,.5));
    color: #0c0c0c;
    margin-right:5px;
  }
  
  & > span:after{
    content:'+';
    position:absolute;
    width:100%;
    height:100%;
    font-size:70px;
    font-weight:700;
    display:inline-flex;
    align-items:center;
    justify-content:center;
  }

  & > div{
    width:150px;
    @media only screen and (max-width: 600px) {
      & {
        display:none;
      }
    }
  }

  div div:last-child{
    font-weight:900;
    margin-top:-10px;
  }
`

const UserInfo = styled.div`
  flex:1;
  display:flex;
  flex-direction:row-reverse;
  position:relative;
  color:var(--preto);

  img{
    position:relative;
    border-radius:50%;
  }


  & > div{
    margin-right:15px;
    text-align:right;
  }

  div:first-child{
    font-size:30px;
    font-weight:500;
  }

  & > div > div:last-child{
    color:var(--verde);
    background:var(--preto);
    padding:5px;
    border-radius:5px;

    opacity:.9;
  }

`

export default function Topo({level,git,...props}){
    return(
        <>
            <Tudo className={'animarCaindo'} {...props}>
              <BoxShadow/>
              <Padrao/>
              <SetaCima/>
              <Elemento>
              <BemVindo>
                  <div>#Bem</div>
                  <div>vindo ao</div>
                </BemVindo>
                <a href="/">
        
                  <Logo>
                    <span></span>
                    <div>
                      <div>Healthy</div>
                      <div>Task</div>
                    </div>
                    </Logo>

                </a>
                <UserInfo>
                  <Image 
                  src={git.avatar_url ?? "https://avatars.githubusercontent.com/u/74606139?v=4"}
                  width="70%"
                  height="70%"
                  />
                  <div>
                    <div>{git.name ?? "Name"}</div>
                    <div>Level {level}</div>
                  </div>
                </UserInfo>
              </Elemento>
            </Tudo>
        </>
    );
  };


