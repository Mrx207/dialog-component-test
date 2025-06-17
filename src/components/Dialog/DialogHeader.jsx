import DialogButtonGroup from './DialogButtonGroup';
import DialogIconText from './DialogIconText';

export default function DialogHeader({ icon, title, buttons }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <DialogIconText icon={icon} text={title} />
      <DialogButtonGroup buttons={buttons} />
    </div>
  );
}
