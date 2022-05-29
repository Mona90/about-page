import styled from "styled-components";
import { buttonStyle } from "../Utilities";

export const Head = styled.header
`padding: 20px 0;
.right-side{
    color:#FFF;
    .icon{
        font-size:15px;
        cursor:pointer;
        &.phone{
            width: 35px;
            height: 35px;
            border: 1px solid #FFF;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    button{
       ${buttonStyle}
    }
}

`