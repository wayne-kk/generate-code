import { Button } from '@/_components/@ui/button';
import { blocksManage } from '../../_store';
import { useBlockActions } from '../../_hooks/useBlockActions';

interface UpdateButtonProps {
}

const UpdateButton = ({ }: UpdateButtonProps) => {
    const { updateBlockData } = useBlockActions();
    const handleUpdate = async () => {
        const selectBlock = blocksManage.getSelectedBlock()
        const code = blocksManage.code
        await updateBlockData({
            ...selectBlock,
            code,
        });
    };

    return (
        <Button
            variant="default"
            className="w-full mb-2 bg-sky-600 hover:bg-sky-500 text-white px-0"
            onClick={handleUpdate}
        >
            更新组件
        </Button>
    );
};

export default UpdateButton;
