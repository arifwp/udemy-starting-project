export default function TabButton({ children, clicked }) {
    return <li>
        <button onClick={clicked}>
            {children}
        </button>
    </li>
}