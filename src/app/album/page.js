import Image from 'next/image';
import React from 'react'
import nextLogo from '@/assets/next-js-logo.png'
const AlbumPage = () => {
    return (
        <div>
            <h1>This is Image Component</h1>
            <Image src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png" alt='Next Logo' width={500} height={500}/>
            <Image src={nextLogo} alt='Next Logo' width={500} height={500}/>
        </div>
    );
};

export default AlbumPage;