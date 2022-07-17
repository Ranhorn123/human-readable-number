module.exports = function toReadable (number) {
 /*   'zero' 'one'  'two' 'three' 'four' 'five' 'six' 'seven''eight''nine' 'ten' 'eleven''twelve''thirteen''fourteen''fifteen''sixteen''seventeen''eighteen''nineteen''twenty'
  
    return */
 var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
 var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
 var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
 var th = ['','thousand','million', 'billion','trillion'];
    number = number.toString();
    number = number.replace(/[\, ]/g,'');
    if (number != parseFloat(number)) return 'not a number';
    var x = number.indexOf('.');
    if (x == -1)
        x = number.length;
    if (x > 15)
        return 'too big';
    /*if (number=0)    return 'zero';*/
    var n = number.split(''); 
    var str = '';
    var sk = 0;
    for (var i=0;   i < x;  i++) {
        if ((x-i)%3==2) { 
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        } else if (n[i]!=0) { // 0235
            str += dg[n[i]] +' ';
            if ((x-i)%3==0) str += 'hundred ';
            sk=1;
        }
     /*   if ((x-i)%3==1) {
            if (sk)
                str += th[(x-i-1)/3] + ' ';
            sk=0;*/
        if (str==='') str+='zero ';
    }

    if (x != number.length) {
        var y = number.length;
        str += 'point ';
        for (var i=x+1; i<y; i++)
            str += dg[n[i]] +' ';
    }
    s=str.replace(/\s+/g,' ');
    return  s= s.slice(0, -1);
    
}


