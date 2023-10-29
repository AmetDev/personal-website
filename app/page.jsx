import Header from './components/Header'
import Title from './components/Title'
import styles from './Home.module.css'
const Home = () => {
	return (
		<main>
			<div className={styles.intro}>
				<div>
					<Header />
				</div>
				<div>
					<Title />
				</div>
			</div>
		</main>
	)
}

export default Home
