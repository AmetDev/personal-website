import styles from './Title.module.css'
const Title = () => {
	return (
		<div className={styles.out_intro}>
			<div className={styles.title_wrapper}>
				<p className={styles.title}>Hi, I am Amet, Web Developer</p>
				<span className={styles.subtitle}>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.
				</span>
				<button className={styles.red_btn}>
					<span className={styles.txt_btn}>Download Resume</span>
				</button>
			</div>
			<div className={styles.circle}></div>
		</div>
	)
}

export default Title
