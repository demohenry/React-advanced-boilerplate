
import GloblaStyles from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
    <GloblaStyles />
    <Story />
    </>
  )
]

/* export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
} */