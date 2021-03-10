import styled from 'styled-components'

const IniciarTarefa = styled.button`
  display:flex;
  align-items:center;

  --corBg:var(--verde);

  &[data-cor="vermelho"] {
    --corBg:orange;
  }

  background:var(--corBg);

  background:linear-gradient(45deg, transparent 50%, rgba(0,0,0,.17) 50%),linear-gradient(45deg, var(--corBg), var(--corBg) 50%);
  background-repeat:no-repeat;
  background-size:300%;
  background-position:24% 0, center;


  font-size:1.625rem;
  --cor:var(--preto);
  color:var(--cor);
  padding:1.25rem 2.5rem;
  border-radius:10px;
  outline:none;
  border:none;
  border:5px solid var(--corBg);
  cursor:pointer;
  position:relative;

  & > span:first-child{
    font-weight:600;
    margin-right:10px;
  }

  &[data-teste="iniciar"] {
    &:before{
    content:'';
    position:absolute;
    width:0;height:0;
    border:10px solid transparent;
    border-left:10px solid var(--cor);
    //margin-right:-21px;
    left:10px;
    opacity:0;
    transition:.2s ease;
    }
  }

  &:disabled {
    --corBg:var(--maisCinza);
    --cor:var(--verde);
    &:before{
      content:'✓';
      margin-right:10px;
      color:var(--cor);
    }
  }

  &:after{
    content:'';
    position:absolute;
    width:100%;height:100%;
    left:0;
    border-radius:10px;
    box-shadow:0 0 0px var(--corBg);
    opacity:.4;
    transition:.2s ease;
    z-index:-1;
  }

  &:not(:disabled):hover::before{
    //margin-right:0;
    left:20px;
    opacity:1;

  }
  &:not(:disabled):hover:after{
    box-shadow:0 0 25px var(--corBg);
  }


  &:not(:disabled):hover{
    background-position:100% 0, center;
    //--cor:#3f3f3f;
  }

  &[data-mobile="mostrar"] {
    display:none;
    @media only screen and (max-width: 600px) {
      & {
        display:flex;
      }
    }
  }

  &[data-mobile="ocultar"] {
    display:flex;
    @media only screen and (max-width: 600px) {
      & {
        display:none;
      }
    }
  }
  
  transition:.1s ease, background-position .3s;


`

export default function Botao({children, ...props}){
    return(
        <>
            <IniciarTarefa {...props}>
                {children}
            </IniciarTarefa>
        </>
    );
  };
