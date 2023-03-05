import Link from 'next/link';

export default function Page() {
	return (
		<div>
			<Link href='/#'>home</Link>
			<Link href='/about'>about</Link>
			<div>
				<a href='https://github.com/EGASHIRAAkihide' target='_blank' rel="noopener noreferrer">GitHub</a>
				<a href='https://www.linkedin.com/in/akihide-egashira-107070224/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
				<a href='https://www.instagram.com/gashi_japan/' target='_blank' rel="noopener noreferrer">Instagram</a>
			</div>
		</div>
	);
}
