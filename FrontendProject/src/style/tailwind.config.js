/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'okygreen' : '#58BF54',
        'okygray'   : '#E7E5E5',
        'okylightgray' : '#F7F5F5',
        'okybtngray' : '#D9DEE3',
        'okylightgreen' : '#DDF2DD',
      },
    },
  },
  plugins: [],
}
