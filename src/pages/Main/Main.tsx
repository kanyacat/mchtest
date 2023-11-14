import React from 'react'
import styles from './Main.module.scss'

const Main = () => {
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
				<h4>Искать предмет</h4>

				<form className={styles.item}>
					<label>Название</label>
					<input />
					<div>
						<input type='radio' />
						<label>именно такое название</label>
					</div>
					<div>
						<input type='radio' />
						<label>только один тип</label>
					</div>
					<button type='submit'>
						<p>искать</p>
					</button>
				</form>
			</div>
		</div>
	)
}

export default Main
