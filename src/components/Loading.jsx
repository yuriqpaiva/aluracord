import React from 'react';
import { Box, Image } from '@skynexui/components';

function Loading() {
  return (
    <Box
      tag="div"
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginBottom: '16px',
      }}
    >
      <Image
        src="./images/loading.gif"
        styleSheet={{
          width: '60px',
          height: '60px',
        }}
      ></Image>
    </Box>
  );
}

export default Loading;
