import { Modal } from 'antd';
import NiceModal, { useModal } from '@ebay/nice-modal-react';


const PortfolioItemModal = NiceModal.create(({ title, longDescription }) => {
  // Use a hook to manage the modal state
  const modal = useModal();
  return (
    <Modal
      title={title}
      open={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}
      centered={true}
      zIndex={10}
      footer={false}
      className='text-stone-900 bg-stone-600'
    >
      {longDescription}
    </Modal>
  );
});

export default PortfolioItemModal