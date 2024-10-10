import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: true },
  //   { id: 2, description: "Socks", quantity: 12, packed: false },
  // ];

  const [items, setItems] = useState([]);
  console.log(items);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelUpdateItem(id) {
    setItems((items) => {
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );
    });
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handelUpdateItem}
      />
      <Stats />
    </div>
  );
}

export default App;
