import DialogButtonGroup from './DialogButtonGroup';

export default function DialogFooter({ buttons, info }) {
  return (
    <div className="flex flex-col gap-2 px-6 py-4 border-t">
      {info && (
        <span className="text-sm text-gray-500">{info}</span>
      )}
      <div className="flex justify-end">
        <DialogButtonGroup buttons={buttons} />
      </div>
    </div>
  );
}
