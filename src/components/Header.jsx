import React from 'react'
import ControlPrespuesto from './ControlPrespuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({
	gastos,
	presupuesto,
	setPresupuesto,
	isValidPresupuesto,
	setIsValidPresupuesto,
	setGastos,
}) => {
	return (
		<>
			<header>
				<h1>Planificador de gastos</h1>
				{isValidPresupuesto ? (
					<ControlPrespuesto
						presupuesto={presupuesto}
						gastos={gastos}
						setGastos={setGastos}
						setPresupuesto={setPresupuesto}
						setIsValidPresupuesto={setIsValidPresupuesto}
					/>
				) : (
					<NuevoPresupuesto
						presupuesto={presupuesto}
						setPresupuesto={setPresupuesto}
						setIsValidPresupuesto={setIsValidPresupuesto}
					/>
				)}
			</header>
		</>
	)
}

export default Header
