import { TabsComponent } from "./tabsTemplate";
import { catsData } from './catsData';


const tabComponent = new TabsComponent(document.querySelector('.Breeds'), catsData);
tabComponent.insertTab();


