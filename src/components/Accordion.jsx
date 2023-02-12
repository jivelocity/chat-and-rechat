import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className={`flex justify-between p-3 rounded-t border-b border-gray-300 items-center cursor-pointer text-lg font-semibold ${isExpanded ? "text-white bg-blue-500" : "text-dark bg-transparent"}`}
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="bg-blue-500 text-white rounded-b p-5 text-lg shadow-2xl shadow-blue-800/40">{item.content}</div>}
      </div>
    );
  });

  return <div className="xl:w-2/5 w-full rounded-xl">{renderedItems}</div>;
}

export default Accordion;
