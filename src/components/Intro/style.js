import styled from "styled-components";
import { buttonStyle, imageStyle } from "../Utilities";

export const Banner = styled.div
`height:500px;
${imageStyle}
`

export const Bottom = styled.div
`
color:#FFF;
position: relative;
top: -35px;
${imageStyle}
button{
    ${buttonStyle}
}
`