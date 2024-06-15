// components/Accordion.tsx
"use client"; // Add this line

import { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultipleOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultipleOpen = false }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div
            className={styles.title}
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <span>{openIndexes.includes(index) ? '-' : '+'}</span>
          </div>
          <div
            className={`${styles.content} ${
              openIndexes.includes(index) ? styles.open : ''
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
