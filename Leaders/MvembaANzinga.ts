import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Kongo from '../Kongo';

export class MvembaANzinga extends Leader {
  static civilization(): typeof Civilization {
    return Kongo;
  }

  name(): string {
    return 'Mvemba a Nzinga';
  }
}

export default MvembaANzinga;
