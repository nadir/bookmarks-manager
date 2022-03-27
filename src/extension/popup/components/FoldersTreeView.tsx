import React, { useState } from 'react';
import { Tree, NodeModel } from '@minoru/react-dnd-treeview';
import { FileData } from './Folder';
import { Folder } from './Folder';
import styles from './FoldersTreeView.module.css';
import SampleData from './mockData.json';

function App() {
  const [treeData, setTreeData] = useState<NodeModel[]>(SampleData);
  const handleDrop = (newTree: NodeModel[]) => setTreeData(newTree);

  return (
    <div className={styles.app}>
      <Tree
        tree={treeData}
        rootId={0}
        // @ts-ignore
        render={(node: NodeModel<FileData>, { depth, isOpen, onToggle }) => (
          <Folder
            node={node}
            depth={depth}
            isOpen={isOpen}
            onToggle={onToggle}
          />
        )}
        onDrop={handleDrop}
        classes={{
          root: styles.treeRoot,
          draggingSource: styles.draggingSource,
          dropTarget: styles.dropTarget,
        }}
      />
    </div>
  );
}

export default App;
