import { FC } from 'react';

const Tag: FC<{ title: string; imgSrc?: string }> = ({ title, imgSrc }) => {
  return (
    <span className='tag py-3 px-4 bg-slate-200 text-gray-600 rounded-md font-semibold flex flex-col gap-2 items-center justify-center w-24 text-center leading-4'>
      {imgSrc && <img src={'./tech-logos/' + imgSrc} className='w-10' alt={'tag-' + title.toLowerCase()}></img>}
      {title}
    </span>
  );
};

export default Tag;
