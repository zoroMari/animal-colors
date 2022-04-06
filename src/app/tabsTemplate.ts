import { catsData } from './catsData';
import { Cat, ICat } from './catsData';

interface IBreeds {
  id: string;
  value: string;
}

export class TabsComponent {
  private readonly _root: HTMLElement;
  private readonly _catsInfo: ICat[];

  constructor(
    _root: HTMLElement,
    _catsInfo: ICat[],
  ) {
    this._root = _root;
    this._catsInfo = _catsInfo;
  }

  public insertTab() {
    const template: string = this._catsInfo.reduce((acc, curr) => {
      return `${acc}${this._createTabTemplate(curr)}`;
    }, '');

    this._root.innerHTML = template;
  }

  private _createTabTemplate(breed: IBreeds) {
    return `
      <button class="Breeds-Breed Breed" id="${breed.id}Tab">${breed.value}</button>
    `;
  }
}

