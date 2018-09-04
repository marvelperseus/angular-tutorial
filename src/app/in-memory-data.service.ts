import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, img:'src/Images/11.png', duty:'CEO', name: 'Kyong Il Kim' },
      { id: 12, img:'src/Images/12.jpeg', duty:'CTO', name: 'Son Gyu kim' },
      { id: 13, img:'src/Images/13.png', duty:'Mobile development Team leader', name: 'ZHang Gyong Nam' },
      { id: 14, img:'src/Images/14.png', duty:'Web development Team leader', name: 'James Lin' },
      { id: 15, img:'src/Images/15.png', duty:'Web developer', name: 'David Lee' },
      { id: 16, img:'src/Images/16.png', duty:'Web developer', name: 'John Smith' },
      { id: 17, img:'src/Images/17.png', duty:'Designer', name: 'Kristyna Vondrouhova' },
      { id: 18, img:'src/Images/18.png', duty:'Mobile developer', name: 'Greg Bauer' },
      { id: 19, img:'src/Images/19.png', duty:'Mobile developer', name: 'Rory Fryer' },
      { id: 20, img:'src/Images/20.png', duty:'Database developer', name: 'Tornado' }
    ];
    return {heroes};
  }
}
