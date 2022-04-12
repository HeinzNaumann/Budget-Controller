import { useState, useEffect } from 'react'

const Filter = ({ filtro, setFiltro }) => {
	return (
		<div className='filtros sombra contenedor'>
			<form>
				<div className='campo'>
					<label>Filtrar Gasto</label>
					<select value={filtro} onChange={e => setFiltro(e.target.value)}>
						<option value=''>-- Seleccione --</option>
						<option value='ahorro'>Ahorro </option>
						<option value='comida'>Comida </option>
						<option value='ocio'>Ocio </option>
						<option value='suscripciones'>Suscripciones </option>
						<option value='casa'>Casa</option>
						<option value='gastos'>Gastos </option>
						<option value='salud'>Salud </option>
					</select>
				</div>
			</form>
		</div>
	)
}

export default Filter
