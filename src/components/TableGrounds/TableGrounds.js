import React, {useEffect, useState} from "react";
import TGHead from "./components/TGHead";
import TGBody from "./components/TGBody";
import {IconContext} from "react-icons";
import {FaPlus, FaSync} from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const TableGrounds = () => {

	const [groundDB, setGroundDB] = useState([]);

	const addRowInDB = () => {
		const idG = uuidv4();

		setGroundDB( [...groundDB, 	{
				id: idG,
				number: '', //#
				name: '',
				density: undefined, // удельный вес кН/м3
				adhesion: undefined, //коэффициент сцепления кПа
				frictionAngle: undefined, // угол внутреннего трения, градусы
				stiffness: undefined, //модуль деформаций, МПа
				depth: undefined, // мощность слоя, м
				//добавить пористость ?!
			}]
			);
	};

	const deleteGroundFromDB = (idDeleteGround) => {
		setGroundDB(groundDB.filter((item) => item.id !== idDeleteGround));
	};

	const updateGroundInDB = (ground) => {
		let name = Object.keys(ground)[1];
		let value = ground[name];

		setGroundDB(groundDB.map( (item) => item.id === ground.id ?
			{...item, [name]: value} : item)
	);
	};

	useEffect(()=> console.log(groundDB));

	return (
		<form onSubmit={(e)=>{e.preventDefault()}} className='t-g-form'>
				<h2>Характеристики грунтов</h2>

			<table className='t-g-main'>
				<TGHead />
				<TGBody
					groundDB={groundDB}
					updateGroundInDB = {(ground) => updateGroundInDB(ground)}
					deleteGroundFromDB={(idDeleteGround) => deleteGroundFromDB(idDeleteGround)}/>
			</table>

			<div className='t-g-controls'>
				<button
					className='b-add-ground b-no-border'
					onClick={()=>addRowInDB()}>

					<IconContext.Provider
						value={{ color: `green`, className: "global-class-name", size: "2em" }}>
						<FaPlus />
					</IconContext.Provider>

				</button>

				<button
					className='b-add-ground b-no-border'
					onClick={()=>console.log(groundDB) }>

					<IconContext.Provider value={{ color: `yellow`, className: "global-class-name", size: "2em" }}>
						<FaSync />
					</IconContext.Provider>

				</button>
			</div>

		</form>
	);
};

export default TableGrounds;