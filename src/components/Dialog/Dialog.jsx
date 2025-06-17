import DialogHeader from "./DialogHeader";
import DialogContent from "./DialogContent";
import DialogFooter from "./DialogFooter";

export default function Dialog({
  open,
  onClose,
  headerProps,
  content,
  footerProps,
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <DialogHeader {...headerProps} />
        <DialogContent>{content}</DialogContent>
        <DialogFooter {...footerProps} />
      </div>
    </div>
  );
}
