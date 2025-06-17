export default function DialogIconText({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      {icon && <span className="text-xl">{icon}</span>}
      <span className="font-semibold text-lg">{text}</span>
    </div>
  );
}
