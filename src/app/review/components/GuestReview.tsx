'use client'

import React from 'react';
import Review from '../../../components/ui/Review';

interface GuestReview {
  naam: string;
  review: number;
  plaats: string;
  tekst: string;
}

interface ReviewProps {
  review: GuestReview;
}

export default function ViewGuestReview({ review }: ReviewProps) {
  return (
    <div className='review opacity-100 reveal-up'>
        <div className='flex justify-between pb-2'>
            <div className='block'>
                <p className='font-black text-primary text-lg'>{review.naam}</p>
                <p className='font-semibold text-secondary text-xs ml-2'>&mdash; {review.plaats}</p>
            </div>
            <Review rating={review.review} max={5} color='text-accent' width='30' height='auto' className='justify-0' showRemaining={false} />
        </div>
        <p className=''>{review.tekst}</p>
    </div>
  );
}

export type { GuestReview };