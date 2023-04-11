import replace from '@rollup/plugin-replace';

export default {
  plugins: [
    replace({
      'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
    }),
  ],
};