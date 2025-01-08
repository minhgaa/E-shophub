import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const basicFilters = [
  { id: 1, label: 'Sẵn hàng', icon: '🚴‍♂️', hasDropdown: false },
  { id: 2, label: 'Giá', icon: '💰', hasDropdown: true },
]

const laptopFilters = [
  { id: 3, label: 'Ổ cứng', icon: '💾', hasDropdown: true },
  { id: 4, label: 'Dung lượng RAM', icon: '', hasDropdown: true },
  { id: 5, label: 'CPU', icon: '', hasDropdown: true },
];

const phoneFilters = [
  { id: 6, label: 'Bộ nhớ trong', icon: '💾', hasDropdown: true },
  { id: 7, label: 'Camera', icon: '📷', hasDropdown: true }
]

const FilterBar = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedValues, setSelectedValues] = useState({});
  const [highlightedItem, setHighlightedItem] = useState(null);  // Highlighted item state
  const navigate = useNavigate();
  const [filters, setFilters] = useState(basicFilters.slice());;

  useEffect(() => {
    if (location.pathname.includes("Phone")) {
      setFilters([...basicFilters, ...phoneFilters]);
    } else if (location.pathname.includes("Laptop")) {
      setFilters([...basicFilters, ...laptopFilters]);
    } else {
      setFilters(basicFilters);
    }
  }, [location.pathname]);

  const handleFilterClick = (filterId) => {
    setActiveFilter((prev) => (prev === filterId ? null : filterId));
    setHighlightedItem(null); // Reset highlight when switching filters
  };

  const handleDropdownChange = (filterId, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [filterId]: value,
    }));

    // Build query string with updated filter values
    const queryParams = new URLSearchParams(selectedValues).toString();

    // Update the URL with query params
    navigate({
      pathname: window.location.pathname,
      search: `?${queryParams}`,
    });
  };

  const handleItemHover = (item) => {
    setHighlightedItem(item);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Chọn theo tiêu chí</h3>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <div key={filter.id} className="relative">
            <button
              onClick={() => handleFilterClick(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                activeFilter === filter.id
                  ? 'bg-red-100 text-red-500 border-red-500'
                  : 'bg-white text-gray-700 border-gray-300'
              } shadow-sm hover:bg-gray-50`}
            >
              {filter.icon && <span>{filter.icon}</span>}
              <span>{filter.label}</span>
              {filter.hasDropdown && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {/* Dropdowns */}
            {activeFilter === filter.id && filter.id !== 1 && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 z-10 border border-gray-300 w-60">
                {filter.id === 2 && (
                  <div>
                    <div className="flex justify-between items-center text-gray-700">
                      <span>69.410.000₫</span>
                      <span>194.990.000₫</span>
                    </div>
                    <div className="relative mt-2">
                      <input
                        type="range"
                        min="69410000"
                        max="194990000"
                        className="w-full"
                        onChange={(e) =>
                          handleDropdownChange(filter.id, e.target.value)
                        }
                      />
                    </div>
                    <div className="flex justify-between mt-4">
                      <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg">
                        Đóng
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                        Xem kết quả
                      </button>
                    </div>
                  </div>
                )}
                {filter.id === 3 && (
                  <ul className="space-y-2 text-gray-700">
                    {['256GB', '512GB', '1TB', '2TB'].map((item) => (
                      <li key={item}>
                        <button
                          className={`w-full text-left ${
                            highlightedItem === item ? 'bg-gray-100' : ''
                          }`}
                          onClick={() => handleDropdownChange(filter.id, item)}
                          onMouseEnter={() => handleItemHover(item)}
                          onMouseLeave={() => setHighlightedItem(null)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {filter.id === 4 && (
                  <ul className="space-y-2 text-gray-700">
                    {['4GB', '8GB', '16GB', '32GB'].map((item) => (
                      <li key={item}>
                        <button
                          className={`w-full text-left ${
                            highlightedItem === item ? 'bg-gray-100' : ''
                          }`}
                          onClick={() => handleDropdownChange(filter.id, item)}
                          onMouseEnter={() => handleItemHover(item)}
                          onMouseLeave={() => setHighlightedItem(null)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {filter.id === 5 && (
                  <ul className="space-y-2 text-gray-700">
                    {[
                      'Intel Core i3',
                      'Intel Core i5',
                      'Intel Core i7',
                      'AMD Ryzen 5',
                      'AMD Ryzen 7',
                    ].map((item) => (
                      <li key={item}>
                        <button
                          className={`w-full text-left ${
                            highlightedItem === item ? 'bg-gray-100' : ''
                          }`}
                          onClick={() => handleDropdownChange(filter.id, item)}
                          onMouseEnter={() => handleItemHover(item)}
                          onMouseLeave={() => setHighlightedItem(null)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {filter.id === 6 && (
                  <ul className="space-y-2 text-gray-700">
                    {[
                      '64GB',
                      '128GB',
                      '256GB',
                      '512GB',
                      '1TB'
                    ].map((item) => (
                      <li key={item}>
                        <button
                          className={`w-full text-left ${
                            highlightedItem === item ? 'bg-gray-100' : ''
                          }`}
                          onClick={() => handleDropdownChange(filter.id, item)}
                          onMouseEnter={() => handleItemHover(item)}
                          onMouseLeave={() => setHighlightedItem(null)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {filter.id === 7 && (
                  <ul className="space-y-2 text-gray-700">
                    {[
                      '12 MP',
                      '18 MP',
                      '24 MP',
                      '50 MP',
                      '108 MP',
                    ].map((item) => (
                      <li key={item}>
                        <button
                          className={`w-full text-left ${
                            highlightedItem === item ? 'bg-gray-100' : ''
                          }`}
                          onClick={() => handleDropdownChange(filter.id, item)}
                          onMouseEnter={() => handleItemHover(item)}
                          onMouseLeave={() => setHighlightedItem(null)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
