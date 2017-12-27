import mathHelperService from './mathHelperService';

class ListHelperService {
  static listPrepare(array) {
    let id = 1;
    for (let it = 0; it < array.length; it += 1) {
      const item = array[it];
      item.id = id;
      item.totalItem = mathHelperService.getTotalItem(item.price, item.tax);
      id += 1;
    }

    return array;
  }

  static arrayRemoveId(array) {
    for (let iterator = 0; iterator < array.length; iterator += 1) {
      delete array[iterator].id;
    }
    return array;
  }
}

export default ListHelperService;
