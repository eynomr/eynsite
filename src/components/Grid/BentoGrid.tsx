import { cn } from '../../utils/cn';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-7 gap-200 px-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-lg group/bento hover:shadow-xl transition duration-200 shadow-input p-200 lg:p-400 border border-neutral-85 justify-between flex flex-col space-y-200 lg:space-y-300",
        className
      )}
    >
      {children}
      <div className="group-hover/bento:translate-x-100 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-10 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-50 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
