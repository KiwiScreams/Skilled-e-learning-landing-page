/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html,js}"],
  theme: {
    extend: {
      colors:
      {
        greyBlue_clr: "#666CA3",
        darkBlue_clr: "#13183F",
        grey_clr: "#83869A",
        pink_clr: "#F74780",
        lightPink_clr: "#FFA7C3",
        white_clr: "#fff",
        pinkGradient_clr: "#F02AA6",
        orangeGradient_clr: "#FF6F48",
        purpleGradient_clr: "#4851FF",
      },
      borderRadius:
      {
        borderRadius_40px: 40
      },
      fontSize:
      {
        fontSize_56px: 56
      },
      lineHeight:
      {
        lineHeight_70: 70
      },
      width:
      {
        width_350: 350
      }
    },
  },
  plugins: [],
}

