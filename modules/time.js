var os = require('os');
process.stdin.setEncoding('utf8');


function time(){
	var uptime = os.uptime();
	var hours = Math.floor(uptime / 3600);
	var minutes = Math.floor((uptime - (hours * 3600)) / 60);
  	var seconds = Math.floor(uptime - (hours * 3600) - (minutes * 60));
	console.log('Uptime: '.green +  hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds.');
}

exports.print = time;

//Stwórz moduł, który będzie poprawnie formatował czas. Zależy nam na napisaniu funkcji:
//do przekształcania sekund na minuty - przykładowo, podając 125 sekund wyświetli 2 min. 5 sek.
//sekund na godziny - podając 3700 sekund wyświetli 1 godz. 1 min. 40 sek.
//dodaj moduł do katalogu modules i skorzystaj z niego w module OSinfo do poprawnego formatowania czasu działania systemu
