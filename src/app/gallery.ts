import { catsData } from './catsData';

interface IGallery {
  nextSlide(): void;
  prevSlide(): void;
}

export class Gallery implements IGallery {
  private readonly _root: Element;
  private readonly _catPhotos: string[];
  private _currentSlideIndex: number;
  private _currentSlideId: string;
  private _randomIdPart = Math.random();

  constructor(
    _root: Element,
    _catPhotos: string[],
  ) {
    this._root = _root;
    this._catPhotos = _catPhotos;
    this._render();
  }

  public nextSlide(): void {
    this._changeSlide(this._currentSlideIndex + 1);
  }

  public prevSlide(): void {
    this._changeSlide(this._currentSlideIndex - 1);
  }

  private _render(): void {
    this._insertSlideTemplate(this._catPhotos);
  }

  private _changeSlide(nextSlideIndex: number): void {
    const prevSlide = this._root.querySelector(`#${this._currentSlideId}`) as HTMLImageElement;
    prevSlide.classList.remove('.ActiveSLide');

    // this.nextSlideIndex
  }

  private _insertSlideTemplate(images: string[]): void {
    const template: string = this._createSlideTemplate(images);
    this._root.innerHTML = template;
    this._root.innerHTML += this._createButtonTemplate();
  }

  private _createSlideTemplate(images: string[]): string {
    const mainPhotos: string = images.reduce((acc, curr, index) => {
      return `${acc}${this.__createMainPhotoTemplate(curr, index)}`;
    }, '');

    const previewPhotos: string = images.reduce((acc, curr, index) => {
      return `${acc}${this.__createPreviewPhotoTemplate(curr, index)}`;
    }, '');

    return `
      <div class="MainPhoto">
        ${mainPhotos}
      </div>

      <div class="Previews">
       <div class="Previews-Wrapper">
          ${previewPhotos}
        </div>
      </div>
    `;
  }

  private __createMainPhotoTemplate(image: string, id: number): string {
    return `
     <img src="${image}" id="${this._randomIdPart}_${id}"/>
    `
  }

  private __createPreviewPhotoTemplate(image: string, id: number): string {
    return `
      <img class="Preview" src="${image}" id="${this._randomIdPart}_${id}" />
    `
  }

  private _createButtonTemplate(): string {
    return `
      <svg class="Arrow Arrow_previous" width="48" height="48" viewBox="0 0 48 48" fill="none"
        xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24 2C36.15 2 46 11.85 46 24C46 36.15 36.15 46
            24 46C11.85 46 2 36.15 2 24C2 11.85 11.85 2 24 2ZM28.414 17.414C28.7783 17.0368 28.9799
            16.5316 28.9753 16.0072C28.9708 15.4828 28.7605 14.9812 28.3896 14.6104C28.0188 14.2395
            27.5172 14.0292 26.9928 14.0247C26.4684 14.0201 25.9632 14.2217 25.586 14.586L17.586
            22.586C17.2111 22.9611 17.0004 23.4697 17.0004 24C17.0004 24.5303 17.2111 25.0389 17.586
            25.414L25.586 33.414C25.9632 33.7783 26.4684 33.9799 26.9928 33.9753C27.5172 33.9708 28.0188
            33.7605 28.3896 33.3896C28.7605 33.0188 28.9708 32.5172 28.9753 31.9928C28.9799 31.4684
            28.7783 30.9632 28.414 30.586L21.828 24L28.414 17.414Z" fill="#253238"/>
        </svg>

        <svg class="Arrow Arrow_next" width="48" height="48" viewBox="0 0 48 48" fill="none"
        xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15
            11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM19.586 17.414C19.2217
            17.0368 19.0201 16.5316 19.0247 16.0072C19.0292 15.4828 19.2395 14.9812 19.6104
            14.6104C19.9812 14.2395 20.4828 14.0292 21.0072 14.0247C21.5316 14.0201 22.0368
            14.2217 22.414 14.586L30.414 22.586C30.7889 22.9611 30.9996 23.4697 30.9996 24C30.9996
            24.5303 30.7889 25.0389 30.414 25.414L22.414 33.414C22.0368 33.7783 21.5316 33.9799
            21.0072 33.9753C20.4828 33.9708 19.9812 33.7605 19.6104 33.3896C19.2395 33.0188 19.0292
            32.5172 19.0247 31.9928C19.0201 31.4684 19.2217 30.9632 19.586 30.586L26.172 24L19.586
            17.414Z" fill="#253238"/>
        </svg>
    `;
    throw new Error('Not implemented');
  }
}



// export const gallery = new Gallery(document.querySelector('.Gallery'), catsData[0].images);

// const myCustomButton = document.querySelector('#myBtn');

// myCustomButton.addEventListener('click', () => gallery.nextSlide());
