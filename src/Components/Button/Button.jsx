import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

export default function Button({
    text,
    link,
    href,
    target,
    rel,
    onClick,
    onMouseEnter,
    onMouseLeave,
    type = 'button',
    yellow,
    variant = 'primary',
    className = '',
    containerClassName = 'w-full flex justify-center',
    noContainer = false,
    icon = true,
    children,
}){
    const buttonVariant = yellow ? 'yellow' : variant;
    const variantClass = {
        primary: 'button',
        yellow: 'button -bg--yellow -text--grey hover:bg-yellow-500',
        secondary: 'button button-secondary',
    }[buttonVariant] || 'button';

    const mergedClassName = `${variantClass} ${className}`.trim();
    const content = children || (
        <>
            {text}
            {icon && <FaArrowRight className="ml-3 inline-block" />}
        </>
    );

    const commonProps = {
        className: mergedClassName,
        onClick,
        onMouseEnter,
        onMouseLeave,
    };

    const element = href ? (
        <a
            {...commonProps}
            href={href}
            target={target}
            rel={target === '_blank' ? (rel || 'noreferrer') : rel}
        >
            {content}
        </a>
    ) : link ? (
        <Link {...commonProps} to={link}>
            {content}
        </Link>
    ) : (
        <button {...commonProps} type={type}>
            {content}
        </button>
    );

    if (noContainer) return element;

    return <div className={containerClassName}>{element}</div>;
}