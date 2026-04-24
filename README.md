# HR Workflow Designer

🚀 **Live Demo**: [tradence-workflow.vercel.app](https://tradence-workflow.vercel.app)

🛠️ **Built with**: React, React Flow, Tailwind CSS, Zustand

---

A professional HR Workflow Designer that lets you visually create, configure, and manage human resources processes using a drag-and-drop canvas.

## ✨ Features

- **Drag & Drop Canvas** — Build workflows by dragging node components from the sidebar onto a React Flow canvas.
- **5 Node Types** — Start, Manual Task, Approval, Automated Action, and End nodes, each with a unique visual identity.
- **Properties Panel** — Select any node to edit its configuration in a dynamic sidebar form (Strategy Pattern).
- **Dynamic Automation Forms** — Selecting an automation (e.g. "Send Email") dynamically renders its required parameter fields.
- **Real-time Sync** — All form changes update the canvas nodes instantly via Zustand.
- **Validation** — Required fields show red borders and inline error messages.
- **Mock API** — Simulated network latency for fetching automation tasks.

## 🏗️ Architecture

```
src/
├── components/
│   ├── canvas/        # WorkflowCanvas, Sidebar
│   ├── forms/         # NodePropertiesPanel + per-node forms (Strategy Pattern)
│   └── nodes/         # BaseNode wrapper + StartNode, TaskNode, etc.
├── hooks/
│   ├── useWorkflowStore.ts   # Zustand store (nodes, edges, CRUD)
│   ├── useNodeProperty.ts    # Controlled form helper
│   └── useMockApi.ts         # Async automation fetcher
├── services/
│   └── mockApi.ts             # Simulated API with sleep()
└── types/
    └── workflow.types.ts      # NodeData, NodeType, AppNode
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

| Layer            | Technology         |
| ---------------- | ------------------ |
| Framework        | React 19 + TypeScript |
| Build Tool       | Vite 8             |
| Styling          | Tailwind CSS 4     |
| State Management | Zustand 5          |
| Flow Engine      | @xyflow/react 12   |
| Icons            | Lucide React       |
| Deployment       | Vercel             |

## 📄 License

MIT
