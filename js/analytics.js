function etiquetaSeguimiento(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-122372284-1');
    console.log("inicialized analytics");
}
  
