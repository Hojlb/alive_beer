import React from "react";
import TGBodyRow from "./TGBodyRow";
import PropTypes from 'prop-types';


const TGBody = ({groundDB, deleteGroundFromDB, updateGroundInDB }) => {
	return (
		<tbody className='t-g-body'>
			{groundDB.map((item, i) =>
				<TGBodyRow
					groundDB={item}
					deleteGroundFromDB={(idDeleteGround)=>deleteGroundFromDB(idDeleteGround)}
					key={i}
					updateGroundInDB={(ground)=>updateGroundInDB(ground)}
				/>)}
		</tbody>
	);
};

TGBody.propTypes = {
	deleteGroundInDB: PropTypes.func,
	groundDB: PropTypes.array,
};

TGBody.defaultProps = {
	groundDB: [],
};

export default TGBody;