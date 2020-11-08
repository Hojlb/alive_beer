import React from "react";
import {IconContext} from "react-icons";
import {FaPlus} from 'react-icons/fa';

export default function TGHead ({addRowInDB}) {
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
				<td tabIndex="-1" className='t-g-controls'>
					<button
						className='b-add-ground b-no-border'

						onClick={()=>addRowInDB()}>

						<IconContext.Provider
							value={{ color: `green`, className: "global-class-name", size: "2em" }}>
							<FaPlus />
						</IconContext.Provider>

					</button>
				</td>
			</tr>
		</thead>
	);
}