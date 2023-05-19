import { FC } from 'react';

const Tag: FC<{ title: string }> = ({ title }) => {
  return <span className='tag py-3 px-4 bg-slate-200 text-gray-600 rounded-md font-semibold'>{title}</span>;
};

export default Tag;
