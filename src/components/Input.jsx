export default function Input({onChange, value, id, type}) {
    return (
        <input
            className="input-style form-control"
            id={id}
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}