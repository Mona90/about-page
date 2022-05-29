import styled from "styled-components";
import { mainTitleColor, smallTitle } from "../Utilities";

export const ServiceSec = styled.section
`.h2{
    color:${mainTitleColor};
    margin-bottom:0;
    text-transform:capitalize;
    font-weight: 400;
    font-size: 30px;
}
.h1{
    font-weight:700;
    color:${mainTitleColor};
    font-size: 68px;
    margin-bottom: 0;
}
.text{
    color:${mainTitleColor};
    font-weight: 300;
    margin-bottom:60px;
}
.services-info{
    position:relative;
    &::after{
        content:"";
        position:absolute;
        height:100%;
        width:0.5px;
        top:0;
        bottom:0;
        left:50%;
        transform:translateX(-50%);
        background:#dee2e6;
    }
    li{
        position:relative;
        margin-bottom: 15px;
        &::after{
            content:"";
           position:absolute;
           bottom:0;
           width:85%;
           height:1px;
           background:#dee2e6;
           left:50%;
           transform:translateX(-50%);
        }
        .service-img{
            width: 26px;
            margin: 0 auto 10px;
        }
        h5{
            color:${smallTitle};
            font-size: 14px;
            text-transform: capitalize;
            font-weight: 600;
        }
        p{
            color:#757575;
            font-size: 11px;
        }
    }
}
`