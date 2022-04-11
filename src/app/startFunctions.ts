import { TabsComponent } from "./tabs";
import { catsData } from './catsData';


const tabComponent = new TabsComponent(document.querySelector('.TabsWithGallery'), catsData);
