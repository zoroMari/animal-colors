// import { format } from 'path';
import { catsData } from './catsData';
import { Cat, ICat } from './catsData';
import { Gallery } from './gallery';


const URL_PARAM_NAME = 'activeTab';

interface ITabsMapping {
  [key: string]: {
    tab: HTMLButtonElement;
  }
}

export class TabsComponent {
  private readonly _root: HTMLElement;
  private readonly _catsInfo: ICat[];
  private _activeTab: HTMLButtonElement;
  private _tabMapping: ITabsMapping = { };


  constructor(
    _root: HTMLElement,
    _catsInfo: ICat[],
  ) {
    this._root = _root;
    this._catsInfo = _catsInfo;
    this._tabMapping = this._createTabsMapping();
    this._insertContent();
    this._chooseAndOpenActiveTab();
  }

  private _chooseAndOpenActiveTab() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const activeTabId = params.get(URL_PARAM_NAME);
    const tab = this._tabMapping[activeTabId];

    if (activeTabId && tab) {
      this._activeTab = this._tabMapping[activeTabId]?.tab;
    } else {
      this._activeTab = this._tabMapping[this._catsInfo[0].id]?.tab;
    }

    this._activeTab.click();
  }

  private _insertContent() {
    const breedsTemplate = this._createTabsContainerTemplate();
    const galleryTemplate = this.__createGalleryContainerTemplate();

    Object.values(this._tabMapping).forEach((item) => {
      return breedsTemplate.append(item.tab);
    })

    this._root.appendChild(breedsTemplate);
    this._root.appendChild(galleryTemplate);
  }

  private _createTabsMapping(): ITabsMapping {
    return this._catsInfo.reduce((acc, curr) => {
      return { ...acc, [curr.id]: { tab: this._createTabTemplate(curr) } }
    }, {});
  }

  private __createGalleryContainerTemplate(): HTMLDivElement {
    const result = document.createElement('div');
    result.className = 'Gallery';
    return result;
  }

  private _createTabsContainerTemplate(): HTMLDivElement {
    const result = document.createElement('div');
    result.className = 'Tabs';
    return result;
  }

  private _createTabTemplate(breed: ICat): HTMLButtonElement {
    const tab: HTMLButtonElement = document.createElement('button');
    tab.innerHTML = `${breed.value}`;
    tab.className = 'Tabs-Tab Tab';
    tab.id = `${breed.id}Tab`;
    tab.onclick = () => {
      this._changeTab(tab);
      this._handleTabOnClick(breed.id);
    }

    return tab;
  }

  private _changeUrlWithoutReload(tabId: string) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    params.delete(URL_PARAM_NAME);
    params.set(URL_PARAM_NAME, tabId);

    url.search = params as unknown as string;
    window.history.replaceState(null, null, url);
  }


  private _handleTabOnClick(catId: string) {
    const root: Element = document.querySelector('.Gallery');

    this._openGallery(root, catId);
    this._changeUrlWithoutReload(catId);
  }

  private _changeTab(button: HTMLButtonElement): void {
    if (this._activeTab) this._activeTab.classList.remove('Tab_active');
    this._activeTab = button;
    this._activeTab.classList.add('Tab_active');
  }

  private _openGallery(root: Element, catId: string) {
    const catImages: string[] = this._findAnimalById(catId).images;

    return new Gallery(root, catImages);
  }

  private _findAnimalById(animalId: string) {
    return this._catsInfo.find((item) => item.id === animalId);
  }
}

