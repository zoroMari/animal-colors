import { TabsComponent } from "./tabs";
import { catsData } from './catsData';
import { Gallery } from './gallery';


const tabComponent = new TabsComponent(document.querySelector('#tabsWithGallery'), catsData);
//

// const root = document.querySelector('#tabsWithGallery');
// const btn = document.getElementById('btn');
// const gallery = new Gallery(root, catsData[0].images);
// btn.onclick = () => gallery.nextSlide();
