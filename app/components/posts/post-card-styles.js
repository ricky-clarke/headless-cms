import styled from 'styled-components'

export const PostCard = styled.section`

            background:#8c45ff;
            display:flex;
            height:100dvh;
            height: 100vh;
            flex-direction: column;
            text-align:left;
    
            @media(min-width:768px) {
                flex-direction: row;
            }


        &:nth-child(odd) {
       
                background:#3e2e52;
           
                @media(min-width:768px) {
                    flex-direction: row-reverse;
                    text-align:right;
                }


        }


`
export const PostCard_Img = styled.div`

    position:relative;

    @media(min-width:992px) {
        width:50%;
    }

    img {
        height:100%;
        object-fit:cover;
        width:100%;
    }
`
export const PostCard_Copy = styled.div`
    color:#fff;
    display:flex;
    justify-content:center;
    flex-direction: column;
    padding:2em;

    @media(min-width:992px) {
        padding:5em;
        width:50%;
    }

`
export const PostCard_Title = styled.h2`
    font-size:3em;
    font-family:sans serif;
`