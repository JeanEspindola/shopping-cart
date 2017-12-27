/*
* List Helper Service:
*
* Helper class used to transform and adjust the list data.
*
* */
import mathHelperService from './mathHelperService';

class ListHelperService {
  /*
  * The mock data is not coming with id and total values calculated.
  * Here I get the array of objects, iterate over them and add a new entry for the
  * id (used in a lot of places), and add another entry for the totalItem value (price + tax).
  * This function is called when I load the page, when the list gets an item removed (there
  * is the need to reevaluate the ids to display them correctly in the view).
  * */
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
}

export default ListHelperService;
