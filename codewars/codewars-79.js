function recycle(array) {
  let recycling = { paper: [], glass: [], organic: [], plastic: [] };
  array.forEach(mat => {
    recycling[mat.material].push(mat.type);
    if (mat.secondMaterial) {
      recycling[mat.secondMaterial].push(mat.type);
    }
  });

  return [
    recycling.paper,
    recycling.glass,
    recycling.organic,
    recycling.plastic,
  ];
}

let a = [
  { type: 'rotten apples', material: 'organic' },
  {
    type: 'out of date yogurt',
    material: 'organic',
    secondMaterial: 'plastic',
  },
  { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
  { type: 'amazon box', material: 'paper' },
  { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
];

console.log(recycle(a)); // b

let b = [
  ['wine bottle', 'amazon box', 'beer bottle'],
  ['wine bottle', 'beer bottle'],
  ['rotten apples', 'out of date yogurt'],
  ['out of date yogurt'],
];

/*

Task
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]


Задача
Вам будет предоставлен список объектов. 
Каждый объект имеет type, materialи, возможно, secondMaterial. 
Существующие материалы: paper, glass, organic, и plastic.

Ваша задача состоит в том, чтобы отсортировать эти объекты 
по 4 мусорным бакам в соответствии с их material(и secondMaterialесли он присутствует), 
перечислив typeобъекты, которые должны попасть в эти мусорные баки.

Примечания
Контейнеры должны идти в том же порядке, что и материалы, перечисленные выше.
Все корзины должны быть перечислены в выводе, даже если некоторые из них пусты.
Если объект сделан из двух материалов, он typeдолжен быть указан в обеих соответствующих корзинах.
Порядок объектов typeв каждой ячейке должен быть таким же, как порядок их соответствующих объектов в списке ввода.
Пример
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
ОСНОВЫМАССИВЫОБЪЕКТЫ



  // array.forEach(mat => {
  //   checkMaterials(mat.material, mat);
  //   if (mat.secondMaterial) {
  //     checkMaterials(mat.secondMaterial, mat);
  //   }
  // });

  // function checkMaterials(material, mat) {
  //   switch (material) {
  //     case 'glass':
  //       recycling.glass.push(mat.type);
  //       break;
  //     case 'paper':
  //       recycling.paper.push(mat.type);
  //       break;
  //     case 'plastic':
  //       recycling.plastic.push(mat.type);
  //       break;
  //     case 'organic':
  //       recycling.organic.push(mat.type);
  //       break;

  //     default:
  //       break;
  //   }
  // }
*/
