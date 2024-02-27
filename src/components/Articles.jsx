export function Articles ({ data }){

    return (
        <>
        {data.map((obj,idx) =>
        <section key={idx}>
            <h2>{obj.title}</h2>
            <div><p>{obj.body}</p></div>
        </section>
        )}
        </>
    )

}