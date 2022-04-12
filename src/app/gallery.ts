import { catsData } from './catsData';

interface IGallery {
  nextSlide(): void;
  prevSlide(): void;
}

interface ISlide {
  index: number;
  slide: HTMLDivElement;
  thumb: HTMLDivElement;
}

export class Gallery implements IGallery {
  private readonly _root: Element;
  private readonly _catPhotos: string[];
  private _randomIdPart = Math.random();

  private _slides: Record<number, ISlide> = { };
  private _currentSlide: ISlide;

  constructor(
    _root: Element,
    _catPhotos: string[],
  ) {
    this._root = _root;
    this._catPhotos = _catPhotos;
    this._render();
  }

  public nextSlide(): void {
    this._changeSlide(this._currentSlide?.index + 1);
  }

  public prevSlide(): void {
    this._changeSlide(this._currentSlide?.index - 1);
  }

  private _render(): void {
    this._root.append(this._createGalleryTemplate(this._catPhotos));
    this._changeSlide(0);
    // this._insertSlideTemplate(this._catPhotos);
  }

  private _changeSlide(nextSlideIndex: number): void {
    if (this._currentSlide) {
      this._currentSlide.slide.classList.remove('Gallery-Slide_active');
      this._currentSlide.thumb.classList.remove('Preview_active');
    }

    const maxIndex = Object.keys(this._slides).length - 1;
    let index = nextSlideIndex;
    if (index < 0) index = maxIndex;
    else if (index > maxIndex) index = 0;

    console.log('index >>>', index);
    console.log('nextSlideIndex >>>', nextSlideIndex);
    console.log('maxIndex >>>', maxIndex);
    this._currentSlide = this._slides[index];
    console.log('this._currentSlide  >>>', this._currentSlide );
    this._currentSlide.slide.classList.add('Gallery-Slide_active');
    this._currentSlide.thumb.classList.add('Preview_active');
  }

  private _createGalleryTemplate(images: string[]): HTMLDivElement {
    const galleryTemplate = document.createElement('div');
    galleryTemplate.className = 'Gallery';

    const mainContainer = this._createMainPhotoContainerTemplate();
    const previewContainer = this._createPreviewsPhotoContainerTemplate();
    const previewWrapper = this._createPreviewsWrapperTemplate();
    const previousButton: HTMLDivElement = this._createPreviousButtonTemplate();
    const nextButton: HTMLDivElement = this._createNextButtonTemplate();

    images.forEach((item, index) => {
      const slide = this._createMainPhotoTemplate(item, index);
      const thumb = this._createPreviewPhotoTemplate(item, index);

      this._slides[index] = { index, slide, thumb };

      mainContainer.append(slide);
      previewWrapper.append(thumb);
    });

    previewContainer.append(previewWrapper);

    galleryTemplate.append(mainContainer);
    galleryTemplate.append(previewContainer);
    galleryTemplate.append(previousButton);
    galleryTemplate.append(nextButton);

    return galleryTemplate;
  }


  private _createMainPhotoContainerTemplate(): HTMLDivElement {
    const photoMainContainer = document.createElement('div');
    photoMainContainer.className = 'Gallery-Slides';
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
    photoMain.className = 'Gallery-Slide';
    return photoMain;
  }

  private _createPreviewPhotoTemplate(image: string, index: number): HTMLDivElement {
    const photoPreview = document.createElement('div');
    photoPreview.innerHTML = `<img src="${image}" />`
    photoPreview.className = 'Preview';
    photoPreview.onclick = () => this._changeSlide(index);
    return photoPreview;
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
    prevButton.onclick = () => this.prevSlide();
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
    nextButton.onclick = () => this.nextSlide();
    return nextButton;
  }
}

// export const gallery = new Gallery(document.querySelector('.Gallery'), catsData[0].images);

// const myCustomButton = document.querySelector('#myBtn');

// myCustomButton.addEventListener('click', () => gallery.nextSlide());
