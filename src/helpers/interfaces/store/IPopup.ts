import { WritableDraft } from 'immer/dist/internal';
import { IPopupContentProps } from '../components';

export interface IPopupProps {
  isOpen: boolean;
  popupElement: (props: IPopupContentProps) => JSX.Element | null;
}
