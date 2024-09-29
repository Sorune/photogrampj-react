import React, {useState} from "react";

interface FilterProps {
    filters: string[];
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}

const FilterBS: React.FC<FilterProps> = ({ filters, activeFilter, setActiveFilter }) => {
    const [hoverFilter, setHoverFilter] = useState<string | null>(null);

    return (
        <div className={"grid grid-flow-col w-60"}>
            <ul className={`grid grid-flow-col items-center text-center touch-manipulation gap-4`} id={"imgcell-filters"}>
                {filters.map((filter) => (

                    <li
                        key={filter}
                        className={`cursor-pointer py-2 px-4 rounded-md 
                    ${activeFilter === filter || hoverFilter === filter ? "text-gray-500 font-semibold bg-amber-300" : "text-gray-500"}
                    ${hoverFilter === filter ? "scale-105 duration-300" : ""}
                    `}
                        onClick={
                            () => {
                                setActiveFilter(
                                    filter.toLowerCase() === "all" ? "All" : filter
                                );

                            }
                        }
                        onMouseEnter={() => setHoverFilter(filter)}
                        onMouseLeave={() => setHoverFilter(null)}
                    >
                        {filter}
                    </li>
                ))}
            </ul>

        </div>
    )
};

export default FilterBS;
