import styled from 'styled-components';

export const Header = styled.header`
    display: flex;

    /* realiza o alinhamento vertical dos itens ao centro */
    align-items:center;

    /* justify-content: realiza o alinhamento horizontal dos itens.
     * space-between: coloca cada item para um lado da pagina.
     */
    justify-content: space-between;

    a {
       display: flex;
       align-items: center;

       /* retira o uderline do nome(link) */
       text-decoration: none;

       /* define a cor do texto */
       color: #a8a8b3;

       /* tempo definido para quando passar o mouse no item - hover */
       transition: color 0.2s;

       /* define uma cor mais escura ao item quando passar o mouse por cima */
       &:hover{
            color: #666;
        }

       svg {
        margin-right: 4px;
       }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;

            /* deixa as bordas da imagem redonda */
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;

        /* remove as bolinhas(marcadores) do li */
        list-style: none;

        margin-top: 40px;

        li {

            /* define que apenas o proximo item li tera uma margen-left de 80px */
            & + li{
                margin-left: 80px;
            }

            strong{
                /* cria um bloco e quebra a linha*/
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }
        }

    }
`;

export const Inssues = styled.div`
    margin-top: 80px;

    a{
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration:none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;


        /* move o item para a direita ao passaro mouse(hover) */
        &:hover{
            transform: translateX(10px);
        }

        & + a {
            margin-top: 16px;
        }

        div {
          margin: 0 16px;
          flex:1;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p{
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }

        }
        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;



