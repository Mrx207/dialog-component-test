import DialogButton from './DialogButton';

export default function DialogButtonGroup({ buttons = [] }) {
  return (
    <div className="flex gap-2">
      {buttons.map((btn, i) => (
        <DialogButton key={i} {...btn} />
      ))}
    </div>
  );
}
