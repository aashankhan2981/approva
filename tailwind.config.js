module.exports =
{
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:"#403e3d",
        grey:"rgb(115, 112, 110)",
        bglight:"#f9f8f7",
        "primary":"#254DF4"
      },
      fontFamily: {
        'roboto' : ['roboto'],
        'poppins' : ['poppins']
      },
      minWidth: {
        'md': '448px',  
        'sm':'360px',  
        'xs':'320px',
        "2xs":"280px" , 
        "3xs":"220px" ,  
      },
      maxWidth:{
        50:'200px',
        64:"256px",
      },
      minHeight: {
        120:"480px",
        145:"580px",
        150:"600px",   
      },
      height:{
        100:"400px",
        120:"480px",
        145:"580px",
        150:"600px",
      },
      boxShadow:{
        custom1: "0px 5px 15px 0px rgb(59 59 59 / 5%)",
        custom2: "0 3px 15px 8px rgba(57, 142, 206, 0.5)",
      },
      fontSize:{
        "38px":"38px",
      }

    },
  },
  plugins: [
    
  ]
}