import * as React from 'react';
import Container from '@mui/material/Container';

export default function ChatBox(props: { children: any}) {
  return (
    <Container fixed>{props.children}</Container>
  );
}