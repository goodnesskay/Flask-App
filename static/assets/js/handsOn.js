/**
 * Created by lekanterragon on 6/29/17.
 */

var
    data1 = [
      ['', 'First Name', 'Last Name', 'Email'],
      ['2012', 10, 11, 12]
    ],
    container1 = document.getElementById('example'),
    settings1 = {
      data: data1
    },
    hot1;

  hot1 = new Handsontable(container1, settings1);
  data1[0][1] = 'First Name'; // change "Kia" to "Ford" programmatically
  hot1.render();
