import styles from './SearchResult.module.scss'
import Stores from './Stores/Stores'
import Auction from './Auction/Auction'

const SearchResult = () => {
	return (
		<div className={styles.result}>
			<div className={styles.item}>
				<p className={styles.itemText}>Ищем:</p>
				<img src='http://polochka.moy.su/_sf/46/4649.gif' alt='Свеччик' />
				<p className={styles.itemName}>Свеччик</p>
			</div>
			<Stores />
			<Auction />
		</div>
	)
}

export default SearchResult
