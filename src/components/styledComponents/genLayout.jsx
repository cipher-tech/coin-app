import styled from "styled-components";

const Layout = styled.div`
    display: grid;
    grid-template-rows: repeat(8, max-content);
    grid-template-columns: repeat(10, [col-start] minmax(min-content, 1fr) [col-end])
`
export default Layout