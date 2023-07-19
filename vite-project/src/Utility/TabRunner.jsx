import Tabs from "../components/Tab";

const TabRunner = () => {
  const tabs = [
    { id: 1, label: "Tab 1", content: "Content for Tab 1" },
    { id: 2, label: "Tab 2", content: "Content for Tab 2" },
    { id: 3, label: "Tab 3", content: "Content for Tab 3" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tabs</h1>
      <Tabs tabs={tabs} />
      <hr className="mt-8" />
    </div>
  );
};

export default TabRunner;
