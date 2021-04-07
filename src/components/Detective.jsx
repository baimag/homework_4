const { useState } = require("react");

function Detective() {
    const [sherlock, setSherlock] = useState("психопат");
    const handleClick = () => {
        setSherlock("высокоактивный социопат.");
    };
    return (
        <>
            <h2> Шерлок - {sherlock}</h2>
            <button onClick={handleClick}>Узнать праду</button>
        </>
    );
}
export default Detective;