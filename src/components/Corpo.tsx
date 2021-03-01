import styled from 'styled-components'

const Tudo = styled.div`
  margin-top:40px;
  padding:0 20px;

  display:flex;
  flex-direction:column;

`
Corpo.Elemento = styled.div`
  width:100%;
  max-width:1024px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  padding: 30px;
  //border-radius: 25px;
  color: var(--branco);
  //margin-bottom: 40px;

  //background: var(--bgCinza);
  //box-shadow: -10px 10px 15px var(--sombraElemento);

  overflow: hidden;

  //transition: .5s ease all;
  transition: .5s ease color;

  @media only screen and (max-width: 600px) {
    & {
      //padding:0 30px;
    }
  }

`

Corpo.DesafiosCompletos = styled.div`
  display:flex;
  //background:red;
  flex:1;
  justify-content:space-between;
  margin-bottom:10px;
  font-size:24px;
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
      margin-top:40px;
    }
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
