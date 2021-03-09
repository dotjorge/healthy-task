import styled from 'styled-components'


const Background = styled.div`
    flex-grow:1;
    transition:1s ease background;
    background:var(--fundo);

`

const Texto = styled.div`
    position:absolute;
    width:100%;height:100%;
    //z-index:-1;
    overflow:hidden;
    &:after{
        display:none;
        position:absolute;
        font-size:400px;
        font-weight:900;
        content:'+ +';
        transform:rotate(-45deg);
        color:var(--detalheFundo);
        transition:1s ease color;
    }
`


export default function Fundo({children,...props}){
    return(
        <>
            <Background {...props}>
                <Texto/>
                <Texto style={{transform:'scale(-1)'}}/>
                {children}
            </Background>
        </>
    );
  };
