import { styled } from '@stitches/react';

export const Button = styled('button', {
  backgroundColor: 'lightblue',
  borderRadius: '9999px',
  border: 'none',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'pink',
  },
});
