import React from 'react'
import cn from 'clsx'
import styles from '../ExerciseLog.module.scss'

const TableRow = () => {
	return (<div className={cn(styles.row, {
			[styles.completed]: item.isCompleted
		})}
							 key={`time ${index}`}>
			<div className={styles.opacity} key={`Prev ${index}/${item.prevWeight}`}>
				<input type='number' defaultValue={item.prevWeight} disabled />
				<i>kg{item.isCompleted && ' '}/</i>
				<input type='number' defaultValue={item.prevRepeat} disabled />
				<div key={`RepeatWeight ${index}/${item.weight}`}>
					<input type='tel' pattern='[0-9]*'
								 defaultValue={item.weight} disabled={item.isCompleted} />
					<i>kg{item.isCompleted && ' '}/</i>
					<input type='number' defaultValue={item.repeat} disabled={item.isCompleted} />
				</div>
				<div key={`Completed ${index}/${item.isCompleted}`}>
					<img src={item.isCompleted ? '/images/exercises/check-completed.svg' : '/images/exercises/check.svg'}
							 className={styles.checkbox} alt=''
							 onClick={() => changeState({
								 timeIndex: index, key: 'isCompleted', value: !item.isCompleted
							 })} />

				</div>
			</div>
		</div>)
	export default TableRow