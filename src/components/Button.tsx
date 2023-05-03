interface ButtonProps {
    onClick: () => void,
    value: 'X' | 'O' | null,
    winner: string | null,
}

const Button: React.FunctionComponent<ButtonProps> = ({ onClick, value, winner }) => {
    if (!value) {
        return (
            <button className="square" onClick={onClick} disabled={Boolean(winner)}>{value}</button>
        )
    }

    return (
        <button className={`square ${value === 'X' ? 'square-x' : 'square-o'}`} disabled>{value}</button>
    )
}
export default Button;