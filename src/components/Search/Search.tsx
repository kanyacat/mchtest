import { useState } from 'react'
import styles from './Search.module.scss'

const Search = () => {
	const [checkedName, setCheckedName] = useState(false)
	const [checkedType, setCheckedType] = useState(false)

	function changeCheckboxName() {
		setCheckedName(!checkedName)
	}

	function changeCheckboxType() {
		setCheckedType(!checkedType)
	}

	return (
		<div className={styles.search}>
			<h4>Искать предмет [?]</h4>
			<div className={styles.searchWrapper}>
				<form className={styles.form}>
					<label className={styles.formTitle}>Название</label>
					<input />
					<div className={styles.input}>
						<input
							type='checkbox'
							name='name'
							id='name'
							checked={checkedName}
							onChange={changeCheckboxName}
						/>
						<label for='name' className={styles.label}>
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
						<label for='type' className={styles.label}>
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

			<button className={styles.reset}>
				<p>сбросить</p>
			</button>
		</div>
	)
}

export default Search
