import styles from './Stores.module.scss'

const Stores = () => {
	return (
		<div className={styles.root}>
			<h2>Личные магазины</h2>

			<div className={styles.rootTable}>
				<div className={styles.border}>
					<table>
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
								<th>кол-во</th>
								<th>
									<p>цена</p>
									<i>жми, чтобы купить</i>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Свеччик</td>
								<td>kancat</td>
								<td>1</td>
								<td className={styles.price}>
									<span className={styles.priceNum}>
										49 998
										<img
											src='https://s3-alpha-sig.figma.com/img/d420/837c/b0d85e89e03259573abe526d32efad92?Expires=1701043200&Signature=STLOkIpQukW~xZv3NwmJ78G8KhFkMc7FQd8A-SJTOp9CzABCIfpVV0~aMtp6VxEM2K2Wc12hEtM0FN3pAsazYumDnxePZHRu4peSE4-c0N8sYnDoJmwq2164bHDA2mohsKmyHH~YytbHXU8Qqf0umvH-Du5kBQ5pUcojWHm1-~209lOS8hxNCwVU-CI7kF3wJKpz3pT1B4PDC~V5OruSVx-6XHeTdw5OLsRzvJei0lxs44SOeyPPyXpRmQ6CUcNfJOEWRfKtNaLG8ZDQJKRXWrLqqomihP-2eG9FRICpB6EegNOkMAHNbjTGBgfNGT3DIdNoz-v5HvxTgeVOh7n1IA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
											alt=''
										/>
									</span>
								</td>
							</tr>
							<tr>
								<td>Свеччик</td>
								<td>Military</td>
								<td>5</td>
								<td className={styles.price}>
									<span className={styles.priceNum}>
										49 999
										<img
											src='https://s3-alpha-sig.figma.com/img/d420/837c/b0d85e89e03259573abe526d32efad92?Expires=1701043200&Signature=STLOkIpQukW~xZv3NwmJ78G8KhFkMc7FQd8A-SJTOp9CzABCIfpVV0~aMtp6VxEM2K2Wc12hEtM0FN3pAsazYumDnxePZHRu4peSE4-c0N8sYnDoJmwq2164bHDA2mohsKmyHH~YytbHXU8Qqf0umvH-Du5kBQ5pUcojWHm1-~209lOS8hxNCwVU-CI7kF3wJKpz3pT1B4PDC~V5OruSVx-6XHeTdw5OLsRzvJei0lxs44SOeyPPyXpRmQ6CUcNfJOEWRfKtNaLG8ZDQJKRXWrLqqomihP-2eG9FRICpB6EegNOkMAHNbjTGBgfNGT3DIdNoz-v5HvxTgeVOh7n1IA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
											alt=''
										/>
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Stores
