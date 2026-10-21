import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Kongo from '../Kongo';

export class NzingaMbande extends Leader {
  static civilization(): typeof Civilization {
    return Kongo;
  }

  name(): string {
    return 'Nzinga Mbande';
  }
}

export default NzingaMbande;
