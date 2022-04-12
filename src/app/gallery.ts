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
  private _previousButton: HTMLDivElement = this._createPreviousButtonTemplate();
  private _nextButton: HTMLDivElement = this._createNextButtonTemplate();

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

  public hideButton(): void {
    this._previousButton.remove();
    this._nextButton.remove();
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
    this._root.append(this._createGalleryTemplate(images));
  }

  private _createGalleryTemplate(images: string[]): HTMLDivElement {
    const galleryTemplate = document.createElement('div');
    galleryTemplate.className = 'Gallery';

    const mainContainer = this._createMainPhotoContainerTemplate();
    const previewContainer = this._createPreviewsPhotoContainerTemplate();
    const previewWrapper = this._createPreviewsWrapperTemplate();

    images.forEach((item, index) => {
      return mainContainer.append(this._createMainPhotoTemplate(item, index));
    });

    images.forEach((item, index) => {
      return previewWrapper.append(this._createPreviewPhotoTemplate(item, index));
    });

    previewContainer.append(previewWrapper);

    galleryTemplate.append(mainContainer);
    galleryTemplate.append(previewContainer);
    galleryTemplate.append(this._previousButton);
    galleryTemplate.append(this._nextButton);

    return galleryTemplate;
  }


  private _createMainPhotoContainerTemplate(): HTMLDivElement {
    const photoMainContainer = document.createElement('div');
    photoMainContainer.className = 'MainPhoto';
    return photoMainContainer;
  }

  private _createPreviewsPhotoContainerTemplate(): HTMLDivElement {
    const photoMainContainer = document.createElement('div');
    photoMainContainer.className = 'Previews';
    return photoMainContainer;
  }

  private _createPreviewsWrapperTemplate(): HTMLDivElement {
    const previewsWrapperTemplate = document.createElement('div');
    previewsWrapperTemplate.className = 'Previews-Wrapper';
    return previewsWrapperTemplate;
  }

  private _createMainPhotoTemplate(image: string, id: number): HTMLDivElement {
    const photoMain = document.createElement('div');
    photoMain.innerHTML = `<img src="${image}" id="${this._randomIdPart}_${id}" />`
    return photoMain;
  }

  private _createPreviewPhotoTemplate(image: string, id: number): HTMLElement {
    const photoPreview = document.createElement('div');
    photoPreview.innerHTML = `<img src="${image}" id="${this._randomIdPart}_${id}" />`
    photoPreview.className = 'Preview';
    return photoPreview;
  }

  private _createSlideTemplate_old(images: string[]): string {
    const mainPhotos: string = images.reduce((acc, curr, index) => {
      return `${acc}${this._createMainPhotoTemplate_old(curr, index)}`;
    }, '');

    const previewPhotos: string = images.reduce((acc, curr, index) => {
      return `${acc}${this._createPreviewPhotoTemplate_old(curr, index)}`;
    }, '');

    return `
      <div class="Gallery">
        <div class="MainPhoto">
          ${mainPhotos}
        </div>

        <div class="Previews">
        <div class="Previews-Wrapper">
            ${previewPhotos}
          </div>
        </div>
      </div>
    `;
  }

  private _createMainPhotoTemplate_old(image: string, id: number): string {
    return `
     <img src="${image}" id="${this._randomIdPart}_${id}"/>
    `
  }

  private _createPreviewPhotoTemplate_old(image: string, id: number): string {
    return `
      <img class="Preview" src="${image}" id="${this._randomIdPart}_${id}" />
    `
  }

  private _createPreviousButtonTemplate(): HTMLDivElement {
    const prevButton = document.createElement('div');
    prevButton.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 2C36.15 2 46 11.85 46 24C46 36.15 36.15 46
          24 46C11.85 46 2 36.15 2 24C2 11.85 11.85 2 24 2ZM28.414 17.414C28.7783 17.0368 28.9799
          16.5316 28.9753 16.0072C28.9708 15.4828 28.7605 14.9812 28.3896 14.6104C28.0188 14.2395
          27.5172 14.0292 26.9928 14.0247C26.4684 14.0201 25.9632 14.2217 25.586 14.586L17.586
          22.586C17.2111 22.9611 17.0004 23.4697 17.0004 24C17.0004 24.5303 17.2111 25.0389 17.586
          25.414L25.586 33.414C25.9632 33.7783 26.4684 33.9799 26.9928 33.9753C27.5172 33.9708 28.0188
          33.7605 28.3896 33.3896C28.7605 33.0188 28.9708 32.5172 28.9753 31.9928C28.9799 31.4684
          28.7783 30.9632 28.414 30.586L21.828 24L28.414 17.414Z" fill="#253238"/>
      </svg>`
    prevButton.className = 'Arrow Arrow_previous';

    return prevButton;
  }

  private _createNextButtonTemplate(): HTMLDivElement {
    const nextButton = document.createElement('div');
    nextButton.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15
          11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM19.586 17.414C19.2217
          17.0368 19.0201 16.5316 19.0247 16.0072C19.0292 15.4828 19.2395 14.9812 19.6104
          14.6104C19.9812 14.2395 20.4828 14.0292 21.0072 14.0247C21.5316 14.0201 22.0368
          14.2217 22.414 14.586L30.414 22.586C30.7889 22.9611 30.9996 23.4697 30.9996 24C30.9996
          24.5303 30.7889 25.0389 30.414 25.414L22.414 33.414C22.0368 33.7783 21.5316 33.9799
          21.0072 33.9753C20.4828 33.9708 19.9812 33.7605 19.6104 33.3896C19.2395 33.0188 19.0292
          32.5172 19.0247 31.9928C19.0201 31.4684 19.2217 30.9632 19.586 30.586L26.172 24L19.586
          17.414Z" fill="#253238"/>
      </svg>`
    nextButton.className = 'Arrow Arrow_next';

    return nextButton;
  }



}

// export const gallery = new Gallery(document.querySelector('.Gallery'), catsData[0].images);

// const myCustomButton = document.querySelector('#myBtn');

// myCustomButton.addEventListener('click', () => gallery.nextSlide());
