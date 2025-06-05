import { nanoid } from 'nanoid';
import { Button } from '@/_components/@ui/button';
import { blocksManage } from '../../_store';
import { useBlockActions } from '../../_hooks/useBlockActions';
import { Source } from '../BlockTabs/SourceTabs';

interface CreateButtonProps {
    isCopy?: boolean;
    source: Source
}

const CreateButton = ({
    isCopy = false,
    source,
}: CreateButtonProps) => {

    const { updateBlockData } = useBlockActions();
    const handleCreate = async () => {
        const selectedBlockId = blocksManage.getSelectedBlockId()
        const selectBlock = blocksManage.getSelectedBlock()
        const code = blocksManage.code
        if (isCopy) {
            const id = nanoid();
            const { success } = await updateBlockData(source, {
                ...selectBlock,
                id: id,
                code,
            });
            if (success) {
                console.log('复制成功');
                blocksManage.setSelectedBlockId(id);
            }
        } else {
            updateBlockData(source, {
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
            className={`w-full mb-2`}
            onClick={handleCreate}
        >
            {isCopy ? '复制为一个新组件' : '创建为AIGCODE组件'}
        </Button>
    );
};

export default CreateButton;
