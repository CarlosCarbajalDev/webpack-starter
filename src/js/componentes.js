import '../css/componentes.css';


export const saludar = (nom) => {
    console.log('Creando etiqueda h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nom}, còmo es`;
    document.body.append(h1);
}

export const nombre2 = 'Roberto';