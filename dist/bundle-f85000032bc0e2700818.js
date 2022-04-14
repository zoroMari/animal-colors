/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/app/gallery.ts
class Gallery {
    constructor(_root, _catPhotos) {
        this._optionsCount = 5;
        this._slides = {};
        this._root = _root;
        this._catPhotos = _catPhotos;
        this._render();
    }
    nextSlide() {
        var _a;
        this._changeSlide(((_a = this._currentSlide) === null || _a === void 0 ? void 0 : _a.index) + 1);
    }
    prevSlide() {
        var _a;
        this._changeSlide(((_a = this._currentSlide) === null || _a === void 0 ? void 0 : _a.index) - 1);
    }
    _render() {
        this._root.append(this._createGalleryTemplate(this._catPhotos));
        this._changeSlide(0);
    }
    _changeSlide(nextSlideIndex) {
        if (this._currentSlide) {
            this._currentSlide.slide.classList.remove('Gallery-Slide_active');
            this._currentSlide.thumb.classList.remove('Thumb_active');
        }
        const maxIndex = Object.keys(this._slides).length - 1;
        let index = nextSlideIndex;
        if (index < 0)
            index = maxIndex;
        else if (index > maxIndex)
            index = 0;
        this._currentSlide = this._slides[index];
        this._currentSlide.slide.classList.add('Gallery-Slide_active');
        this._currentSlide.thumb.classList.add('Thumb_active');
        this._changeThumbPosition(index);
    }
    _changeThumbPosition(currentIndex) {
        const thumbs = document.querySelector('.Thumbs-Wrapper');
        const middle = Math.floor(this._optionsCount / 2);
        const length = Object.keys(this._slides).length;
        const thumbWidth = this._currentSlide.thumb.offsetWidth;
        const margin = Number.parseFloat(getComputedStyle(this._currentSlide.thumb).marginLeft);
        let index = currentIndex - middle;
        if (length - currentIndex < this._optionsCount - middle)
            index = length - this._optionsCount;
        if (currentIndex < this._optionsCount - middle)
            index = 0;
        thumbs.style.transform = `translateX(-${(index) * (thumbWidth + margin)}px)`;
    }
    _createGalleryTemplate(images) {
        const galleryTemplate = document.createElement('div');
        galleryTemplate.className = 'Gallery';
        const mainContainer = this._createSlidesContainerTemplate();
        const thumbContainer = this._createThumbsPhotoContainerTemplate();
        const thumbWrapper = this._createThumbsWrapperTemplate();
        const previousButton = this._createPreviousButtonTemplate();
        const nextButton = this._createNextButtonTemplate();
        images.forEach((item, index) => {
            const slide = this._createSlideTemplate(item, index);
            const thumb = this._createThumbPhotoTemplate(item, index);
            this._slides[index] = { index, slide, thumb };
            mainContainer.append(slide);
            thumbWrapper.append(thumb);
        });
        thumbContainer.append(thumbWrapper);
        galleryTemplate.append(mainContainer);
        galleryTemplate.append(thumbContainer);
        galleryTemplate.append(previousButton);
        galleryTemplate.append(nextButton);
        return galleryTemplate;
    }
    _createSlidesContainerTemplate() {
        const slidesContainer = document.createElement('div');
        slidesContainer.className = 'Gallery-Slides';
        return slidesContainer;
    }
    _createSlideTemplate(image, id) {
        const slide = document.createElement('div');
        slide.innerHTML = `<img src="${image}"/>`;
        slide.className = 'Gallery-Slide';
        return slide;
    }
    _createThumbsPhotoContainerTemplate() {
        const thumbsContainer = document.createElement('div');
        thumbsContainer.className = 'Thumbs';
        return thumbsContainer;
    }
    _createThumbsWrapperTemplate() {
        const thumbsWrapperTemplate = document.createElement('div');
        thumbsWrapperTemplate.className = 'Thumbs-Wrapper';
        return thumbsWrapperTemplate;
    }
    _createThumbPhotoTemplate(image, index) {
        const thumb = document.createElement('div');
        thumb.innerHTML = `<img src="${image}"/>`;
        thumb.className = 'Thumb';
        thumb.onclick = () => this._changeSlide(index);
        return thumb;
    }
    _createPreviousButtonTemplate() {
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
      </svg>`;
        prevButton.className = 'Arrow Arrow_previous';
        prevButton.onclick = () => this.prevSlide();
        return prevButton;
    }
    _createNextButtonTemplate() {
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
      </svg>`;
        nextButton.className = 'Arrow Arrow_next';
        nextButton.onclick = () => this.nextSlide();
        return nextButton;
    }
}

;// CONCATENATED MODULE: ./src/app/tabs.ts

