import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/organisms/header';
import Footer from '@/components/organisms/footer';

export const metadata: Metadata = {
	title: 'GASHI LABO',
	description: 'This is the portfolio website.',
	keywords: ['Next.js', 'React', 'JavaScript'],
};

type Props = {
	children: React.ReactNode;
}

export default function RootLayout({
	children,
}: Props) {
	return (
		<html lang='en'>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
