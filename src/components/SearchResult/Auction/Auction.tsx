import styles from './Auction.module.scss'

const Auction = () => {
	return (
		<div className={styles.root}>
			<h2>Аукцион</h2>

			<div className={styles.rootAuction}>
				<div className={styles.lot}>
					<div className={styles.left}>
						<div className={styles.item}>
							<div className={styles.img}>
								<img
									src='http://polochka.moy.su/_sf/46/4649.gif'
									alt='Свеччик'
								/>
							</div>
							<div className={styles.info}>
								<h2 className={styles.strong}>Свеччик</h2>
								<p className={styles.subtext}>
									При необходимости это малыш не только развеселит тебя, но и
									осветит путь, и даже поможет согреться.
								</p>
								<div className={styles.bottom}>
									<span className={styles.subtext}>
										<b>Тип</b>: Нямочка
									</span>
									<span className={styles.subtext}>
										<b> Редкость</b>: Особый
									</span>
								</div>
							</div>
						</div>
						<div className={styles.price}>
							<span className={styles.priceNum}>
								10 000
								<img
									src='https://s3-alpha-sig.figma.com/img/d420/837c/b0d85e89e03259573abe526d32efad92?Expires=1701043200&Signature=STLOkIpQukW~xZv3NwmJ78G8KhFkMc7FQd8A-SJTOp9CzABCIfpVV0~aMtp6VxEM2K2Wc12hEtM0FN3pAsazYumDnxePZHRu4peSE4-c0N8sYnDoJmwq2164bHDA2mohsKmyHH~YytbHXU8Qqf0umvH-Du5kBQ5pUcojWHm1-~209lOS8hxNCwVU-CI7kF3wJKpz3pT1B4PDC~V5OruSVx-6XHeTdw5OLsRzvJei0lxs44SOeyPPyXpRmQ6CUcNfJOEWRfKtNaLG8ZDQJKRXWrLqqomihP-2eG9FRICpB6EegNOkMAHNbjTGBgfNGT3DIdNoz-v5HvxTgeVOh7n1IA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
									alt=''
								/>
							</span>
						</div>
						<div className={styles.trade}>
							<form action='submit'>
								<input type='text' className={styles.input} />
								<button type='submit' className={styles.btn}>
									предложить
								</button>
							</form>
						</div>
					</div>
					<div className={styles.right}>
						<p className={styles.subtext}>создатель</p>
						<h2 className={styles.strong}>WolverineTuc</h2>
						<p className={styles.subtext}>открыт</p>
						<p className={styles.date}>2023-11-17/16:11</p>
						<p className={styles.subtext}>до</p>
						<p className={styles.date}>2023-11-18/16:11</p>
						<p className={styles.subtext}>номер ставки</p>
						<h2 className={styles.strong}>0</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Auction
