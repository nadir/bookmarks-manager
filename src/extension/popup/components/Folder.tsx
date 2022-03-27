import React from 'react';
import { NodeModel } from '@minoru/react-dnd-treeview';
import styles from './Folder.module.css';
import { IoCaretDown } from 'react-icons/io5';

export type FileData = {
  fileType: string;
  fileSize: string;
};

type Props = {
  node: NodeModel<FileData>;
  depth: number;
  isOpen: boolean;
  onToggle: (id: NodeModel['id']) => void;
};

export const Folder: React.FC<Props> = (props) => {
  const indent = props.depth * 24;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  return (
    <div
      className={`tree-node ${styles.root}`}
      style={{ paddingInlineStart: indent }}
    >
      <div
        className={`${styles.expandIconWrapper} ${
          props.isOpen ? styles.isOpen : ''
        }`}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            <IoCaretDown />
          </div>
        )}
      </div>
      <div className="icon"></div>
      <div className={styles.labelGridItem}>
        <p>{props.node.text}</p>
      </div>
    </div>
  );
};
