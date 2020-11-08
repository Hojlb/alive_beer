import React from "react";
//import sortInputGrounds from "../../../lib/sortInputGrounds";

export default function TGHead () {
	return (
		<thead className='t-g-header t-g-row'>
			<tr>
				<td><h3>№ ИГЭ</h3></td>
				<td><h3>Наименование</h3> </td>
				<td><h3>Удельный вес кН/м3</h3> </td>
				<td><h3>Удельное сцепление (СII), кПа</h3> </td>
				<td><h3>Угол внутреннего трения (fiII), град</h3> </td>
				<td><h3>Модуль деформаций (Е), МПа</h3> </td>
				<td><h3>Мощность слоя, м</h3> </td>
				<td> </td>
			</tr>
		</thead>
	);
}