export default function Request({sendReq,data}){
    return (
        <>
        <h1>{data}</h1>
        <button onClick={sendReq}>Click me</button>
        </>
    )
}