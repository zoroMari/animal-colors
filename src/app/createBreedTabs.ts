import {catBreedNames} from './catBreedNames';
import {CatBreedName} from './catBreedNames';

const root: HTMLElement = document.querySelector('.Breeds');

interface IBreeds {
  name: string;
  value: string;
}

function createTabTemplate(breed: IBreeds) {
  return `
    <button class="Breeds-Breed Breed" id="${breed.name}Tab">${breed.value}</button>
  `;
}

function createArrayOfBreeds(breedsMap: Record<string, string>) {
  return Object.entries(breedsMap).map(([itemKey, itemValue]) => {
    const name: string = itemKey;
    const value: string = itemValue;

    return {
      name,
      value,
    };
  });
}

function insertTab(breedsMap: Record<string, string>, root: HTMLElement) {
  const breeds = createArrayOfBreeds(breedsMap);

  const template: string = breeds.reduce((acc, curr) => {
    return `${acc}${createTabTemplate(curr)}`;
  }, '');

  root.innerHTML = template;
}

insertTab(catBreedNames, root);

