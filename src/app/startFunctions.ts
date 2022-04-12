import { TabsComponent } from "./tabs";
import { catsData } from './catsData';
import { Gallery } from './gallery';

const tabComponent = new TabsComponent(document.querySelector('.TabsWithGallery'), catsData);
const gallery = new Gallery(document.querySelector('.Gallery'), catsData[0].images);
// gallery.hideButton();
