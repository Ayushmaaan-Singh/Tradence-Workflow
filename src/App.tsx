import { ReactFlowProvider } from '@xyflow/react';
import { WorkflowCanvas } from './components/canvas/WorkflowCanvas';
import { Sidebar } from './components/canvas/Sidebar';
import { NodePropertiesPanel } from './components/forms';

function App() {
  return (
    <div className="h-screen w-screen flex bg-slate-50 overflow-hidden font-sans relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-50 opacity-80 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0 pointer-events-none" />
      <ReactFlowProvider>
        <Sidebar />
        <WorkflowCanvas />
        <NodePropertiesPanel />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
