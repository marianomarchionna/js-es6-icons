// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

  const colors = [
      'blue',
      'orange',
      'purple'
  ]

const iconsContainer = document.getElementById('icons');

const coloredArray = colorIcons(icons, colors);
print(coloredArray, iconsContainer);

// funzioni

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

function print(array, container){
    container.innerHTML = ''; 
    array.forEach((element) => {
        const { name, prefix, type, family, color } = element;
        container.innerHTML += `
        <div class="square">
            <i class="${family} ${prefix + name}" style="color: ${color}"></i>
            <div class="title">${name.toUpperCase()}</div>
        </div>`;
    });
}

// Milestone 2
// Coloriamo le icone per tipo

function getTypes(array) {
  const types = [];
  array.forEach((element) => {
    if(!types.includes(element.type)){
      types.push(element.type);
    }
  });
  return types;
}

function colorIcons(array, colors){
  const types = getTypes(array);
  const coloredArray = array.map((element) =>{
    const indexType = types.indexOf(element.type);
    element.color = colors[indexType];
    return element;
  });
  return coloredArray;
}
