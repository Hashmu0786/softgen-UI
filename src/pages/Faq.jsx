import React from 'react';
import HelpFaq from '../components/HelpFaq';
import FAQSection from '../components/FAQSection';

function Faq() {
  return (
    <>
    <div className='w-full bg-gray-100'>
    <div className='text-center'>
    <HelpFaq/>
    </div>
    <div>
        <FAQSection/>
    </div>
    </div>
    </>
  );
}

export default Faq;