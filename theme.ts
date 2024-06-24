import { DEFAULT_THEME, createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: "Pixelify Sans",
  headings: {
    fontFamily: `"Pixelify Sans", ${DEFAULT_THEME.fontFamily}`,
  },
});
