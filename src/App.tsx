import * as React from 'react';
import { InterpolationFunction, ThemedStyledProps } from '@mui/styled-engine';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

const Card1 = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Card3 = styled('div')`
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const Card2 = styled('div')(({ theme }) => ({ color: theme.palette.text.primary }));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example with styled-components in TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
