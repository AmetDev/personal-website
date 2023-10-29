import Link from 'next/link'
import styles from './Header.module.css'
const Header = () => {
	return (
		<header className={styles.header_wrapper}>
			<ul>
				<Link href='/works' className={styles.header_list}>
					Works
				</Link>
				<Link href='blog' className={styles.header_list}>
					Blog
				</Link>
				<Link href='/contact' className={styles.header_list}>
					Contact
				</Link>
			</ul>
		</header>
	)
}

export default Header
