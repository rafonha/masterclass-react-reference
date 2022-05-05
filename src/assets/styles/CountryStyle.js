import styled from "styled-components";
import { Link } from 'react-router-dom'

export const CountryLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin-bottom: 10px;

    &:link {
        color: black;
    }

    &:visited {
        color: green;
    }
`