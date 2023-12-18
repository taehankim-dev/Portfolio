import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        
      }
    }
  },
  safelist: [
    {
      pattern: /bg-(pink|yellow|amber|purple|slate)-(200|300|400)/,
      variants: ['lg']
    }
  ],
  plugins: [],
}
export default config
