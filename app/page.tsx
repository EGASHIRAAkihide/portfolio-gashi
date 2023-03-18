import { profile } from '@/state/profile';
import Image from 'next/image'

export default function Page() {
	const {logo, name, text} = profile

	return (
		<div className='p-4 w-full'>
			<div className='flex gap-4 justify-between w-full'>
				<div className='h-24 relative w-24'>
					<Image
						src={logo}
						alt={name}
						fill
						sizes='100vw'
						style={{borderRadius: '50%'}}
					/>
				</div>
				<div className='flex-1'>
					<h3 className='font-semibold text-sm'>{name}</h3>
					<p className='text-xs'>
						{text}
					</p>
				</div>
			</div>
			main
		</div>
	);
}
