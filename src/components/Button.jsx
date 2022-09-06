const Button = ({ onClick, children }) => {
    return <button {...{ onClick }}>{children} </button>;
};

export default Button;