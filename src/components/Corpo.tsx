import styled from 'styled-components'

const Tudo = styled.div`
  //margin-top:40px;
  padding:0 20px;
  display:flex;
  flex-direction:column;

  //Da espaço pra poder scrollar
  margin-bottom:50px;

`
Corpo.Elemento = styled.div`
  width:100%;
  max-width:1024px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  padding: 30px 0px;
  color: var(--branco);
  overflow: hidden;
  transition: .5s ease color;

  //Arruma box-shadow do botão
  overflow: visible;

  @media only screen and (max-width: 600px) {
    & {
      padding:0;
      padding-bottom:10px;
      //Margem depois do topo
      padding-top:20px;
    }
  }

`

Corpo.DesafiosCompletos = styled.div`
  display:flex;
  //background:red;
  flex:1;
  justify-content:space-between;
  margin-bottom:10px;
  font-size:1.5rem;
  padding-bottom:10px;
  border-bottom:1px solid var(--maisCinza);
  & > span:first-child{
    font-weight:400;
  }

`

Corpo.SpaceBetween = styled.div`
  display:flex;
  flex:1;
  justify-content:space-between;

  @media only screen and (max-width: 700px) {
    & {
      flex-direction:column;
      align-items:center;
    }
    & div:first-child{
      margin-top:20px;
    }
  }
`

Corpo.AlertaVersaoTeste = styled.div`
color:var(--verde);
display:flex;
align-items:center;
margin-bottom:10px;

background:var(--maisCinza);
padding:0.65rem 0.93rem;
border-radius:10px;
font-size:0.87rem;
font-weight:300;
letter-spacing:1px;

div{
  width:1rem;
  height:1rem;
  background:var(--verde);
  color:black;
  font-size:0.85rem;
  font-weight:bold;

  display:flex;
  align-items:center;
  justify-content:center;
  transform:rotate(45deg);
  margin-right:15px;

  &:after{
    content:'!';
    margin-left: 0.11rem;
    transform:rotate(-45deg);
    transform-origin:center center;
  }
}
button{
  color:rgba(0,0,0,.7);
  font-weight:bold;
  padding:0.32rem 0.65rem;
  background:var(--verde);
  border-radius:10px;
  outline:none;
  border:none;
  cursor:pointer;
  margin-left:10px;

  &:before{
    content:'<';
    margin-right:-7px;
    opacity:0;
    transition:.2s ease;
  }
  &:hover:before{
    margin-right:4px;
    opacity:.4;
  }
  &:hover{
    opacity:.9;
  }
}

h3{
    margin:0;
    margin-right:8px;
    padding:0;
  }
`

export default function Corpo({children,...props}){
    return(
        <>
          <Tudo {...props}>
            {children}
          </Tudo>
        </>
    );
  };
