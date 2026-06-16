'use client';

import React from 'react';

interface LogoText {
     bold: boolean;
     [key: string]: any;
}

function LogoText({
     bold
}: LogoText) {<>
     <span className={bold ? 'font-bold' : ''}><span className='text-primary'>Bam</span><span className='text-secondary'>Burgers</span></span>
</>};

export default LogoText