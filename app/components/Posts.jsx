import Link from 'next/link'

const Posts = () => {
	return (
		<div>
			<p>Recent posts</p>
			<Link href='/posts'>View all</Link>
		</div>
	)
}

export default Posts
