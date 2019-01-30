function Ctime (sec) {
	var hours = ((sec/60)/60).toFixed(0);
	var minutes = ((sec/60)%60).toFixed(0);
	var seconds = sec%60;
	if (hours == 0) return(minutes + 'min ' + seconds + 'sec');
	else if(minutes == 0) return (seconds + 'sec');
	return (hours + 'h ' + minutes + 'min ' + seconds + 'sec');
}

exports.niceTime = Ctime;