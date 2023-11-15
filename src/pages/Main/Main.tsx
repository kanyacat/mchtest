import { useState } from 'react'
import styles from './Main.module.scss'

const Main = () => {
	const [checkedName, setCheckedName] = useState(false)
	const [checkedType, setCheckedType] = useState(false)

	function changeCheckboxName() {
		setCheckedName(!checkedName)
	}

	function changeCheckboxType() {
		setCheckedType(!checkedType)
	}

	return (
		<div className={styles.root}>
			<div className={styles.main}>
				<div className={styles.head}>
					<div className={styles.info}>
						<h3>Карайкош Шоппер поможет с покупками</h3>
						<p>
							Здесь ты можешь поискать предметы, продаваемые игроками в личных
							магазинах. Введи в поле справа полное или частичное название
							искомого предмета, и увидишь у кого и почём его можно купить!
						</p>
					</div>
					<img
						src='https://mircharik.moy.su/karaikosh/keeper_search.png'
						alt='Карайкош Шоппер'
					/>
				</div>
			</div>

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
		</div>
	)
}

export default Main
