window.onload = function () {
    var rowCnt = 8;
    var columnCnt = 1;

    document.write('<table id="hwd" border="1">');
    for (let i = 0; i < rowCnt; i++) {
        document.write('<tr>');
            for (let j = 0; j < columnCnt; j++)  {
                document.write('<td>');
                document.write(i + ", " + j);
                document.write('</td>');
            }
        document.write('</tr>')
    }
    document.write('</table>');

    var hw = document.getElementById('hw');
    hw.addEventListener('click', function () {
      alert('Hello world');
    })
  }