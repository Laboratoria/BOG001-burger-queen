import styled from 'styled-components';

const P = styled.p`
font-family: 'Roboto' , sans-serif;
font-size: 18px;
color: ${(props) => (props.employee ? '#4D2B91' : 'black')};
font-weight: regular;
`
const H1 = styled.h1`
font-family: 'Roboto' , sans-serif;
font-size: 18px;
color: black;
font-weight: bold;
`
const H = styled.h1`
font-family: 'Open Sans' , sans-serif;
font-size: 22px;
color: #544c54;
font-weight: 600;
`

const H2 = styled.h2`
font-family: 'Roboto' , sans-serif;
font-size: 16px;
color: black;
font-weight: bold;
`

const P2 = styled(P)`
font-family: 'Roboto' , sans-serif;
font-size: 16px;
color:${(props) => (props.error ? '#D83131' : 'black')};
`

export {
  H1, P, H2, P2, H,
}
