import path from 'path';

import rimraf from 'rimraf';

const deleteSourceMaps = () => {
  rimraf.sync(path.join(__dirname, '../../app/dist/*.js.map'));
  rimraf.sync(path.join(__dirname, '../../app/*.js.map'));
};

export default deleteSourceMaps;
