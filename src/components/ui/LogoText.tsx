'use client';

import React from 'react';

interface LogoTextProps {
     bold?: boolean;
}

function BamBurgers({
     bold = false
}: LogoTextProps) {
     return (
          <span className={bold ? 'font-bold' : ''}><span className='text-primary'>Bam</span><span className='text-secondary'>Burgers</span></span>
     );
}

export default BamBurgers