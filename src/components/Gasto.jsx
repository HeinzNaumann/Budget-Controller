import React from 'react'
import {
	LeadingActions,
	SwipeableList,
	SwipeableListItem,
	SwipeAction,
	TrailingActions,
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatearFecha } from '../helpers'

import IconoAhorro from '../img/Icono_ahorro.svg'
import IconoCasa from '../img/Icono_casa.svg'
import IconoComida from '../img/Icono_comida.svg'
import IconoGastos from '../img/Icono_gastos.svg'
import IconoOcio from '../img/Icono_ocio.svg'
import IconoSalud from '../img/Icono_salud.svg'
import IconoSuscripciones from '../img/Icono_suscripciones.svg'

const diccionarioIconos = {
	ahorro: IconoAhorro,
	comida: IconoComida,
	ocio: IconoOcio,
	suscripciones: IconoSuscripciones,
	casa: IconoCasa,
	gastos: IconoGastos,
	salud: IconoSalud,
}

const Gasto = ({ gasto, setGastoEditar }) => {
	const { categoria, nombre, cantidad, id, fecha } = gasto

	const leadingActions = () => (
		<LeadingActions>
			<SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
		</LeadingActions>
	)

	const trailingActions = () => (
		<TrailingActions>
			<SwipeAction onClick={() => setGastoEditar(gasto)}>Borrar</SwipeAction>
		</TrailingActions>
	)
	return (
		<SwipeableList>
			<SwipeableListItem
				leadingActions={leadingActions()}
				trailingActions={trailingActions()}
			>
				<div className='gasto sombra '>
					<div className='contenido-gasto'>
						<img src={diccionarioIconos[categoria]} alt='Icono Gasto' />
						<div className='descripcion-gasto'>
							<p className='categoria'>{categoria}</p>
							<p className='nombre-gasto'>{nombre}</p>
							<p className='categoria'>{cantidad}</p>
							<p className='fecha-gasto'>
								Agregrado el {''}
								<span>{formatearFecha(fecha)}</span>
							</p>
						</div>
					</div>
					<p className='cantidad-gasto'>{cantidad}€</p>
				</div>
			</SwipeableListItem>
		</SwipeableList>
	)
}

export default Gasto
