import React from "react";
import PropTypes from "prop-types";
import { IconContext } from 'react-icons';
import { FaTrash } from 'react-icons/fa';

// const groundDB = [
// 	{
// 		id: idG,
// 				number: '', //#
// 				name: '',
// 				density: undefined, // удельный вес кН/м3
// 				adhesion: undefined, //коэффициент сцепления кПа
// 				frictionAngle: undefined, // угол внутреннего трения, градусы
// 				stiffness: undefined, //модуль деформаций, МПа
// 				depth: undefined, // мощность слоя, м
// 				//добавить пористость ?!
// 	},
//
// ];

const TGBodyRow = (props) => {
	const {deleteGroundFromDB, groundDB, updateGroundInDB } = props;

	let groundDBKeys = Object.keys(groundDB);

	const handleChange = (e) => {
		updateGroundInDB({
			id: groundDB.id,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<tr className="ground-charact t-g-row">
			{ groundDBKeys.map( (item, index) => {
				for(;;){
					if ( item === 'id' ){
						break;
					} else if ( item === 'name' ){
						return (
							<td key={index}>
							<textarea
								name='name'
								rows="1"
								id='t_input'
								onChange={(e) => handleChange(e) }
								value={groundDB[item]}
								>

							</textarea>
							</td>)
					} else {
						return(
							<td key={index}>
								<input
									name={item}
									type="number"
									onChange={(e) => handleChange(e) }
									value={groundDB[item]}
									/>
							</td>
						)
					}
				}
			})}

			<td>
				<button
					onClick={() => deleteGroundFromDB(groundDB.id) }
					className='b-no-border b-del-ground'>

					<IconContext.Provider
						value={{ color: ``, className: "global-class-name", size: "1.5em" }}>
						<FaTrash/>
					</IconContext.Provider>

				</button>
			</td>
		</tr>
	);
};

TGBodyRow.propTypes = {
	deleteGroundInDB: PropTypes.func,
	groundDB: PropTypes.object,
};

TGBodyRow.defaultProps = {
	groundDB: {},
};

export default TGBodyRow;