import { FC, ReactNode, useMemo } from 'react';

const Section: FC<{ title: string; description: string; children?: ReactNode; id: string; className?: string }> = ({
  title,
  description,
  children,
  id,
  className,
}) => {
  const classNames = useMemo(
    () => (className ? `px-5 sm:px-12 py-28 max-w-7xl m-auto ${className}` : 'px-5 sm:px-12 py-28 max-w-7xl m-auto'),
    [className]
  );

  return (
    <section className={classNames} id={id}>
      <div className='section__heading pb-28 flex flex-col items-center text-center'>
        <h2 className="relative mb-12 after:content-[''] after:block after:w-14 after:h-1.5 after:rounded-md after:bg-primary after:mt-5 after:absolute after:left-16">
          {title}
        </h2>
        <p className='max-w-xl leading-8'>{description}</p>
      </div>
      {children}
    </section>
  );
};

export default Section;
