export default function App() {
    return (
        <>
    <form className="new-item-form">
        <div className='form-row'>
            <label htmlFor="item">New Item</label>
            <input type="text" id="item" />
        </div>
        <button className='btn'>Add</button>
    </form>
    <h1 className="header">To Do List</h1>
    <ul className="list">
        <li>
            <label>
                <input type="checkbox" id="" />
                Item1
            </label>
            <button className="btn btn-danger"></button> 
        </li>
    </ul>
        </>
    );
}