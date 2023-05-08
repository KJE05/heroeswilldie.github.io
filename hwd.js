window.onload = function () {
    var rowCnt = 1;
    var columnCnt = 8;

    document.write('<table border="1">');
    for (let i = 0; i < rowCnt; i++) {
        document.write('<tr>');
            for (let j = 0; j < columnCnt; j++)  {
                var tdId = "hwdLight"+j;
                document.write('<td class="hwd" id='+tdId+'>');
                document.write("");
                document.write('</td>');
            }
        document.write('</tr>')
    }
    document.write('</table>');
    
    var clicktest = document.querySelector("td");
    clicktest.onclick = function (event){
        alert(this.id);
    }
  }
