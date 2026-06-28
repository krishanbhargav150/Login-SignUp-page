function Button ({
    children,
    type = 'button',
    onClick,
    disabled
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;