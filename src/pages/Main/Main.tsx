import styles from './Main.module.scss'
import Search from '../../components/Search/Search'
import SearchResult from '../../components/SearchResult/SearchResult'

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
				<SearchResult />
			</div>
			<Search />
		</div>
	)
}

export default Main
