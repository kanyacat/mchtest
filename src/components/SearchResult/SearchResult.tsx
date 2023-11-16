import styles from './SearchResult.module.scss'

const SearchResult = () => {
	return (
		<div className={styles.result}>
			<div className={styles.item}>
				<p className={styles.itemText}>Ищем:</p>
				<img src='http://polochka.moy.su/_sf/46/4649.gif' alt='Свеччик' />
				<p className={styles.itemName}>Свеччик</p>
			</div>

			<div className={styles.stores}>
				<h2>Личные магазины</h2>

				<div className={styles.storesTable}>
					<table border='1'>
						<thead>
							<tr>
								<th>
									<p>Название</p>
									<i>жми, чтобы перейти в магазин</i>
								</th>
								<th>
									<p>Хозяин</p>
									<i>жми, чтобы перейти в профиль</i>
								</th>
								<th>Кол-во</th>
								<th>
									<p>Цена</p>
									<i>жми, чтобы купить</i>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Свеччик</td>
								<td>kancat</td>
								<td>1</td>
								<td>50 000</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default SearchResult
