import Items from "./Items";
function PackingList({ items, onDeleteItem, onUpdateItem }) {
  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: true },
  //   { id: 2, description: "Socks", quantity: 12, packed: false },
  // ];

  return (
    <div className="list">
      <ul>
        {items?.map((item) => (
          <Items
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
          // first item name of the component //second item is for props and third is for obj
        ))}
      </ul>
      {/* <ul>
        {initialItems.map((item) => (
          <Items item={item} key={item.id} />
          // first item name of the component //second item is for props and third is for obj
        ))}
      </ul> */}
    </div>
  );
}
export default PackingList;
