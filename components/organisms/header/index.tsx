'use client';

import { iconList } from '@/state/icon-list';
import { navList } from '@/state/nav-list';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
	const [toggle, setToggle] = useState(false);

	return (
		<header className='border-b flex h-20 items-center justify-between relative'>
			<div className='bg-white flex h-full items-center justify-between p-4 w-full z-20'>
				<div>GASHI LABO</div>
				<button className='underline' onClick={() => setToggle(!toggle)}>
					{toggle ? 'CLOSE' : 'MENU'}
				</button>
			</div>
			<nav
				className={`${
					toggle
						? 'animate-navFadeIn top-[80px]'
						: 'animate-navFadeOut top-[-300px]'
				} absolute left-0 w-full z-10`}
			>
				<ul className='bg-white'>
					{navList.map((item, index) => (
						<li className='border-b border-slate-100 p-4' key={index}>
							<Link href={item.href}>{item.text}</Link>
						</li>
					))}
				</ul>
				<ul className='bg-white border-b border-slate-100 flex gap-4 p-4'>
					{iconList.map((item, index) => (
						<li key={index}>
							<a href={item.href} rel='noopener noreferer' target='_blank'>
								{item.icon}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
