import { nanoid } from 'nanoid';
import { Button } from '@/_components/@ui/button';
import { blocksManage } from '../../_store';
import { useBlockActions } from '../../_hooks/useBlockActions';

interface CreateButtonProps {
    isCopy?: boolean;
}

const CreateButton = ({
    isCopy = false
}: CreateButtonProps) => {

    const { updateBlockData } = useBlockActions();
    const handleCreate = async () => {
        const selectedBlockId = blocksManage.getSelectedBlockId()
        const selectBlock = blocksManage.getSelectedBlock()
        const code = blocksManage.code
        if (isCopy) {
            const id = nanoid();
            const { success } = await updateBlockData({
                ...selectBlock,
                id: id,
                code,
            });
            if (success) {
                console.log('复制成功');
                blocksManage.setSelectedBlockId(id);
            }
        } else {
            updateBlockData({
                ...selectBlock,
                id: nanoid(),
                code,
                source_id: selectedBlockId,
            });
        }
    };

    return (
        <Button
            variant="default"
            className={`w-full mb-2 ${isCopy ? 'bg-sky-600 hover:bg-sky-500' : 'bg-blue-600 hover:bg-sky-500'} text-white px-0`}
            onClick={handleCreate}
        >
            {isCopy ? '复制为一个新组件' : '创建为AIGCODE组件'}
        </Button>
    );
};

export default CreateButton;
