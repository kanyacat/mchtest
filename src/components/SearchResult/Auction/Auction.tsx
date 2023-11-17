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
										<b>Редкость</b>: Особый
									</span>
								</div>
							</div>
						</div>
						<div className={styles.price}>10 000</div>
						<div className={styles.trade}>
							<form action='submit'>
								<input type='text' />
								<button type='submit'>предложить</button>
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