const URL_PARAM_NAME = 'activeTab';
class TabsComponent {
    constructor(_root, _catsInfo) {
        this._tabMapping = {};
        this._root = _root;
        this._catsInfo = _catsInfo;
        this._tabMapping = this._createTabsMapping();
        this._insertContent();
        this._chooseAndOpenActiveTab();
    }
    _chooseAndOpenActiveTab() {
        var _a, _b;
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        const activeTabId = params.get(URL_PARAM_NAME);
        const tab = this._tabMapping[activeTabId];
        if (activeTabId && tab) {
            this._activeTab = (_a = this._tabMapping[activeTabId]) === null || _a === void 0 ? void 0 : _a.tab;
        }
        else {
            this._activeTab = (_b = this._tabMapping[this._catsInfo[0].id]) === null || _b === void 0 ? void 0 : _b.tab;
        }
        this._activeTab.click();
    }
    _insertContent() {
        const tabsTemplate = this._createTabsContainerTemplate();
        const tabContent = this._createTabContentTemplate();
        Object.values(this._tabMapping).forEach((item) => {
            return tabsTemplate.append(item.tab);
        });
        this._root.appendChild(tabsTemplate);
        this._root.appendChild(tabContent);
    }
    _createTabsMapping() {
        return this._catsInfo.reduce((acc, curr) => {
            return Object.assign(Object.assign({}, acc), { [curr.id]: { tab: this._createTabTemplate(curr) } });
        }, {});
    }
    _createTabContentTemplate() {
        const result = document.createElement('div');
        result.className = 'TabContent';
        return result;
    }
    _createTabsContainerTemplate() {
        const result = document.createElement('div');
        result.className = 'Tabs';
        return result;
    }
    _createTabTemplate(breed) {
        const tab = document.createElement('button');
        tab.innerHTML = `${breed.value}`;
        tab.className = 'Tabs-Tab Tab';
        tab.id = `${breed.id}Tab`;
        tab.onclick = () => {
            this._changeTab(tab);
            this._handleTabOnClick(breed.id);
        };
        return tab;
    }
    _changeUrlWithoutReload(tabId) {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        params.delete(URL_PARAM_NAME);
        params.set(URL_PARAM_NAME, tabId);
        url.search = params;
        window.history.replaceState(null, null, url);
    }
    _handleTabOnClick(catId) {
        const root = document.querySelector('.TabContent');
        root.innerHTML = null;
        this._openGallery(root, catId);
        this._changeUrlWithoutReload(catId);
    }
    _changeTab(button) {
        if (this._activeTab)
            this._activeTab.classList.remove('Tab_active');
        this._activeTab = button;
        this._activeTab.classList.add('Tab_active');
    }
    _openGallery(root, catId) {
        const catImages = this._findAnimalById(catId).images;
        return new Gallery(root, catImages);
    }
    _findAnimalById(animalId) {
        return this._catsInfo.find((item) => item.id === animalId);
    }
}

;// CONCATENATED MODULE: ./src/app/catsData.ts
class Cat {
    constructor({ id, value, images, }) {
        this.id = id;
        this.value = value;
        this.images = images;
    }
}
const catsData = [
    new Cat({
        id: 'bengal',
        value: 'Bengal',
        images: [
            './assets/images/bengal/bengal_01.jpg',
            './assets/images/bengal/bengal_02.jpg',
            './assets/images/bengal/bengal_03.jpg',
            './assets/images/bengal/bengal_04.jpg',
            './assets/images/bengal/bengal_05.jpg',
            './assets/images/bengal/bengal_06.jpg',
            './assets/images/bengal/bengal_07.jpg',
            './assets/images/bengal/bengal_08.jpg',
            './assets/images/bengal/bengal_09.jpg',
            './assets/images/bengal/bengal_10.jpg',
            './assets/images/bengal/bengal_11.jpg',
            './assets/images/bengal/bengal_12.jpg',
        ],
    }),
    new Cat({
        id: 'britishShorthair',
        value: 'British Shorthair',
        images: [
            './assets/images/britishShorthair/britishShorthair_01.jpg',
            './assets/images/britishShorthair/britishShorthair_02.jpg',
            './assets/images/britishShorthair/britishShorthair_03.jpg',
            './assets/images/britishShorthair/britishShorthair_04.jpg',
            './assets/images/britishShorthair/britishShorthair_05.jpg',
        ],
    }),
    new Cat({
        id: 'abyssinian',
        value: 'Abyssinian',
        images: [
            './assets/images/abyssinian/abyssinian_01.jpg',
            './assets/images/abyssinian/abyssinian_02.jpg',
            './assets/images/abyssinian/abyssinian_03.jpg',
            './assets/images/abyssinian/abyssinian_04.jpg',
        ],
    }),
    new Cat({
        id: 'americanShorthair',
        value: 'American Shorthair',
        images: [
            './assets/images/americanShorthair/americanShorthair_01.jpg',
            './assets/images/americanShorthair/americanShorthair_02.jpg',
            './assets/images/americanShorthair/americanShorthair_03.jpg',
            './assets/images/americanShorthair/americanShorthair_04.jpg',
            './assets/images/americanShorthair/americanShorthair_05.jpg',
            './assets/images/americanShorthair/americanShorthair_06.jpg',
            './assets/images/americanShorthair/americanShorthair_07.jpg',
            './assets/images/americanShorthair/americanShorthair_08.jpg',
        ],
    }),
    new Cat({
        id: 'siamese',
        value: 'Siamese',
        images: [
            './assets/images/siamese/siamese_01.jpg',
            './assets/images/siamese/siamese_02.jpg',
            './assets/images/siamese/siamese_03.jpg',
            './assets/images/siamese/siamese_04.jpg',
            './assets/images/siamese/siamese_05.jpg',
        ],
    }),
];

;// CONCATENATED MODULE: ./src/app/startFunctions.ts


const tabComponent = new TabsComponent(document.querySelector('#tabsWithGallery'), catsData);

;// CONCATENATED MODULE: ./src/index.ts





/******/ })()
;