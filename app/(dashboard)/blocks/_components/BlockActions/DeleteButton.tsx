import { Button } from '@/_components/@ui/button';
import { blocksManage } from '../../_store';
import { useBlockActions } from '../../_hooks/useBlockActions';

interface DeleteButtonProps {
}

const DeleteButton = ({ }: DeleteButtonProps) => {
    const { deleteBlockData } = useBlockActions();

    return (
        <Button
            variant="default"
            className="w-full mb-2 bg-red-600 hover:bg-red-500 text-white px-0"
            onClick={async () => {
                const selectedBlockId = blocksManage.getSelectedBlockId()
                await deleteBlockData(selectedBlockId!)
                blocksManage.setSelectedBlockId(null)
            }}
        >
            删除组件
        </Button>
    );
};

export default DeleteButton;
