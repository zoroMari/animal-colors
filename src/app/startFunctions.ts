import { TabsComponent } from "./tabs";
import { catsData } from './catsData';
import { Gallery } from './gallery';

const tabComponent = new TabsComponent(document.querySelector('#tabsWithGallery'), catsData);
// const gallery = new Gallery(document.querySelector('.Gallery'), catsData[0].images);
// gallery.hideButton();
