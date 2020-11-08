// let groundCells = document.querySelectorAll('.ground_charact input');
// const tInput = document.getElementById('t_input');
// const tOutput = document.getElementById('t_output');
// const tGroundChar = document.getElementById('tGrChar');

// let groundDB = [
// 	{
// 		number: , //#
// 		name:,
// 		density: , // удельный вес кН/м3
// 		adhesion: , //коэффициент сцепления кПа
// 		frictionAngle: , // угол внутреннего трения, градусы
// 		stiffness: , //модуль деформаций, МПа
// 		//добавить пористость ?!
// 	},
// ];

export default function sortInputGrounds (str) {
	let val = str.trim().split('\n');
	let res = val.map((itm, i) => itm.split('\t'));
	res = res.map((itm, i) => itm.filter( (itm, i) =>
	itm !== ''));
	res =  [].concat.apply([], [...res]);
	console.log(res);
	return res;
}