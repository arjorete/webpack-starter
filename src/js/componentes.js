//Desde este archivo se exportaran todos los componentes requeridos

import '../css/componentes.css'; //importamos los estilos
// import webpackLogo from'../assets/img/webpack-logo.png'; //importamos una imagen

export const saludar = (nombre)=>{
    console.log(`Hola ${nombre} este es un ejemplo de función`);
}

//Funcion para exportar archivos y trabajar con css
// export const mostarLogo = ()=>{
// const img = document.createElement('img');
// img.src = webpackLogo;
// document.body.append(img);
// }