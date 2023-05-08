window.onload = function () {
    var rowCnt = 1;
    var columnCnt = 8;

    document.write('<table border="1">');
    for (let i = 0; i < rowCnt; i++) {
        var trId = "hwdLight"+i;
        document.write('<tr class="hwd" id=trId>');
            for (let j = 0; j < columnCnt; j++)  {
                document.write('<td>');
                document.write(i + ", " + j);
                document.write('</td>');
            }
        document.write('</tr>')
    }
    document.write('</table>');
  }
