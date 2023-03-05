import Link from 'next/link';

export default function Page() {
	return (
		<div>
			<Link href='/#'>home</Link>
			<Link href='/about'>about</Link>
			<div className="flex flex-col">
				<h2 className='font-bold text-xl'>Accounts</h2>
				<a href='https://github.com/EGASHIRAAkihide' target='_blank' rel="noopener noreferrer">GitHub</a>
				<a href='https://www.linkedin.com/in/akihide-egashira-107070224/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
				<a href='https://www.instagram.com/gashi_japan/' target='_blank' rel="noopener noreferrer">Instagram</a>
			</div>
			<div className="flex flex-col">
				<h2 className='font-bold text-xl'>Profile</h2>
				<div>introduction</div>
			</div>
		</div>
	);
}
