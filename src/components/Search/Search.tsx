import { ChangeEvent, useEffect, useState } from 'react'
import styles from './Search.module.scss'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../redux/search/slice'

const Search = () => {
	const dispatch = useDispatch()

	const [checkedName, setCheckedName] = useState(false)
	const [checkedType, setCheckedType] = useState(false)

	const [itemInputValue, setItemInputValue] = useState('')

	function changeCheckboxName() {
		setCheckedName(!checkedName)
	}

	function changeCheckboxType() {
		setCheckedType(!checkedType)
	}

	const onSubmit = event => {
		event.preventDefault()
		dispatch(setSearchValue(itemInputValue))
	}

	const onClickClear = () => {
		setItemInputValue('')
		dispatch(setSearchValue(''))
	}

	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setItemInputValue(event.target.value)
	}

	useEffect(() => {
		dispatch(setSearchValue(''))
	}, [window.location])

	return (
		<div className={styles.search}>
			<a className={styles.faq}>[?]</a>
			<h4>Искать предмет</h4>
			<div className={styles.searchWrapper}>
				<form className={styles.form} onSubmit={onSubmit}>
					<label className={styles.formTitle}>Название</label>
					<input
						type='text'
						value={itemInputValue}
						onChange={event => onChangeInput(event)}
					/>
					<div className={styles.input}>
						<input
							type='checkbox'
							name='name'
							id='name'
							checked={checkedName}
							onChange={changeCheckboxName}
						/>
						<label htmlFor='name' className={styles.label}>
							именно такое название
						</label>
					</div>
					<div className={styles.input}>
						<input
							type='checkbox'
							name='type'
							id='type'
							checked={checkedType}
							onChange={changeCheckboxType}
						/>
						<label htmlFor='type' className={styles.label}>
							только один тип
						</label>
					</div>
					<button type='submit'>
						<p>искать</p>
					</button>
				</form>
			</div>

			<h4>Искать игрока</h4>
			<div className={styles.searchWrapper}>
				<form className={styles.form}>
					<label className={styles.formTitle}>Имя</label>
					<input />
					<button type='submit'>
						<p>искать</p>
					</button>
				</form>
				<form className={styles.form}>
					<label className={styles.formTitle}>Предмет в вишлисте</label>
					<input />
					<button type='submit'>
						<p>искать</p>
					</button>
				</form>
			</div>

			<button className={styles.reset} onClick={onClickClear}>
				<p>сбросить</p>
			</button>
		</div>
	)
}

export default Search
