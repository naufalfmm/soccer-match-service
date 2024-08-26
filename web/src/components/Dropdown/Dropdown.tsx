import { FC, useEffect, useRef, useState } from "react";
import { ReactComponent as ExpandMoreIcon } from "../../assets/svg/expandmore.svg";
import styles from "./Dropdown.module.css";

interface DropdownItem {
    id: string | number;
    name: string;
}

interface DropdownProps {
    id: string;
    label?: string;
    items: DropdownItem[];
    onSelect?: (id: string | number) => void;
}

const Dropdown: FC<DropdownProps> = ({
    id,
    label = "Select",
    items,
    onSelect = undefined
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null)

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (ev: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(ev.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [dropdownRef])

    const itemChangingHandler = (item: DropdownItem) => {
        setSelectedItem(item!)
        onSelect && onSelect(item.id)
        setIsOpen(false)
    }

    return (
        <div ref={dropdownRef}>
            <button
                id={id}
                aria-label="toggle-dropdown"
                aria-haspopup="true"
                aria-expanded={isOpen}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={styles.dropdown__button}
            >
                <span className={styles.dropdown__button__text}>{selectedItem?.name || label}</span>
                <ExpandMoreIcon className={[styles.dropdown__button__expand, isOpen ? styles.dropdown__button__expand__open : ""].join(" ")} />
            </button>
            {isOpen && (
                <div aria-label="dropdown-menu" className={styles.dropdown__menu}>
                    <ul
                        role="menu"
                        aria-labelledby={id}
                        aria-orientation="vertical"
                        className={styles.dropdown__items}
                    >
                        {items.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => itemChangingHandler(item)}
                                className={styles.dropdown__item}
                            >
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Dropdown;
export type {DropdownItem}