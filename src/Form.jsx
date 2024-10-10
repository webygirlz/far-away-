import { useState } from "react";
function Form({ onAddItems }) {
  const [description, setDesription] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return null;
    let newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDesription("");
    setQuantity("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => setDesription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
export default Form;
