import { useState } from "react";
import Dialog from "./components/Dialog/Dialog";

export default function App() {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState("default");

  const dialogVariants = {
    default: {
      headerProps: {
        icon: "💬",
        title: "Default Dialog",
        buttons: [
          {
            label: "Help",
            onClick: () => alert("Help clicked"),
            color: "secondary",
          },
        ],
      },
      content:
        "This is a simple dialog window. You can customize the header, content, and footer.",
      footerProps: {
        buttons: [
          {
            label: "Cancel",
            onClick: () => setOpen(false),
            color: "secondary",
          },
          {
            label: "Confirm",
            onClick: () => alert("Confirmed!"),
            color: "primary",
          },
        ],
        info: "You can add optional info here.",
      },
    },
    noFooter: {
      headerProps: {
        icon: "🔔",
        title: "No Footer",
        buttons: [
          {
            label: "Close",
            onClick: () => setOpen(false),
            color: "danger",
          },
        ],
      },
      content: "This dialog has no footer buttons.",
      footerProps: {},
    },
    customHeader: {
      headerProps: {
        icon: "⚙️",
        title: "Custom Header",
        buttons: [
          {
            label: "Settings",
            onClick: () => alert("Settings clicked"),
            color: "primary",
          },
          {
            label: "Close",
            onClick: () => setOpen(false),
            color: "danger",
          },
        ],
      },
      content: "Header with multiple buttons.",
      footerProps: {
        buttons: [
          {
            label: "Dismiss",
            onClick: () => setOpen(false),
            color: "secondary",
          },
        ],
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-row gap-4 mb-8">
        <button
          className="px-4 py-2 bg-black text-white rounded shadow font-semibold"
          onClick={() => {
            setVariant("default");
            setOpen(true);
          }}
        >
          Open Default Dialog
        </button>
        <button
          className="px-4 py-2 bg-black text-white rounded shadow font-semibold"
          onClick={() => {
            setVariant("noFooter");
            setOpen(true);
          }}
        >
          Open No Footer
        </button>
        <button
          className="px-4 py-2 bg-black text-white rounded shadow font-semibold"
          onClick={() => {
            setVariant("customHeader");
            setOpen(true);
          }}
        >
          Open Custom Header
        </button>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        {...dialogVariants[variant]}
      />
    </div>
  );
}
