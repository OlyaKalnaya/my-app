export function Topics({ obj }) {

    return (
        <li>
            <a href={obj.href}>{obj.title}</a>
        </li>
    )

}