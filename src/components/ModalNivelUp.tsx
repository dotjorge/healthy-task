import styled from 'styled-components'


const Fundo = styled.div`

    position:absolute;
    width:100%;
    height:100%;
    backdrop-filter:blur(5px);

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

    div{
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
        background:var(--verde);
        border-radius:5px;
        color:var(--preto);
        cursor:pointer;
        outline:none;
        transition:.1s ease;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        opacity:.8;

        &:before{
            content:'<';
            color:var(--preto);
            margin-right:10px;
            opacity:0;
            transform:translateX(10px);
            transition:.2s ease;
        }

        &:after{
            content:'';
            width:100%;
            height:100%;
            position:absolute;
            border-radius:5px;
            box-shadow:0 0 0px var(--verde);
            transition:.2s ease;
            z-index:-1;
            opacity:.4;

        }
        &:hover{
            opacity:1;
            &:before{
                opacity:.5;
                transform:translateX(0);
            }

            &:after{
                box-shadow:0 0 20px var(--verde);
            }

        }
    }

    h1{
        font-size:150px;
        margin:0;
        color:var(--verde);
        display:flex;
        align-items:center;
        justify-content:center;
    }
    h2{
        margin:0;
    }
    
    display:none;
`


export default function ModalNivelUp({...props}){
    return(
        <>
            <Fundo {...props}>
                <div>
                    <h1>
                       2
                    </h1>
                    <h2>
                        Parabéns!
                    </h2>
                    <span>
                        Você alcançou um novo nível.
                    </span>
                    <button> Voltar </button>
                </div>
            </Fundo>
        </>
    );
  };
