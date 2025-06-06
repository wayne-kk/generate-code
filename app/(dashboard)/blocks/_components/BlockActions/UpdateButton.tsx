import { Button } from '@/_components/@ui/button';
import { blocksManage } from '../../_store';
import { useBlockActions } from '../../_hooks/useBlockActions';
import { Source } from '../BlockTabs/SourceTabs';

interface UpdateButtonProps {
    source: Source
}

const UpdateButton = ({ source }: UpdateButtonProps) => {
    const { updateBlockData } = useBlockActions();
    const handleUpdate = async () => {
        const selectBlock = blocksManage.getSelectedBlock()
        const code = blocksManage.code
        await updateBlockData(source, {
            ...selectBlock,
            code,
        });
    };

    return (
        <Button
            variant="default"
            className="w-full mb-2"
            onClick={handleUpdate}
        >
            更新组件
        </Button>
    );
};

export default UpdateButton;
